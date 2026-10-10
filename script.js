(() => {
  "use strict";
  const KEY = "menuWithoutDrama.state.v1";
  const INGREDIENTS = [
    ["cottage","Творог 5%"],["yogurt","Йогурт натуральный"],["milk","Молоко"],["cheese","Сыр"],
    ["egg","Яйца"],["oats","Овсяные хлопья"],["flour","Мука"],["bread","Хлеб цельнозерновой"],
    ["buckwheat","Гречка"],["rice","Рис"],["pasta","Макароны"],["chicken","Курица"],
    ["turkey","Индейка"],["beef","Говядина"],["whitefish","Белая рыба"],["tuna","Тунец"],
    ["beans","Фасоль"],["potato","Картофель"],["tomato","Помидоры"],["cucumber","Огурцы"],
    ["carrot","Морковь"],["cabbage","Капуста"],["zucchini","Кабачок"],["broccoli","Брокколи"],
    ["lettuce","Листья салата"],["pepper","Сладкий перец"],["onion","Лук"],["apple","Яблоко"],
    ["banana","Банан"],["berries","Ягоды"],["nuts","Орехи"],["oil","Растительное масло"],
    ["sugar","Сахар"],["coffee","Кофе"],["tea","Чай"]
  ];
  const $ = (id) => document.getElementById(id);
  const clone = (value) => JSON.parse(JSON.stringify(value));
  const format = (value, digits = 0) => new Intl.NumberFormat("ru-RU", { maximumFractionDigits: digits }).format(value);
  const todayDate = (date = new Date()) => [date.getFullYear(), String(date.getMonth()+1).padStart(2,"0"), String(date.getDate()).padStart(2,"0")].join("-");
  const addCalendarDays = (date, amount) => {
    const [y,m,d] = date.split("-").map(Number);
    return todayDate(new Date(y,m-1,d+amount,12));
  };
  const mondayOf = (date) => {
    const [y,m,d] = date.split("-").map(Number);
    return addCalendarDays(date,-((new Date(y,m-1,d,12).getDay()+6)%7));
  };
  function validDate(value) {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const [y,m,d] = value.split("-").map(Number);
    return y >= 1900 && y <= 9999 && todayDate(new Date(y,m-1,d,12)) === value;
  }
  function parseNumber(raw, min, max, step = 1) {
    const text = String(raw ?? "").trim().replace(",",".");
    if (!/^\d+(?:\.\d+)?$/.test(text)) return {value:null,error:"Введите число без лишних символов."};
    const value = Number(text);
    if (!Number.isFinite(value) || value < min || value > max) return {value:null,error:"Допустимо от " + min + " до " + max + "."};
    if (Math.abs(value/step - Math.round(value/step)) > 1e-7) return {value:null,error:"Шаг значения: " + String(step).replace(".",",") + "."};
    return {value,error:null};
  }
  function calorieGoal(profile) {
    if (!["female","male"].includes(profile.formulaSex)) return {ok:false,reason:"Расчётная формула не выбрана. Выберите свою цель или режим без цели."};
    if (profile.pregnancyStatus !== "no") return {ok:false,reason:"Для беременности, кормления или неизвестного статуса автоматический расчёт не применяется. Можно задать свою цель или планировать без неё."};
    if (![profile.age,profile.heightCm,profile.baselineWeightKg,profile.goalWeightKg,profile.activityFactor].every(Number.isFinite))
      return {ok:false,reason:"Не хватает личных параметров для расчёта."};
    if (profile.age < 18 || profile.age > 100 || profile.heightCm < 120 || profile.heightCm > 230 ||
        profile.baselineWeightKg < 30 || profile.baselineWeightKg > 300 || profile.goalWeightKg < 30 ||
        profile.goalWeightKg > profile.baselineWeightKg || ![1.2,1.375,1.55,1.725].includes(profile.activityFactor))
      return {ok:false,reason:"Параметры вне диапазона автоматического расчёта."};
    if (![0,0.25,0.5].includes(profile.lossPreference)) return {ok:false,reason:"Выберите поддержание или пожелание по темпу."};
    if (profile.goalWeightKg / ((profile.heightCm/100)**2) < 18.5)
      return {ok:false,reason:"Желаемый вес ниже диапазона автоматического расчёта. Можно вести меню без цели или использовать цель, согласованную со специалистом."};
    const ree = 10*profile.baselineWeightKg + 6.25*profile.heightCm - 5*profile.age + (profile.formulaSex === "female" ? -161 : 5);
    if (ree <= 0) return {ok:false,reason:"Для этих параметров расчёт недоступен."};
    const tdee = ree*profile.activityFactor;
    const maintenance = profile.goalWeightKg === profile.baselineWeightKg || profile.lossPreference === 0;
    const requested = profile.lossPreference === 0.25 ? 250 : 500;
    const deficit = maintenance ? 0 : Math.min(requested,0.2*tdee);
    const goal = Math.round((tdee-deficit)/10)*10;
    if (goal < (profile.formulaSex === "female" ? 1200 : 1500))
      return {ok:false,reason:"Автоматический ориентир для этих параметров не предлагается. Можно вести меню без цели или использовать цель, согласованную со специалистом.",ree,tdee,deficit};
    return {ok:true,ree,tdee,deficit,goal};
  }
  const manualThreshold = (sex) => sex === "female" ? 1200 : 1500;
  function createEmptyState() {
    return {
      schemaVersion:1,updatedAt:new Date().toISOString(),
      profile:{completed:false,age:null,heightCm:null,baselineWeightKg:null,goalWeightKg:null,formulaSex:"none",activityFactor:null,pregnancyStatus:"unknown",goalMode:"none",lossPreference:0.5,dailyKcalGoal:null,manualGoalConfirmed:false},
      settings:{maxPrepMinutes:30,allowReadyMeals:true,allowRepeats:true,autoSnack:true,tipsEnabled:true,animationsEnabled:true,excludedIngredientIds:[],favoriteRecipeIds:[]},
      customIngredients:[],customRecipes:[],pantry:{},days:{},shoppingMarks:{},weightLog:[],lastGeneration:null
    };
  }
  const isRecord = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
  function validateProfile(p) {
    const errors = [];
    if (!isRecord(p)) return ["Профиль отсутствует."];
    const check = (condition,text) => { if (!condition) errors.push(text); };
    check(typeof p.completed === "boolean","Некорректный статус профиля.");
    const numeric = {age:[18,100,1],heightCm:[120,230,0.1],baselineWeightKg:[30,300,0.1],goalWeightKg:[30,300,0.1]};
    Object.entries(numeric).forEach(([key,[min,max,step]]) => check(p[key] === null || (typeof p[key] === "number" && !parseNumber(p[key],min,max,step).error),"Некорректное поле " + key + "."));
    check(["female","male","none"].includes(p.formulaSex),"Некорректная формула.");
    check(p.activityFactor === null || [1.2,1.375,1.55,1.725].includes(p.activityFactor),"Некорректная активность.");
    check(["no","yes","unknown"].includes(p.pregnancyStatus),"Некорректный статус для расчёта.");
    check(["calculated","manual","none"].includes(p.goalMode),"Некорректный режим цели.");
    check([0,0.25,0.5].includes(p.lossPreference),"Некорректный темп.");
    check(typeof p.manualGoalConfirmed === "boolean","Некорректное подтверждение цели.");
    if (p.baselineWeightKg !== null && p.goalWeightKg !== null) check(p.goalWeightKg <= p.baselineWeightKg,"Желаемый вес больше текущего.");
    if (p.completed) {
      const values = [p.age,p.heightCm,p.baselineWeightKg,p.goalWeightKg,p.activityFactor];
      check(values.every(v => v !== null) || values.every(v => v === null),"Личные параметры сохранены не полностью.");
    }
    if (p.goalMode === "calculated") {
      const calc = calorieGoal(p);
      check(calc.ok && p.dailyKcalGoal === calc.goal,"Некорректная расчётная цель.");
    } else if (p.goalMode === "manual") {
      check(Number.isInteger(p.dailyKcalGoal) && p.dailyKcalGoal >= 1000 && p.dailyKcalGoal <= 5000,"Некорректная ручная цель.");
      check(p.dailyKcalGoal >= manualThreshold(p.formulaSex) || p.manualGoalConfirmed,"Не подтверждена низкая ручная цель.");
    } else check(p.dailyKcalGoal === null,"В режиме без цели калории должны быть пустыми.");
    return errors;
  }
  function validateState(candidate) {
    if (!isRecord(candidate)) return ["Неверная структура данных."];
    let dangerous = false;
    const walk = (item,depth=0) => {
      if (depth>30) {dangerous=true;return;}
      if (item && typeof item === "object") Object.keys(item).forEach(key => {
        if (["__proto__","prototype","constructor"].includes(key)) dangerous=true;
        else walk(item[key],depth+1);
      });
    };
    walk(candidate);
    if (dangerous) return ["Небезопасная или слишком глубокая структура данных."];
    if (candidate.schemaVersion !== 1) return ["Версия данных не поддерживается. Откройте подходящую версию приложения."];
    const errors=validateProfile(candidate.profile);
    if (typeof candidate.updatedAt !== "string" || !Number.isFinite(Date.parse(candidate.updatedAt))) errors.push("Некорректная дата сохранения.");
    const settings=candidate.settings;
    if (!isRecord(settings)) return [...errors,"Нет настроек."];
    if (![15,20,30].includes(settings.maxPrepMinutes)) errors.push("Некорректное время приготовления.");
    ["allowReadyMeals","allowRepeats","autoSnack","tipsEnabled","animationsEnabled"].forEach(k => {if(typeof settings[k] !== "boolean") errors.push("Некорректная настройка "+k+".");});
    const knownIngredients=new Set(INGREDIENTS.map(([id])=>id));
    if (!Array.isArray(settings.excludedIngredientIds) || settings.excludedIngredientIds.some(id=>!knownIngredients.has(id)) || new Set(settings.excludedIngredientIds).size !== settings.excludedIngredientIds.length) errors.push("Некорректные исключения.");
    if (!Array.isArray(settings.favoriteRecipeIds) || settings.favoriteRecipeIds.some(id=>typeof id!=="string")) errors.push("Некорректное избранное.");
    ["customIngredients","customRecipes","weightLog"].forEach(k=>{if(!Array.isArray(candidate[k])) errors.push("Некорректная коллекция "+k+".");});
    ["pantry","days","shoppingMarks"].forEach(k=>{if(!isRecord(candidate[k])) errors.push("Некорректная коллекция "+k+".");});
    if (isRecord(candidate.pantry) && Object.values(candidate.pantry).some(v=>typeof v!=="boolean")) errors.push("Некорректные отметки запасов.");
    if (Array.isArray(candidate.customRecipes) && candidate.customRecipes.length || Array.isArray(candidate.customIngredients) && candidate.customIngredients.length || isRecord(candidate.shoppingMarks) && Object.keys(candidate.shoppingMarks).length)
      errors.push("Эта версия ещё не поддерживает сохранённый каталог или покупки. Исходные данные оставлены без изменений.");
    if (candidate.lastGeneration !== null) errors.push("Данные меню требуют следующей версии приложения.");
    if (isRecord(candidate.days)) {
      if (Object.keys(candidate.days).length>10000) errors.push("Слишком много дней.");
      Object.entries(candidate.days).forEach(([date,day])=>{
        if (!validDate(date) || !isRecord(day) || day.date!==date || !(day.goalKcal===null || Number.isInteger(day.goalKcal)&&day.goalKcal>=1000&&day.goalKcal<=5000) || !Array.isArray(day.planEntries)||!Array.isArray(day.actualEntries)) errors.push("Некорректный день "+date+".");
        else if(day.planEntries.length || day.actualEntries.length) errors.push("Данные заполненного меню требуют следующей версии приложения.");
      });
    }
    if (Array.isArray(candidate.weightLog)) {
      const dates=new Set(),ids=new Set();
      candidate.weightLog.forEach(entry=>{
        if (!isRecord(entry)||typeof entry.id!=="string"||!entry.id||!validDate(entry.date)||entry.date>todayDate()||typeof entry.weightKg!=="number"||parseNumber(entry.weightKg,30,300,0.1).error||typeof entry.note!=="string"||entry.note.length>300||dates.has(entry.date)||ids.has(entry.id)) errors.push("Некорректное измерение веса.");
        else {dates.add(entry.date);ids.add(entry.id);}
      });
    }
    return errors;
  }
  // Pure functions are reusable in subsequent steps and can be tested without UI state.
  window.MenuWithoutDrama = Object.freeze({parseNumber,calorieGoal,validateProfile,validateState,createEmptyState,todayDate,addCalendarDays,mondayOf});
  let state=createEmptyState(),lastSavedRaw=null,originalRaw=null,recovery=false,storageError=null,conflict=false,unsaved=false;
  let activeTab="week",wizardStep=1,skipPersonal=false,baselineForm="",returnFocus=null,dialogScroll=0,discardFocus=null;
  function node(tag,text,className) {
    const el=document.createElement(tag);
    if(text!==undefined) el.textContent=text;
    if(className) el.className=className;
    return el;
  }
  function uid(prefix) {
    return prefix + (window.crypto?.randomUUID ? window.crypto.randomUUID() : Date.now().toString(36)+"-"+Math.random().toString(36).slice(2));
  }
  function storageText(error) {
    if(error?.name==="QuotaExceededError") return "Место для данных закончилось. Последние изменения пока не сохранены — скачайте текущие данные.";
    if(error?.name==="SecurityError") return "Браузер запретил сохранение. Изменения остаются только до закрытия страницы — скачайте текущие данные.";
    return "Не удалось сохранить данные. Изменения остаются только до закрытия страницы — скачайте текущие данные.";
  }
  function markConflict() {
    conflict=true;
    renderStorage();
  }
  function loadState() {
    try {
      const raw=window.localStorage.getItem(KEY);
      lastSavedRaw=raw;originalRaw=raw;
      if(raw!==null) {
        let candidate;
        try {candidate=JSON.parse(raw);} catch {recovery=true;$("recoveryReason").textContent="Сохранённый текст не является корректным JSON.";return;}
        const errors=validateState(candidate);
        if(errors.length) {recovery=true;$("recoveryReason").textContent=errors[0];return;}
        state=candidate;
      }
    } catch(error) {storageError=error;}
  }
  function commit(candidate) {
    if(recovery) return false;
    const errors=validateState(candidate);
    if(errors.length) {announce(errors[0]);return false;}
    if(conflict) {renderStorage();return false;}
    const next=clone(candidate);
    next.updatedAt=new Date().toISOString();
    try {
      if(window.localStorage.getItem(KEY)!==lastSavedRaw) {markConflict();return false;}
      const raw=JSON.stringify(next);
      window.localStorage.setItem(KEY,raw);
      lastSavedRaw=raw;originalRaw=raw;storageError=null;unsaved=false;
    } catch(error) {storageError=error;unsaved=true;}
    state=next;
    render();
    return true;
  }
  function renderStorage() {
    $("storageBanner").hidden=!(storageError||conflict);
    $("storageMessage").textContent=conflict?"Данные изменились в другой вкладке. Обновите страницу перед сохранением.":storageText(storageError);
    $("retrySave").hidden=conflict||recovery;
    $("emergencyExport").hidden=recovery;
    $("reloadState").hidden=!conflict;
    $("saveStatus").textContent=conflict?"Нужно обновить страницу":storageError?"Сохранение недоступно":state.profile.completed?"Сохранено в этом браузере":"Данные только в вашем браузере";
  }
  function announce(message) {$("toast").textContent=message;}
  function profileSummary() {
    const p=state.profile;
    const names={female:"Женский",male:"Мужской",none:"Без формулы"};
    const activity={1.2:"Низкая",1.375:"Небольшая",1.55:"Умеренная",1.725:"Высокая"};
    return [
      ["Возраст",p.age===null?"Не указан":p.age+" лет"],["Рост",p.heightCm===null?"Не указан":format(p.heightCm,1)+" см"],
      ["Текущий вес в профиле",p.baselineWeightKg===null?"Не указан":format(p.baselineWeightKg,1)+" кг"],
      ["Желаемый вес",p.goalWeightKg===null?"Не указан":format(p.goalWeightKg,1)+" кг"],
      ["Формула",names[p.formulaSex]],["Активность",activity[p.activityFactor]||"Не указана"],
      ["Режим цели",{calculated:"Ориентировочный расчёт",manual:"Своя цель",none:"Без калорийной цели"}[p.goalMode]],
      ["Ориентир",p.dailyKcalGoal===null?"Не задан":format(p.dailyKcalGoal)+" ккал / день"]
    ];
  }
  function summaryList(rows) {
    const dl=node("dl",undefined,"summary-list");
    rows.forEach(([label,value])=>{const pair=node("div",undefined,"summary-pair");pair.append(node("dt",label),node("dd",value));dl.append(pair);});
    return dl;
  }
  function button(text,action,secondary=false) {
    const el=node("button",text,"button "+(secondary?"secondary":"primary"));
    el.type="button";el.dataset.action=action;return el;
  }
  function illustration(id) {
    const svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.classList.add("character");svg.setAttribute("aria-hidden","true");
    const use=document.createElementNS("http://www.w3.org/2000/svg","use");use.setAttribute("href","#"+id);svg.append(use);return svg;
  }
  function renderPanel() {
    const panel=$("panelContent");panel.replaceChildren();
    const labels={week:["Своя еда. Свой ритм.","Неделя без драмы"],recipes:["Простая еда на каждый день","Ваши блюда"],shopping:["Меньше забытых продуктов","Покупки"],weight:["Спокойно наблюдаем","Ваш вес"],settings:["План подстраивается под вас","Настройки"]};
    $("sectionEyebrow").textContent=labels[activeTab][0];$("sectionTitle").textContent=labels[activeTab][1];
    $("weekBar").hidden=activeTab!=="week";
    if(activeTab==="settings") {
      const grid=node("div",undefined,"settings-grid");
      const profile=node("section",undefined,"card");profile.append(node("h2","Личный профиль"),summaryList(profileSummary()),button("Изменить профиль","open-profile"));
      const pref=node("section",undefined,"card");pref.append(node("h2","Ваши предпочтения"));
      const options=[["Время готовки","До "+state.settings.maxPrepMinutes+" минут"],["Готовые блюда",state.settings.allowReadyMeals?"Можно":"Не подбирать"],["Повторение",state.settings.allowRepeats?"Разрешено":"Без повторов"],["Перекус в подборе",state.settings.autoSnack?"Добавлять":"Не добавлять"],["Подсказки",state.settings.tipsEnabled?"Включены":"Выключены"],["Анимации",state.settings.animationsEnabled?"Включены":"Выключены"]];
      pref.append(summaryList(options),button("Изменить предпочтения","edit-preferences",true));
      const excluded=node("section",undefined,"card wide");excluded.append(node("h2","Исключённые продукты"));
      const chips=node("div",undefined,"chips");
      const selected=state.settings.excludedIngredientIds;
      if(!selected.length) excluded.append(node("p","Нет исключений."));
      else INGREDIENTS.filter(([id])=>selected.includes(id)).forEach(([,name])=>chips.append(node("span",name,"pill")));
      excluded.append(chips,button("Изменить исключения","open-profile",true));
      const pending=node("section",undefined,"card wide");pending.append(node("h2","Продукты дома и резервные копии"),node("p","Учёт продуктов, перенос данных и импорт появятся после завершения следующих разделов. Пока можно настроить профиль."));
      const btn=button("Импорт и экспорт","unavailable",true);btn.disabled=true;pending.append(btn);
      const bytes=JSON.stringify(state).length*2;pending.append(node("p","Объём данных: примерно "+format(bytes/1024,1)+" КиБ. Данные относятся к этому браузеру.","subtle"));
      grid.append(profile,pref,excluded,pending);panel.append(grid);return;
    }
    if(activeTab==="week") {
      const stats=node("div",undefined,"stats");
      const p=state.profile;
      [
        ["Ориентир на день",p.dailyKcalGoal===null?"Без цели":format(p.dailyKcalGoal)+" ккал","Можно изменить в настройках"],
        ["Желаемый вес",p.goalWeightKg===null?"Не указан":format(p.goalWeightKg,1)+" кг","Темп не является обещанием"],
        ["Приготовление","До "+state.settings.maxPrepMinutes+" минут","Простые блюда — ваш выбор"]
      ].forEach(([label,value,detail])=>{const card=node("article",undefined,"card");card.append(node("span",label,"stat-label"),node("span",value,"stat-value"),node("span",detail,"stat-detail"));stats.append(card);});
      panel.append(stats);
    }
    const card=node("section",undefined,"card next-card"),copy=node("div");
    const copyMap={
      week:["Сначала ориентир, потом меню","Профиль настроен. Планирование недели, блюда и покупки пока недоступны — они появятся в следующей версии.","Создать меню","sandwich"],
      recipes:["Здесь будут ваши простые блюда","Каталог, рецепты и выбор блюд пока недоступны. Предпочтения уже сохранены в профиле.","Выбрать блюдо","carrot"],
      shopping:["Список без лишних расследований","Покупки на завтра и неделю, отметки «есть дома» и скачивание списка пока недоступны.","Составить покупки","coffee-cup"],
      weight:["Начало уже есть","График и журнал веса пока недоступны. Начальное измерение сохранено, если вы указали текущий вес.","Добавить измерение","carrot"]
    };
    const [title,text,action,art]=copyMap[activeTab];
    copy.append(node("span","Пока доступен профиль","eyebrow"),node("h2",title),node("p",text));
    if(activeTab==="weight"&&state.weightLog.length) {
      const latest=[...state.weightLog].sort((a,b)=>b.date.localeCompare(a.date))[0];
      copy.append(node("p","Начальное измерение: "+format(latest.weightKg,1)+" кг · "+latest.date,"subtle"));
    }
    const unavailable=button(action,"unavailable");unavailable.disabled=true;copy.append(unavailable);
    copy.append(button("Открыть настройки","settings",true));
    card.append(copy,illustration(art));panel.append(card);
    if(state.settings.tipsEnabled) {
      const tip=node("p","План можно менять — он не начальник.","notice notice-tip");panel.append(tip);
    }
  }
  function render() {
    document.documentElement.dataset.animations=state.settings.animationsEnabled?"on":"off";
    $("welcome").hidden=recovery||state.profile.completed;
    $("workspace").hidden=recovery||!state.profile.completed;
    $("recovery").hidden=!recovery;
    document.querySelectorAll("[data-tab]").forEach(el=>{
      el.disabled=recovery||!state.profile.completed;
      if(el.dataset.tab===activeTab) el.setAttribute("aria-current","page");else el.removeAttribute("aria-current");
    });
    const monday=mondayOf(todayDate()),sunday=addCalendarDays(monday,6);
    const dateLabel=(date)=>{const [y,m,d]=date.split("-").map(Number);return new Date(y,m-1,d,12).toLocaleDateString("ru-RU",{day:"numeric",month:"long"});};
    $("weekLabel").textContent=dateLabel(monday)+" — "+dateLabel(sunday);
    renderStorage();
    if(state.profile.completed&&!recovery) renderPanel();
  }
  function buildIngredientOptions() {
    const container=$("ingredientOptions");
    INGREDIENTS.forEach(([id,name])=>{
      const label=node("label",undefined,"check-line");
      label.dataset.ingredientName=name.toLocaleLowerCase("ru-RU");
      const input=document.createElement("input");input.type="checkbox";input.name="excluded";input.value=id;input.id="exclude-"+id;
      label.append(input,node("span",name));container.append(label);
    });
  }
  function formFingerprint() {
    return JSON.stringify({skip:skipPersonal,values:[...new FormData($("profileForm")).entries()]});
  }
  function openModal(dialog,focusEl) {
    returnFocus=document.activeElement;dialogScroll=window.scrollY;
    document.body.style.position="fixed";document.body.style.top="-"+dialogScroll+"px";document.body.style.width="100%";
    document.body.classList.add("modal-open");dialog.showModal();focusEl.focus();
  }
  function closeModal(dialog) {
    dialog.close();document.body.classList.remove("modal-open");document.body.style.position="";document.body.style.top="";document.body.style.width="";
    window.scrollTo(0,dialogScroll);
    if(returnFocus?.isConnected) returnFocus.focus({preventScroll:true});
    else $("main").focus({preventScroll:true});
  }
  function clearErrors() {
    $("profileForm").querySelectorAll(".field-error").forEach(el=>el.textContent="");
    $("profileForm").querySelectorAll("[aria-invalid]").forEach(el=>el.removeAttribute("aria-invalid"));
  }
  function showErrors(errors) {
    clearErrors();let first=null;
    Object.entries(errors).forEach(([id,text])=>{
      const error=$(id+"Error");if(error) error.textContent=text;
      const field=$(id);if(field) {field.setAttribute("aria-invalid","true");if(!first) first=field;}
      else if(id==="exclusions"&&!first) first=$("noExclusions");
    });
    if(first) first.focus();
  }
  function fillForm() {
    const p=state.profile,s=state.settings;
    ["age","heightCm","baselineWeightKg","goalWeightKg","formulaSex","activityFactor","pregnancyStatus"].forEach(id=>$(id).value=p[id]===null?"":String(p[id]));
    if(!p.completed) {["formulaSex","pregnancyStatus"].forEach(id=>$(id).value="");$("activityFactor").value="";}
    $("goalMode").value=p.completed?p.goalMode:"calculated";
    $("lossPreference").value=String(p.lossPreference);
    $("dailyKcalGoal").value=p.dailyKcalGoal===null?"":String(p.dailyKcalGoal);
    $("manualGoalConfirmed").checked=p.manualGoalConfirmed;
    $("maxPrepMinutes").value=String(s.maxPrepMinutes);
    ["allowReadyMeals","allowRepeats","autoSnack","tipsEnabled","animationsEnabled"].forEach(id=>$(id).checked=s[id]);
    document.querySelectorAll('input[name="excluded"]').forEach(el=>el.checked=s.excludedIngredientIds.includes(el.value));
    $("noExclusions").checked=p.completed&&!s.excludedIngredientIds.length;
    $("ingredientSearch").value="";filterIngredients();
    $("applyGoal").checked=false;
  }
  function setSkip(value) {
    skipPersonal=value;$("personalFields").hidden=value;$("personalFields").disabled=value;
    $("skipExplanation").hidden=!value;
    $("skipPersonal").textContent=value?"Всё-таки заполнить личные параметры":"Пользоваться без персонального расчёта";
    if(value) $("goalMode").value="none";
  }
  function openProfile(skip=false,preferences=false) {
    if(recovery)return;
    clearErrors();fillForm();
    setSkip(skip||state.profile.completed&&state.profile.age===null);
    $("discardPrompt").hidden=true;$("wizardActions").hidden=false;
    wizardStep=preferences&&state.profile.completed?2:1;
    setWizardStep(wizardStep,false);
    baselineForm=formFingerprint();
    openModal($("profileDialog"),wizardStep===1?(skipPersonal?$("noExclusions"):$("age")):$("goalMode"));
  }
  function requestClose() {
    if(formFingerprint()!==baselineForm) {
      discardFocus=document.activeElement;$("discardPrompt").hidden=false;$("wizardActions").hidden=true;$("stayEditing").focus();
    } else closeModal($("profileDialog"));
  }
  function setWizardStep(step,focus=true) {
    wizardStep=step;$("wizardStepOne").hidden=step!==1;$("wizardStepTwo").hidden=step!==2;
    $("wizardCounter").textContent=step===1?"1 из 2 · знакомимся":"2 из 2 · ваш ориентир";
    $("profileTitle").textContent=step===1?"Начнём с вас":"Цель без строгих правил";
    $("wizardBack").hidden=step===1;$("wizardNext").textContent=step===1?"Далее →":"Сохранить профиль";
    $("trackSecond").classList.toggle("active",step===2);
    $("discardPrompt").hidden=true;$("wizardActions").hidden=false;
    if(step===2) updatePreview();
    $("profileDialog").scrollTop=0;
    if(focus) (step===1?(skipPersonal?$("noExclusions"):$("age")):$("goalMode")).focus();
  }
  function readPersonal() {
    const p={completed:true,age:null,heightCm:null,baselineWeightKg:null,goalWeightKg:null,formulaSex:"none",activityFactor:null,pregnancyStatus:"unknown"};
    const errors={};
    if(!skipPersonal) {
      const ranges={age:[18,100,1],heightCm:[120,230,0.1],baselineWeightKg:[30,300,0.1],goalWeightKg:[30,300,0.1]};
      Object.entries(ranges).forEach(([id,range])=>{const result=parseNumber($(id).value,...range);p[id]=result.value;if(result.error)errors[id]=result.error;});
      p.formulaSex=$("formulaSex").value;p.pregnancyStatus=$("pregnancyStatus").value;p.activityFactor=Number($("activityFactor").value);
      if(!["female","male","none"].includes(p.formulaSex)) errors.formulaSex="Выберите вариант формулы.";
      if(![1.2,1.375,1.55,1.725].includes(p.activityFactor)) errors.activityFactor="Выберите уровень активности.";
      if(!["no","yes","unknown"].includes(p.pregnancyStatus)) errors.pregnancyStatus="Выберите вариант.";
      if(p.goalWeightKg!==null&&p.baselineWeightKg!==null&&p.goalWeightKg>p.baselineWeightKg) errors.goalWeightKg="Желаемый вес не должен быть выше текущего.";
    }
    const selected=[...document.querySelectorAll('input[name="excluded"]:checked')].map(el=>el.value);
    if(!selected.length&&!$("noExclusions").checked) errors.exclusions="Отметьте продукты или явно выберите «Нет исключений».";
    return {profile:p,errors,selected};
  }
  function currentDraft() {
    const {profile}=readPersonal();
    return {...profile,goalMode:$("goalMode").value,lossPreference:Number($("lossPreference").value)};
  }
  function updatePreview() {
    const p=currentDraft(),preview=$("goalPreview");
    preview.replaceChildren();$("manualGoalField").hidden=p.goalMode!=="manual";$("lowGoalWarning").hidden=true;
    $("lossPreference").disabled=p.goalMode!=="calculated";
    const same=p.baselineWeightKg!==null&&p.goalWeightKg===p.baselineWeightKg;
    [...$("lossPreference").options].forEach(option=>option.disabled=same&&option.value!=="0");
    if(same) $("lossPreference").value="0";
    p.lossPreference=Number($("lossPreference").value);
    const calc=calorieGoal(p);
    $("goalMode").querySelector('option[value="calculated"]').disabled=!calc.ok;
    if(p.goalMode==="calculated") {
      if(calc.ok) {
        preview.append(node("span","Ориентир на день","stat-label"),node("strong",format(calc.goal)+" ккал","goal-number"));
        preview.append(summaryList([["Расход в покое (REE)",format(calc.ree,2)+" ккал"],["Оценка поддержания",format(calc.tdee,2)+" ккал"],["Принятый дефицит",format(calc.deficit,2)+" ккал"],["Исходные параметры",p.age+" лет · "+format(p.heightCm,1)+" см · "+format(p.baselineWeightKg,1)+" кг"]]));
      } else preview.append(node("p",calc.reason));
    } else if(p.goalMode==="manual") {
      preview.append(node("p","Используем вашу цель. От 1000 до 5000 ккал, целым числом. Это не индивидуальное назначение."));
      const value=parseNumber($("dailyKcalGoal").value,1000,5000,1);
      if(!value.error && value.value<manualThreshold(p.formulaSex)) $("lowGoalWarning").hidden=false;
    } else preview.append(node("p","Без калорийной цели. Позже можно будет планировать блюда и записывать съеденное без дневного ориентира."));
    preview.append(node("p","Ориентир, а не назначение. Изменение веса индивидуально; темп не гарантируется.","subtle"));
    const goal=p.goalMode==="none"?null:p.goalMode==="calculated"&&calc.ok?calc.goal:Number($("dailyKcalGoal").value);
    $("applyGoalField").hidden=!state.profile.completed||goal===state.profile.dailyKcalGoal;
  }
  function saveProfile() {
    const input=readPersonal();
    if(Object.keys(input.errors).length) {setWizardStep(1);showErrors(input.errors);return;}
    const p={...input.profile,goalMode:$("goalMode").value,lossPreference:Number($("lossPreference").value),dailyKcalGoal:null,manualGoalConfirmed:false};
    const errors={};
    if(p.goalWeightKg!==null&&p.goalWeightKg===p.baselineWeightKg)p.lossPreference=0;
    if(p.goalMode==="calculated") {
      const calc=calorieGoal(p);if(!calc.ok)errors.goalMode=calc.reason;else p.dailyKcalGoal=calc.goal;
    } else if(p.goalMode==="manual") {
      const manual=parseNumber($("dailyKcalGoal").value,1000,5000,1);
      if(manual.error) errors.dailyKcalGoal=manual.error;
      else {
        p.dailyKcalGoal=manual.value;p.manualGoalConfirmed=$("manualGoalConfirmed").checked;
        if(manual.value<manualThreshold(p.formulaSex)&&!p.manualGoalConfirmed) errors.goalMode="Подтвердите, что низкая цель выбрана вами, или измените цель.";
      }
    }
    if(Object.keys(errors).length) {showErrors(errors);return;}
    const next=clone(state);
    next.profile=p;
    ["allowReadyMeals","allowRepeats","autoSnack","tipsEnabled","animationsEnabled"].forEach(id=>next.settings[id]=$(id).checked);
    next.settings.maxPrepMinutes=Number($("maxPrepMinutes").value);next.settings.excludedIngredientIds=input.selected;
    if(p.baselineWeightKg!==null&&!next.weightLog.some(entry=>entry.date===todayDate()))
      next.weightLog.push({id:uid("wl_"),date:todayDate(),weightKg:p.baselineWeightKg,note:"Начальное измерение из профиля"});
    if($("applyGoal").checked) Object.values(next.days).forEach(day=>{if(day.date>=todayDate())day.goalKcal=p.dailyKcalGoal;});
    if(commit(next)) {
      closeModal($("profileDialog"));
      announce(storageError?"Профиль принят, но пока не сохранён. Скачайте текущие данные.":"Профиль сохранён. Теперь можно спокойно планировать.");
    } else {
      $("goalModeError").textContent=conflict?"Данные изменились в другой вкладке. Закройте форму и обновите страницу.":"Не удалось применить профиль.";
    }
  }
  function filterIngredients() {
    const term=$("ingredientSearch").value.trim().toLocaleLowerCase("ru-RU");let visible=0;
    $("ingredientOptions").querySelectorAll("label").forEach(el=>{el.hidden=!el.dataset.ingredientName.includes(term);if(!el.hidden)visible++;});
    $("ingredientEmpty").hidden=visible!==0;
  }
  function downloadText(text,filename) {
    const url=URL.createObjectURL(new Blob([text],{type:"application/json;charset=utf-8"}));
    const a=node("a","Скачать файл");a.href=url;a.download=filename;
    document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
  }
  function emergencyExport() {
    downloadText(JSON.stringify({appId:"menu-without-drama",schemaVersion:1,catalogVersion:1,exportedAt:new Date().toISOString(),state},null,2),"lozhka-poryadka-"+todayDate()+".json");
  }
  function bindEvents() {
    document.addEventListener("click",event=>{
      const action=event.target.closest("[data-action]")?.dataset.action;
      if(action==="open-profile") openProfile();
      if(action==="skip-profile") openProfile(true);
      if(action==="edit-preferences") openProfile(false,true);
      if(action==="settings") {activeTab="settings";render();}
      const tab=event.target.closest("[data-tab]");
      if(tab&&!tab.disabled) {activeTab=tab.dataset.tab;render();announce("");}
    });
    $("profileForm").addEventListener("submit",event=>{
      event.preventDefault();
      if(!$("discardPrompt").hidden)return;
      if(wizardStep===1) {
        const result=readPersonal();showErrors(result.errors);
        if(!Object.keys(result.errors).length) {
          if(result.profile.goalWeightKg!==null&&result.profile.goalWeightKg===result.profile.baselineWeightKg)$("lossPreference").value="0";
          setWizardStep(2);
        }
      } else saveProfile();
    });
    $("wizardBack").addEventListener("click",()=>{clearErrors();setWizardStep(1);});
    $("skipPersonal").addEventListener("click",()=>{setSkip(!skipPersonal);clearErrors();});
    $("profileDialog").addEventListener("cancel",event=>{event.preventDefault();requestClose();});
    $("closeProfile").addEventListener("click",requestClose);
    $("stayEditing").addEventListener("click",()=>{$("discardPrompt").hidden=true;$("wizardActions").hidden=false;(discardFocus?.isConnected?discardFocus:$("wizardNext")).focus();});
    $("discardChanges").addEventListener("click",()=>closeModal($("profileDialog")));
    $("ingredientSearch").addEventListener("input",filterIngredients);
    $("noExclusions").addEventListener("change",()=>{if($("noExclusions").checked) document.querySelectorAll('input[name="excluded"]').forEach(el=>el.checked=false);$("exclusionsError").textContent="";});
    $("ingredientOptions").addEventListener("change",event=>{if(event.target.checked)$("noExclusions").checked=false;$("exclusionsError").textContent="";});
    ["goalMode","lossPreference","dailyKcalGoal"].forEach(id=>$(id).addEventListener("input",()=>{if(id!=="lossPreference")$("manualGoalConfirmed").checked=false;clearErrors();updatePreview();}));
    $("retrySave").addEventListener("click",()=>{if(commit(state)&&!storageError)announce("Данные сохранены в браузере.");});
    $("emergencyExport").addEventListener("click",emergencyExport);
    $("reloadState").addEventListener("click",()=>{
      if($("profileDialog").open&&formFingerprint()!==baselineForm){requestClose();return;}
      if(unsaved){announce("Сначала скачайте текущие данные, чтобы сохранить изменения этой страницы.");unsaved=false;return;}
      window.location.reload();
    });
    $("downloadOriginal").addEventListener("click",()=>downloadText(originalRaw??"","lozhka-poryadka-original-"+todayDate()+".json"));
    $("resetBroken").addEventListener("click",()=>{$("resetWord").value="";$("resetError").textContent="";openModal($("resetDialog"),$("resetWord"));});
    const closeReset=()=>closeModal($("resetDialog"));
    $("closeReset").addEventListener("click",closeReset);$("cancelReset").addEventListener("click",closeReset);
    $("resetDialog").addEventListener("cancel",event=>{event.preventDefault();closeReset();});
    $("resetForm").addEventListener("submit",event=>{
      event.preventDefault();
      if($("resetWord").value.trim()!=="УДАЛИТЬ") {$("resetError").textContent="Введите слово УДАЛИТЬ.";return;}
      try {
        if(window.localStorage.getItem(KEY)!==lastSavedRaw) {$("resetError").textContent="Исходные данные изменились. Обновите страницу.";return;}
        window.localStorage.removeItem(KEY);
        state=createEmptyState();lastSavedRaw=null;originalRaw=null;recovery=false;storageError=null;conflict=false;unsaved=false;
        closeReset();render();announce("Можно начать с нового профиля.");
      } catch {$("resetError").textContent="Браузер не разрешил удалить данные. Исходная копия не изменена.";}
    });
    window.addEventListener("storage",event=>{if((event.key===KEY||event.key===null)&&event.newValue!==lastSavedRaw)markConflict();});
    window.addEventListener("beforeunload",event=>{
      if(unsaved||$("profileDialog").open&&formFingerprint()!==baselineForm){event.preventDefault();event.returnValue="";}
    });
    const refreshDate=()=>{if(!document.hidden&&!$("profileDialog").open)render();};
    document.addEventListener("visibilitychange",refreshDate);window.addEventListener("focus",refreshDate);
  }
  buildIngredientOptions();bindEvents();loadState();render();
})();
