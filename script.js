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
  const FOOD = [{"id":"cottage","name":"Творог 5%","unit":"g","kcalPer100":121,"group":"молочное"},{"id":"yogurt","name":"Йогурт натуральный 2%","unit":"g","kcalPer100":60,"group":"молочное"},{"id":"milk","name":"Молоко 2,5%","unit":"ml","kcalPer100":52,"group":"молочное"},{"id":"cheese","name":"Сыр полутвёрдый","unit":"g","kcalPer100":350,"group":"молочное"},{"id":"egg","name":"Яйцо без скорлупы","unit":"g","kcalPer100":143,"group":"яйца"},{"id":"oats","name":"Овсяные хлопья сухие","unit":"g","kcalPer100":370,"group":"крупы"},{"id":"flour","name":"Мука пшеничная","unit":"g","kcalPer100":334,"group":"крупы"},{"id":"bread","name":"Хлеб цельнозерновой","unit":"g","kcalPer100":240,"group":"хлеб"},{"id":"buckwheat","name":"Гречка сухая","unit":"g","kcalPer100":343,"group":"крупы"},{"id":"rice","name":"Рис сухой","unit":"g","kcalPer100":350,"group":"крупы"},{"id":"pasta","name":"Макароны сухие","unit":"g","kcalPer100":350,"group":"крупы"},{"id":"chicken","name":"Филе курицы сырое","unit":"g","kcalPer100":120,"group":"мясо"},{"id":"turkey","name":"Филе индейки сырое","unit":"g","kcalPer100":115,"group":"мясо"},{"id":"beef","name":"Говядина нежирная сырая","unit":"g","kcalPer100":170,"group":"мясо"},{"id":"whitefish","name":"Филе белой рыбы сырое","unit":"g","kcalPer100":82,"group":"рыба"},{"id":"tuna","name":"Тунец консервированный без жидкости","unit":"g","kcalPer100":110,"group":"рыба"},{"id":"beans","name":"Фасоль консервированная без жидкости","unit":"g","kcalPer100":100,"group":"консервы"},{"id":"potato","name":"Картофель","unit":"g","kcalPer100":77,"group":"овощи"},{"id":"tomato","name":"Помидоры","unit":"g","kcalPer100":18,"group":"овощи"},{"id":"cucumber","name":"Огурцы","unit":"g","kcalPer100":15,"group":"овощи"},{"id":"carrot","name":"Морковь","unit":"g","kcalPer100":41,"group":"овощи"},{"id":"cabbage","name":"Капуста","unit":"g","kcalPer100":25,"group":"овощи"},{"id":"zucchini","name":"Кабачок","unit":"g","kcalPer100":24,"group":"овощи"},{"id":"broccoli","name":"Брокколи","unit":"g","kcalPer100":34,"group":"овощи"},{"id":"lettuce","name":"Листья салата","unit":"g","kcalPer100":15,"group":"овощи"},{"id":"pepper","name":"Перец сладкий","unit":"g","kcalPer100":27,"group":"овощи"},{"id":"onion","name":"Лук","unit":"g","kcalPer100":40,"group":"овощи"},{"id":"apple","name":"Яблоко","unit":"g","kcalPer100":52,"group":"фрукты"},{"id":"banana","name":"Банан","unit":"g","kcalPer100":89,"group":"фрукты"},{"id":"berries","name":"Ягоды","unit":"g","kcalPer100":45,"group":"фрукты"},{"id":"nuts","name":"Орехи","unit":"g","kcalPer100":650,"group":"другое"},{"id":"oil","name":"Растительное масло","unit":"g","kcalPer100":900,"group":"другое"},{"id":"sugar","name":"Сахар","unit":"g","kcalPer100":400,"group":"другое"},{"id":"coffee","name":"Кофе молотый, сухой","unit":"g","kcalPer100":0,"group":"напитки"},{"id":"tea","name":"Чай сухой","unit":"g","kcalPer100":0,"group":"напитки"}];
  const RECIPES = [{"id":"b01","name":"Творог с ягодами","prepMinutes":5,"ingredients":[{"ingredientId":"cottage","quantity":200},{"ingredientId":"berries","quantity":100},{"ingredientId":"oats","quantity":25}],"mealTypes":["breakfast"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":true,"steps":["Смешайте творог с ягодами.","Добавьте овсяные хлопья и перемешайте."],"note":""},{"id":"b02","name":"Овсянка с бананом","prepMinutes":10,"ingredients":[{"ingredientId":"oats","quantity":50},{"ingredientId":"milk","quantity":150},{"ingredientId":"banana","quantity":100}],"mealTypes":["breakfast"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Сварите хлопья в молоке с небольшим количеством воды.","Нарежьте банан и добавьте к каше."],"note":""},{"id":"b03","name":"Омлет с помидорами и хлебом","prepMinutes":15,"ingredients":[{"ingredientId":"egg","quantity":100},{"ingredientId":"tomato","quantity":150},{"ingredientId":"oil","quantity":5},{"ingredientId":"bread","quantity":50}],"mealTypes":["breakfast"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Нарежьте помидоры и прогрейте на масле.","Добавьте взбитые яйца и готовьте до полной готовности.","Подайте с хлебом."],"note":""},{"id":"b04","name":"Сырники с йогуртом","prepMinutes":20,"ingredients":[{"ingredientId":"cottage","quantity":150},{"ingredientId":"egg","quantity":50},{"ingredientId":"flour","quantity":25},{"ingredientId":"oil","quantity":5},{"ingredientId":"yogurt","quantity":50}],"mealTypes":["breakfast"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Смешайте творог, яйцо и муку.","Сформируйте сырники и обжарьте на указанном масле до полной готовности.","Подайте с йогуртом."],"note":""},{"id":"b05","name":"Йогурт с овсянкой и яблоком","prepMinutes":5,"ingredients":[{"ingredientId":"yogurt","quantity":200},{"ingredientId":"oats","quantity":40},{"ingredientId":"apple","quantity":150}],"mealTypes":["breakfast"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":true,"steps":["Нарежьте яблоко.","Смешайте йогурт, хлопья и яблоко."],"note":""},{"id":"b06","name":"Тосты с сыром и овощами","prepMinutes":5,"ingredients":[{"ingredientId":"bread","quantity":70},{"ingredientId":"cheese","quantity":30},{"ingredientId":"cucumber","quantity":100},{"ingredientId":"tomato","quantity":100}],"mealTypes":["breakfast"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":true,"steps":["Нарежьте овощи и сыр.","Подсушите хлеб по желанию и положите сыр, подайте с овощами."],"note":""},{"id":"b07","name":"Яйца с овощами и хлебом","prepMinutes":15,"ingredients":[{"ingredientId":"egg","quantity":100},{"ingredientId":"cucumber","quantity":100},{"ingredientId":"tomato","quantity":100},{"ingredientId":"bread","quantity":50}],"mealTypes":["breakfast"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Отварите яйца до полной готовности.","Нарежьте овощи и подайте с яйцами и хлебом."],"note":""},{"id":"b08","name":"Творог с бананом и орехами","prepMinutes":5,"ingredients":[{"ingredientId":"cottage","quantity":180},{"ingredientId":"banana","quantity":100},{"ingredientId":"nuts","quantity":10}],"mealTypes":["breakfast"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":true,"steps":["Нарежьте банан.","Добавьте его к творогу, посыпьте орехами."],"note":""},{"id":"m01","name":"Курица с гречкой и салатом","prepMinutes":25,"ingredients":[{"ingredientId":"chicken","quantity":150},{"ingredientId":"buckwheat","quantity":60},{"ingredientId":"cucumber","quantity":100},{"ingredientId":"tomato","quantity":100},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Отварите гречку.","Нарежьте курицу и готовьте на части масла до полной готовности; проверьте середину кусочков.","Нарежьте овощи, заправьте оставшимся маслом и подайте."],"note":""},{"id":"m02","name":"Курица с рисом и брокколи","prepMinutes":25,"ingredients":[{"ingredientId":"chicken","quantity":150},{"ingredientId":"rice","quantity":60},{"ingredientId":"broccoli","quantity":150},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Отварите рис и брокколи.","Нарежьте курицу и готовьте на масле до полной готовности, проверяя середину кусочков.","Подайте вместе."],"note":""},{"id":"m03","name":"Макароны с курицей и томатами","prepMinutes":25,"ingredients":[{"ingredientId":"pasta","quantity":70},{"ingredientId":"chicken","quantity":130},{"ingredientId":"tomato","quantity":150},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Отварите макароны.","Нарежьте курицу и обжарьте на масле до полной готовности, затем добавьте помидоры.","Соедините с макаронами и прогрейте."],"note":""},{"id":"m04","name":"Говядина с картофелем и салатом","prepMinutes":30,"ingredients":[{"ingredientId":"beef","quantity":130},{"ingredientId":"potato","quantity":200},{"ingredientId":"cucumber","quantity":100},{"ingredientId":"tomato","quantity":100},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Нарежьте картофель и отварите.","Нарежьте говядину тонкими кусочками и готовьте на части масла до полной готовности.","Нарежьте овощи, заправьте остальным маслом и подайте."],"note":""},{"id":"m05","name":"Рыба с картофелем и брокколи","prepMinutes":30,"ingredients":[{"ingredientId":"whitefish","quantity":180},{"ingredientId":"potato","quantity":220},{"ingredientId":"broccoli","quantity":150},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Нарежьте картофель и отварите вместе с брокколи.","Готовьте рыбу на масле до полной готовности.","Подайте с овощами."],"note":""},{"id":"m06","name":"Индейка с гречкой и овощами","prepMinutes":25,"ingredients":[{"ingredientId":"turkey","quantity":150},{"ingredientId":"buckwheat","quantity":60},{"ingredientId":"carrot","quantity":80},{"ingredientId":"pepper","quantity":100},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Отварите гречку.","Нарежьте индейку и овощи.","Готовьте индейку на масле до полной готовности, добавьте овощи и доведите их до готовности."],"note":""},{"id":"m07","name":"Салат с тунцом и хлебом","prepMinutes":10,"ingredients":[{"ingredientId":"tuna","quantity":130},{"ingredientId":"lettuce","quantity":50},{"ingredientId":"cucumber","quantity":100},{"ingredientId":"tomato","quantity":150},{"ingredientId":"bread","quantity":60},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":true,"steps":["Слейте жидкость с тунца.","Нарежьте овощи, соедините с листьями салата и тунцом, заправьте маслом.","Подайте с хлебом."],"note":""},{"id":"m08","name":"Салат с фасолью и яйцом","prepMinutes":15,"ingredients":[{"ingredientId":"beans","quantity":150},{"ingredientId":"egg","quantity":100},{"ingredientId":"cucumber","quantity":100},{"ingredientId":"tomato","quantity":100},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Отварите яйца до полной готовности.","Слейте жидкость с фасоли, нарежьте овощи и яйца.","Соедините и заправьте маслом."],"note":""},{"id":"m09","name":"Тёплый салат с курицей","prepMinutes":20,"ingredients":[{"ingredientId":"chicken","quantity":150},{"ingredientId":"lettuce","quantity":60},{"ingredientId":"pepper","quantity":100},{"ingredientId":"tomato","quantity":100},{"ingredientId":"bread","quantity":50},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Нарежьте курицу и готовьте на масле до полной готовности.","Нарежьте овощи, соедините с салатом и тёплой курицей.","Подайте с хлебом."],"note":""},{"id":"m10","name":"Макароны с тунцом","prepMinutes":20,"ingredients":[{"ingredientId":"pasta","quantity":70},{"ingredientId":"tuna","quantity":120},{"ingredientId":"tomato","quantity":150},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Отварите макароны.","Слейте жидкость с тунца, нарежьте помидоры.","Прогрейте помидоры на масле, добавьте тунец и макароны."],"note":""},{"id":"m11","name":"Говядина с рисом и овощами","prepMinutes":30,"ingredients":[{"ingredientId":"beef","quantity":130},{"ingredientId":"rice","quantity":60},{"ingredientId":"carrot","quantity":80},{"ingredientId":"onion","quantity":40},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Отварите рис.","Нарежьте говядину тонкими кусочками и готовьте на масле до полной готовности.","Добавьте нарезанные морковь и лук, доведите до готовности и подайте с рисом."],"note":""},{"id":"m12","name":"Индейка с кабачком и картофелем","prepMinutes":25,"ingredients":[{"ingredientId":"turkey","quantity":150},{"ingredientId":"zucchini","quantity":200},{"ingredientId":"potato","quantity":180},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Нарежьте картофель, кабачок и индейку небольшими кусочками.","Готовьте на масле с небольшим количеством воды до полной готовности индейки и мягкости картофеля."],"note":""},{"id":"m13","name":"Гречка с яйцом и овощами","prepMinutes":20,"ingredients":[{"ingredientId":"buckwheat","quantity":65},{"ingredientId":"egg","quantity":100},{"ingredientId":"tomato","quantity":150},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Отварите гречку.","Нарежьте помидоры, прогрейте на масле, добавьте яйца и готовьте до полной готовности.","Подайте с гречкой."],"note":""},{"id":"m14","name":"Рис с фасолью и овощами","prepMinutes":25,"ingredients":[{"ingredientId":"rice","quantity":60},{"ingredientId":"beans","quantity":150},{"ingredientId":"carrot","quantity":80},{"ingredientId":"pepper","quantity":100},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Отварите рис.","Нарежьте овощи, потушите на масле с небольшим количеством воды.","Добавьте фасоль без жидкости, прогрейте и подайте с рисом."],"note":""},{"id":"m15","name":"Картофель с творогом и салатом","prepMinutes":25,"ingredients":[{"ingredientId":"potato","quantity":220},{"ingredientId":"cottage","quantity":150},{"ingredientId":"cucumber","quantity":100},{"ingredientId":"tomato","quantity":100},{"ingredientId":"oil","quantity":5}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Нарежьте и отварите картофель.","Нарежьте овощи и заправьте маслом.","Подайте картофель с творогом и салатом."],"note":""},{"id":"m16","name":"Капустный салат с курицей","prepMinutes":20,"ingredients":[{"ingredientId":"chicken","quantity":150},{"ingredientId":"cabbage","quantity":150},{"ingredientId":"carrot","quantity":70},{"ingredientId":"yogurt","quantity":60},{"ingredientId":"bread","quantity":60}],"mealTypes":["lunch","dinner"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Нарежьте курицу и приготовьте с небольшим количеством воды до полной готовности.","Нашинкуйте капусту, натрите морковь и смешайте с йогуртом.","Подайте с курицей и хлебом."],"note":""},{"id":"s01","name":"Яблоко и орехи","prepMinutes":2,"ingredients":[{"ingredientId":"apple","quantity":150},{"ingredientId":"nuts","quantity":15}],"mealTypes":["snack"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":true,"steps":["Нарежьте яблоко.","Подайте вместе с орехами."],"note":""},{"id":"s02","name":"Йогурт с ягодами","prepMinutes":2,"ingredients":[{"ingredientId":"yogurt","quantity":170},{"ingredientId":"berries","quantity":80}],"mealTypes":["snack"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":true,"steps":["Положите ягоды в йогурт.","Перемешайте."],"note":""},{"id":"s03","name":"Творог с яблоком","prepMinutes":3,"ingredients":[{"ingredientId":"cottage","quantity":100},{"ingredientId":"apple","quantity":100}],"mealTypes":["snack"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":true,"steps":["Нарежьте яблоко.","Смешайте с творогом."],"note":""},{"id":"s04","name":"Сыр и огурец","prepMinutes":2,"ingredients":[{"ingredientId":"cheese","quantity":30},{"ingredientId":"cucumber","quantity":150}],"mealTypes":["snack"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":true,"steps":["Нарежьте сыр.","Нарежьте огурец и подайте вместе."],"note":""},{"id":"s05","name":"Банан и йогурт","prepMinutes":2,"ingredients":[{"ingredientId":"banana","quantity":100},{"ingredientId":"yogurt","quantity":100}],"mealTypes":["snack"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":true,"steps":["Нарежьте банан.","Смешайте с йогуртом."],"note":""},{"id":"s06","name":"Варёное яйцо и помидор","prepMinutes":12,"ingredients":[{"ingredientId":"egg","quantity":50},{"ingredientId":"tomato","quantity":150}],"mealTypes":["snack"],"sourceType":"homemade","calorieMode":"ingredients","manualKcal":null,"suitableForAuto":true,"noCook":false,"steps":["Отварите яйцо до полной готовности.","Нарежьте помидор и подайте с яйцом."],"note":""}];
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
    if (Array.isArray(candidate.customRecipes) && candidate.customRecipes.length || Array.isArray(candidate.customIngredients) && candidate.customIngredients.length)
      errors.push("Эта версия ещё не поддерживает сохранённый каталог или покупки. Исходные данные оставлены без изменений.");
    if(candidate.lastGeneration!==null&&(!isRecord(candidate.lastGeneration)||!validDate(candidate.lastGeneration.weekStart)||!Number.isInteger(candidate.lastGeneration.seed)||candidate.lastGeneration.algorithmVersion!==1))errors.push("Некорректные данные подбора.");
    if (isRecord(candidate.days)) {
      if (Object.keys(candidate.days).length>10000) errors.push("Слишком много дней.");
      Object.entries(candidate.days).forEach(([date,day])=>{
        if (!validDate(date) || !isRecord(day) || day.date!==date || !(day.goalKcal===null || Number.isInteger(day.goalKcal)&&day.goalKcal>=1000&&day.goalKcal<=5000) || !Array.isArray(day.planEntries)||!Array.isArray(day.actualEntries)) errors.push("Некорректный день "+date+".");
        else { errors.push(...validatePlanDay(day)); if(day.actualEntries.length) errors.push("Журнал факта завершается на шаге 3."); }
      });
    }
    if (Array.isArray(candidate.weightLog)) {
      const dates=new Set(),ids=new Set();
      candidate.weightLog.forEach(entry=>{
        if (!isRecord(entry)||typeof entry.id!=="string"||!entry.id||!validDate(entry.date)||entry.date>todayDate()||typeof entry.weightKg!=="number"||parseNumber(entry.weightKg,30,300,0.1).error||typeof entry.note!=="string"||entry.note.length>300||dates.has(entry.date)||ids.has(entry.id)) errors.push("Некорректное измерение веса.");
        else {dates.add(entry.date);ids.add(entry.id);}
      });
    }
    errors.push(...validateShopping(candidate));
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
    reconcileMarks(next);
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
    if (renderFoodPanel()) return;
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
      const pending=node("section",undefined,"card wide");pending.append(node("h2","Продукты дома и резервные копии"),node("p","Отметьте продукты, которые есть дома. Полный импорт и экспорт появятся на шаге 3."));
      const btn=button("Импорт и экспорт","unavailable",true);btn.disabled=true;pending.append(button("Продукты дома","pantry",true),btn);
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
      week:["Сначала ориентир, потом меню","Профиль настроен. Планирование недели, блюда и покупки пока недоступны — они появятся в следующей версии.","Создать меню","wooden-spoon"],
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
    const monday=selectedWeek,sunday=addCalendarDays(monday,6);
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
  function downloadText(text,filename,mime="application/json") {
    const url=URL.createObjectURL(new Blob([text],{type:mime+";charset=utf-8"}));
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
      if(unsaved||foodDirty||$("profileDialog").open&&formFingerprint()!==baselineForm){event.preventDefault();event.returnValue="";}
    });
    const refreshDate=()=>{if(!document.hidden&&!$("profileDialog").open)render();};
    document.addEventListener("visibilitychange",refreshDate);window.addEventListener("focus",refreshDate);
  }
  // Step 2: immutable plan snapshots, local catalog, week planner and shopping.
  const MEALS={breakfast:"Завтрак",lunch:"Обед",dinner:"Ужин",snack:"Перекус",drink:"Напиток"};
  const MAIN=["breakfast","lunch","dinner"];
  const DRINKS={water:{name:"Вода",milk:0},tea:{name:"Чай",milk:0},coffee:{name:"Чёрный кофе",milk:0},milkCoffee:{name:"Кофе с молоком",milk:50},cappuccino:{name:"Капучино",milk:120},latte:{name:"Латте",milk:150}};
  let selectedWeek=mondayOf(todayDate()),selectedDay=todayDate(),shoppingScope="tomorrow";
  let foodDialog=null,foodDirty=false,foodCancelled=false,generationRunning=false;
  let catalogFilters={query:"",meal:"",minutes:"",noCook:false,mine:false,favorites:false,excluded:false};
  const foodById=id=>FOOD.find(x=>x.id===id),recipeById=id=>RECIPES.find(x=>x.id===id);
  const dayDates=week=>Array.from({length:7},(_,i)=>addCalendarDays(week,i));
  function prettyDate(date,short=false) {
    const [y,m,d]=date.split("-").map(Number);
    return new Date(y,m-1,d,12).toLocaleDateString("ru-RU",{weekday:short?"short":"long",day:"numeric",month:short?"short":"long"});
  }
  function recipeSnapshot(recipe) {
    const ingredients=recipe.ingredients.map(({ingredientId,quantity})=>{const item=foodById(ingredientId);return {ingredientId,name:item.name,group:item.group,unit:item.unit,quantity,kcalRate:item.kcalPer100/100};});
    return {name:recipe.name,sourceType:recipe.sourceType,baseKcal:ingredients.reduce((n,i)=>n+i.quantity*i.kcalRate,0),ingredients,steps:[...recipe.steps],incompleteIngredients:false,opaquePackaged:false};
  }
  function drinkSnapshot(config) {
    const ingredients=[],add=(id,quantity)=>{if(quantity){const i=foodById(id);ingredients.push({ingredientId:id,name:i.name,unit:i.unit,group:i.group,quantity,kcalRate:i.kcalPer100/100});}};
    if(config.templateId==="tea")add("tea",2*config.volumeMl/200);else if(config.templateId!=="water")add("coffee",10*config.volumeMl/200);
    if(config.templateId!=="water"){add("milk",config.milkMl);add("sugar",config.sugarG);}
    return {name:DRINKS[config.templateId].name,sourceType:"homemade",baseKcal:config.milkMl*.52+config.sugarG*4,ingredients,steps:[],incompleteIngredients:false,opaquePackaged:false};
  }
  const rawKcal=entry=>entry.snapshot.baseKcal*entry.portions;
  const dayTotal=day=>(day?.planEntries||[]).reduce((n,e)=>n+rawKcal(e),0);
  const goalFor=(s,date)=>s.days[date]?.goalKcal??(s.days[date]?null:date<todayDate()?null:s.profile.dailyKcalGoal);
  function ensureDay(s,date) {
    if(!s.days[date])s.days[date]={date,goalKcal:date<todayDate()?null:s.profile.dailyKcalGoal,planEntries:[],actualEntries:[]};return s.days[date];
  }
  function makeEntry(recipe,date,mealType,portions=1,origin="manual") {
    return {id:uid("pe_"),date,mealType,recipeId:recipe.id,snapshot:recipeSnapshot(recipe),portions,drinkConfig:null,locked:false,origin,createdAt:new Date().toISOString()};
  }
  const linked=(day,entry)=>day.actualEntries.some(a=>a.sourcePlanEntryId===entry.id);
  const conflicts=(entry,settings)=>entry.snapshot.ingredients.filter(i=>settings.excludedIngredientIds.includes(i.ingredientId)).map(i=>i.name);
  function eligible(recipe,settings,automatic=true) {
    return (!automatic||recipe.suitableForAuto)&&recipe.prepMinutes<=settings.maxPrepMinutes&&(settings.allowReadyMeals||recipe.sourceType!=="ready")&&!recipe.ingredients.some(i=>settings.excludedIngredientIds.includes(i.ingredientId));
  }
  function validatePlanDay(day) {
    const errors=[],ids=new Set(),counts={};
    if(day.planEntries.length>203)errors.push("Слишком много записей в дне.");
    for(const e of day.planEntries) {
      if(!isRecord(e)||typeof e.id!=="string"||!e.id||ids.has(e.id)||e.date!==day.date||!Object.keys(MEALS).includes(e.mealType)||typeof e.locked!=="boolean"||!["manual","generated","copied"].includes(e.origin)||!Number.isFinite(Date.parse(e.createdAt))) {errors.push("Некорректная запись плана "+day.date);continue;}
      ids.add(e.id);counts[e.mealType]=(counts[e.mealType]||0)+1;
      if((MAIN.includes(e.mealType)&&counts[e.mealType]>1)||(!MAIN.includes(e.mealType)&&(e.locked||counts[e.mealType]>100)))errors.push("Неверное количество слотов "+day.date);
      const snap=e.snapshot;
      if(!isRecord(snap)||typeof snap.name!=="string"||!snap.name||snap.name.length>80||!Number.isFinite(snap.baseKcal)||snap.baseKcal<0||!Array.isArray(snap.ingredients)||!Array.isArray(snap.steps)||snap.steps.some(x=>typeof x!=="string")||typeof snap.incompleteIngredients!=="boolean") {errors.push("Некорректный снимок рецепта.");continue;}
      const bad=snap.ingredients.some(i=>!isRecord(i)||!foodById(i.ingredientId)||foodById(i.ingredientId).unit!==i.unit||typeof i.name!=="string"||typeof i.group!=="string"||!Number.isFinite(i.quantity)||i.quantity<=0||!Number.isFinite(i.kcalRate)||i.kcalRate<0);
      if(bad){errors.push("Некорректные ингредиенты снимка.");continue;}
      if(Math.abs(snap.baseKcal-snap.ingredients.reduce((n,i)=>n+i.quantity*i.kcalRate,0))>1e-7)errors.push("Калории снимка не совпадают с составом.");
      if(e.mealType==="drink") {
        const c=e.drinkConfig;
        if(e.recipeId!==null||e.portions!==1||!isRecord(c)||!DRINKS[c.templateId]||parseNumber(c.volumeMl,50,1000,10).error||parseNumber(c.milkMl,0,500).error||parseNumber(c.sugarG,0,50).error||c.milkMl>c.volumeMl||(c.templateId==="water"&&(c.milkMl!==0||c.sugarG!==0)))errors.push("Некорректный напиток.");
        else if(JSON.stringify(drinkSnapshot(c))!==JSON.stringify(snap))errors.push("Напиток не соответствует составу.");
      } else if(!recipeById(e.recipeId)||!recipeById(e.recipeId).mealTypes.includes(e.mealType)||e.drinkConfig!==null||parseNumber(e.portions,.25,4,.25).error)errors.push("Некорректное блюдо или порция.");
    }return errors;
  }
  function validateShopping(s) {
    const errors=[];
    if(isRecord(s.pantry)&&Object.keys(s.pantry).some(id=>!foodById(id)))errors.push("Неизвестный продукт в запасах.");
    if(isRecord(s.shoppingMarks))Object.entries(s.shoppingMarks).forEach(([key,m])=>{
      const [scope,start,end,id,...rest]=key.split(":");
      if(rest.length||!["week","tomorrow"].includes(scope)||!validDate(start)||!validDate(end)||start>end||!foodById(id)||!isRecord(m)||m.ingredientId!==id||m.unit!==foodById(id)?.unit||typeof m.checked!=="boolean"||!Number.isFinite(m.requiredQuantity)||m.requiredQuantity<=0)errors.push("Некорректная отметка покупки.");
    });
    const allIds=new Set();Object.values(s.days||{}).forEach(d=>(Array.isArray(d?.planEntries)?d.planEntries:[]).forEach(e=>{if(allIds.has(e.id))errors.push("Повторный ID плана.");allIds.add(e.id);}));
    if(Array.isArray(s.settings.favoriteRecipeIds)&&(s.settings.favoriteRecipeIds.some(id=>!recipeById(id))||new Set(s.settings.favoriteRecipeIds).size!==s.settings.favoriteRecipeIds.length))errors.push("Некорректное избранное.");
    return errors;
  }
  function aggregateShopping(s,start,end) {
    const items={};Object.values(s.days).filter(d=>d.date>=start&&d.date<=end).forEach(d=>d.planEntries.forEach(e=>e.snapshot.ingredients.forEach(i=>{
      if(!items[i.ingredientId])items[i.ingredientId]={...i,quantity:0};items[i.ingredientId].quantity+=i.quantity*e.portions;
    })));return Object.values(items).sort((a,b)=>a.group.localeCompare(b.group,"ru")||a.name.localeCompare(b.name,"ru"));
  }
  function reconcileMarks(s) {
    let changed=false;Object.entries(s.shoppingMarks).forEach(([key,mark])=>{
      const [,start,end,id]=key.split(":");const item=aggregateShopping(s,start,end).find(i=>i.ingredientId===id);
      if(!item){delete s.shoppingMarks[key];changed=true;}
      else if(item.quantity>mark.requiredQuantity+1e-9&&mark.checked){mark.checked=false;mark.requiredQuantity=item.quantity;changed=true;}
    });if(changed)queueMicrotask(()=>announce("Количество изменилось — проверь покупку."));
  }
  function shoppingPeriod(scope=shoppingScope,week=selectedWeek) {
    const today=todayDate(),tomorrow=addCalendarDays(today,1);
    if(scope==="tomorrow")return {scope,start:tomorrow,end:tomorrow,label:"На завтра · "+prettyDate(tomorrow),archive:false};
    const end=addCalendarDays(week,6),archive=end<today,start=archive||week>today?week:today;
    return {scope,start,end,label:(archive?"Архивный список":week<=today?"Остаток недели":"На неделю")+" · "+prettyDate(start,true)+" — "+prettyDate(end,true),archive};
  }
  const markKey=(p,id)=>[p.scope,p.start,p.end,id].join(":");
  const quantityLabel=i=>i.ingredientId==="egg"?Math.ceil(i.quantity/50)+" шт.":format(i.unit==="pcs"?Math.ceil(i.quantity):Math.ceil(i.quantity/5)*5)+" "+(i.unit==="ml"?"мл":i.unit==="pcs"?"шт.":"г");
  function isBought(s,p,i) {const m=s.shoppingMarks[markKey(p,i.ingredientId)];return !!m?.checked&&i.quantity<=m.requiredQuantity+1e-9;}
  function shoppingText(s,p) {
    const items=aggregateShopping(s,p.start,p.end),lines=[p.label,"Количества для покупки округлены вверх.",""];
    for(const home of [false,true]) {
      lines.push(home?"Есть дома — проверь количество":"Нужно купить");
      const list=items.filter(i=>!!s.pantry[i.ingredientId]===home).sort((a,b)=>Number(isBought(s,p,a))-Number(isBought(s,p,b))||a.group.localeCompare(b.group,"ru")||a.name.localeCompare(b.name,"ru"));
      let group="";for(const i of list){if(i.group!==group){group=i.group;lines.push(group);}lines.push((home?"[дома]":isBought(s,p,i)?"[x]":"[ ]")+" "+i.name+" — "+quantityLabel(i));}
      if(!list.length)lines.push(home?"Нет отмеченных продуктов.":"Нет продуктов для покупки.");lines.push("");
    }return lines.join("\n");
  }
  function actionButton(text,handler,secondary=true) {
    const b=node("button",text,"button small "+(secondary?"secondary":"primary"));b.type="button";b.addEventListener("click",handler);return b;
  }
  function checkField(text,value,handler) {
    const label=node("label",undefined,"check-line"),input=node("input");input.type="checkbox";input.checked=value;input.addEventListener("change",()=>handler(input.checked));label.append(input,node("span",text));return label;
  }
  function inputField(parent,label,type,value="") {
    const wrap=node("div",undefined,"field"),id=uid("field_"),l=node("label",label),input=node("input");l.htmlFor=id;input.id=id;input.type=type==="decimal"?"text":type;input.value=value;if(type==="decimal")input.inputMode="decimal";wrap.append(l,input);parent.append(wrap);return input;
  }
  function selectField(parent,label,choices,value) {
    const wrap=node("div",undefined,"field"),id=uid("field_"),l=node("label",label),select=node("select");l.htmlFor=id;select.id=id;
    Object.entries(choices).forEach(([v,name])=>{const o=node("option",name);o.value=v;select.append(o);});select.value=value;wrap.append(l,select);parent.append(wrap);return select;
  }
  function closeFood(force=false) {
    if(!foodDialog)return;
    if(foodDirty&&!force) {
      if(foodDialog.querySelector(".discard-prompt"))return;
      const prompt=node("div",undefined,"notice discard-prompt");prompt.append(node("p","Закрыть без сохранения изменений?"),actionButton("Продолжить редактирование",()=>{prompt.remove();}),actionButton("Не сохранять",()=>closeFood(true)));foodDialog.append(prompt);prompt.querySelector("button").focus();return;
    }foodCancelled=true;const old=foodDialog;closeModal(old);old.remove();foodDialog=null;foodDirty=false;
  }
  function modal(title,editable=false) {
    if(foodDialog)closeFood(true);foodCancelled=false;foodDirty=false;
    const dialog=node("dialog"),heading=node("div",undefined,"dialog-heading"),h=node("h2",title);h.id=uid("title_");dialog.setAttribute("aria-labelledby",h.id);
    const x=actionButton("×",()=>closeFood());x.className="icon-button";x.setAttribute("aria-label","Закрыть");heading.append(h,x);dialog.append(heading);document.body.append(dialog);foodDialog=dialog;
    dialog.addEventListener("cancel",e=>{e.preventDefault();closeFood();});if(editable)dialog.addEventListener("input",()=>foodDirty=true);
    openModal(dialog,x);queueMicrotask(()=>dialog.querySelector("input:not(:disabled),select:not(:disabled),textarea")?.focus());return dialog;
  }
  function errorIn(parent,message) {
    let p=parent.querySelector(".food-error");if(!p){p=node("p",undefined,"notice notice-error food-error");p.setAttribute("role","alert");parent.append(p);}p.textContent=message;
  }
  function confirmAction(title,text,handler) {
    const dialog=modal(title);dialog.append(node("p",text),actionButton("Подтвердить",()=>{closeFood(true);handler();},false),actionButton("Отмена",()=>closeFood(true)));
  }
  function showRecipe(snapshot,portions=1) {
    const dialog=modal(snapshot.name),list=node("ul");dialog.append(node("p",format(snapshot.baseKcal*portions)+" ккал · "+format(portions,2)+" порц."));
    snapshot.ingredients.forEach(i=>list.append(node("li",i.name+" — "+format(i.quantity*portions,2)+" "+(i.unit==="ml"?"мл":"г"))));dialog.append(list);
    const steps=node("ol");snapshot.steps.forEach(step=>steps.append(node("li",step)));dialog.append(steps);
  }
  function toggleFavorite(id) {
    const next=clone(state),favorites=next.settings.favoriteRecipeIds;if(favorites.includes(id))next.settings.favoriteRecipeIds=favorites.filter(x=>x!==id);else favorites.push(id);commit(next);
  }
  function catalogUI(parent,context=null,alternatives=null) {
    const filters=node("div",undefined,"catalog-filters"),f=context?{query:"",meal:context.mealType,minutes:"",noCook:false,mine:false,favorites:false,excluded:false}:{...catalogFilters};
    const search=inputField(filters,"Найти блюдо","search",f.query),meal=selectField(filters,"Приём пищи",{"":"Все",breakfast:"Завтрак",lunch:"Обед",dinner:"Ужин",snack:"Перекус"},f.meal);
    if(context)meal.disabled=true;
    const minutes=selectField(filters,"Время готовки",{"":"Любое","15":"До 15 минут","20":"До 20 минут","30":"До 30 минут"},f.minutes),flags=node("div",undefined,"catalog-flags");
    for(const [key,text] of [["noCook","Без приготовления"],["mine","Мои"],["favorites","Избранные"],["excluded","Показать исключённые"]])flags.append(checkField(text,f[key],v=>{f[key]=v;refresh();}));
    parent.append(filters,flags);const list=node("div",undefined,"recipe-grid");parent.append(list);
    function refresh() {
      f.query=search.value;f.meal=meal.value;f.minutes=minutes.value;if(!context)catalogFilters={...f};list.replaceChildren();
      const recipes=(alternatives||RECIPES).filter(r=>(!f.query||r.name.toLocaleLowerCase("ru").includes(f.query.toLocaleLowerCase("ru")))&&(!f.meal||r.mealTypes.includes(f.meal))&&(!f.minutes||r.prepMinutes<=+f.minutes)&&(!f.noCook||r.noCook)&&!f.mine&&(!f.favorites||state.settings.favoriteRecipeIds.includes(r.id))&&(f.excluded||!r.ingredients.some(i=>state.settings.excludedIngredientIds.includes(i.ingredientId))));
      if(!recipes.length)list.append(node("p",f.mine?"Свои блюда появятся на шаге 3.":"Подходящих блюд нет. Попробуйте изменить фильтры.","notice"));
      recipes.forEach(r=>{
        const snap=recipeSnapshot(r),blocked=conflicts({snapshot:snap},state.settings),card=node("article",undefined,"card recipe-card");
        card.append(node("h3",r.name),node("p",r.prepMinutes+" мин · "+format(snap.baseKcal)+" ккал · 1 порция"));
        if(blocked.length)card.append(node("p","Исключено: "+blocked.join(", "),"warning"));
        const row=node("div",undefined,"button-row");
        row.append(actionButton("Рецепт",()=>showRecipe(snap)),actionButton(state.settings.favoriteRecipeIds.includes(r.id)?"★ В избранном":"☆ Избранное",()=>{toggleFavorite(r.id);refresh();}));
        const add=actionButton(context?"Выбрать":"В план",()=>choosePortion(r,context),false);add.disabled=blocked.length>0;row.append(add);card.append(row);list.append(card);
      });
    }
    search.addEventListener("input",refresh);meal.addEventListener("change",refresh);minutes.addEventListener("change",refresh);refresh();
  }
  function openCatalog(date,mealType,existing=null) {
    const dialog=modal(existing?"Заменить блюдо":"Выбрать блюдо");let alternatives=null;
    if(existing) {
      alternatives=RECIPES.filter(r=>r.id!==existing.recipeId&&r.mealTypes.includes(mealType)&&eligible(r,state.settings)).sort((a,b)=>Math.abs(recipeSnapshot(a).baseKcal*existing.portions-rawKcal(existing))-Math.abs(recipeSnapshot(b).baseKcal*existing.portions-rawKcal(existing))).slice(0,5);
      dialog.append(node("p","До пяти подходящих альтернатив по калорийности. Выбор сохраняется после подтверждения порции."));
    }
    catalogUI(dialog,{date,mealType,existing},alternatives);
  }
  function savePlannedEntry(entry,existingId=null) {
    const next=clone(state),day=ensureDay(next,entry.date);
    if(existingId)day.planEntries=day.planEntries.filter(e=>e.id!==existingId);
    if(MAIN.includes(entry.mealType))day.planEntries=day.planEntries.filter(e=>e.mealType!==entry.mealType);
    if(!MAIN.includes(entry.mealType)&&day.planEntries.filter(e=>e.mealType===entry.mealType).length>=100){announce("В день можно добавить до 100 записей этого вида.");return false;}
    day.planEntries.push(entry);return commit(next);
  }
  function choosePortion(recipe,context=null) {
    const dialog=modal("Порция · "+recipe.name,true),form=node("form"),date=inputField(form,"Дата","date",context?.date||selectedDay);
    const meal=selectField(form,"Приём пищи",Object.fromEntries(recipe.mealTypes.map(k=>[k,MEALS[k]])),context?.mealType||recipe.mealTypes[0]),quantity=inputField(form,"Порций · от 0,25 до 4, шаг 0,25","decimal",context?.existing?.portions||1);
    if(context?.existing){date.disabled=true;meal.disabled=true;}
    const preview=node("p",undefined,"notice");form.append(preview);
    const update=()=>{const parsed=parseNumber(quantity.value,.25,4,.25);preview.textContent=parsed.error||format(recipeSnapshot(recipe).baseKcal*parsed.value)+" ккал";};quantity.addEventListener("input",update);update();
    if(context?.existing?.locked)form.append(node("p","Ручная замена снимет отметку «Сохранить при подборе».","warning"));
    if(context?.date<todayDate())form.append(node("p","Изменение плана не меняет съеденное.","subtle"));
    const save=node("button","Сохранить","button primary");save.type="submit";form.append(save);dialog.append(form);
    form.addEventListener("submit",e=>{
      e.preventDefault();const q=parseNumber(quantity.value,.25,4,.25);
      if(!validDate(date.value)||q.error){errorIn(form,q.error||"Выберите корректную дату.");return;}
      if(conflicts({snapshot:recipeSnapshot(recipe)},state.settings).length){errorIn(form,"Блюдо содержит исключённые продукты.");return;}
      const existing=state.days[date.value]?.planEntries.find(e=>e.mealType===meal.value),entry=makeEntry(recipe,date.value,meal.value,q.value);
      const finish=()=>{if(savePlannedEntry(entry,context?.existing?.id)){closeFood(true);announce("Блюдо добавлено в план.");}};
      if(existing&&existing.id!==context?.existing?.id)confirmAction("Заменить "+MEALS[meal.value]+"?",prettyDate(date.value)+" · "+existing.snapshot.name+" будет заменено.",finish);
      else if(context?.existing?.locked)confirmAction("Заменить закреплённое блюдо?",recipe.name+" · "+prettyDate(date.value)+". Закрепление будет снято.",finish);
      else finish();
    });
  }
  function editPortion(entry) {
    if(entry.mealType==="drink"){editDrink(entry.date,entry);return;}
    const dialog=modal("Изменить порцию",true),form=node("form");form.append(node("p",entry.snapshot.name+" · "+prettyDate(entry.date)));
    const q=inputField(form,"Порций · 0,25–4, шаг 0,25","decimal",entry.portions),preview=node("p",undefined,"notice");form.append(preview);
    const update=()=>{const r=parseNumber(q.value,.25,4,.25);preview.textContent=r.error||format(entry.snapshot.baseKcal*r.value)+" ккал";};q.addEventListener("input",update);update();
    const save=node("button","Сохранить","button primary");save.type="submit";form.append(save);dialog.append(form);
    form.addEventListener("submit",e=>{e.preventDefault();const r=parseNumber(q.value,.25,4,.25);if(r.error){errorIn(form,r.error);return;}
      const next=clone(state),target=next.days[entry.date].planEntries.find(e=>e.id===entry.id);target.portions=r.value;target.origin="manual";if(commit(next))closeFood(true);
    });
  }
  function editDrink(date,entry=null) {
    const dialog=modal(entry?"Изменить напиток":"Добавить напиток",true),form=node("form"),initial=entry?.drinkConfig||{templateId:"coffee",volumeMl:200,milkMl:0,sugarG:0};form.append(node("p",prettyDate(date)));
    const template=selectField(form,"Напиток",Object.fromEntries(Object.entries(DRINKS).map(([id,c])=>[id,c.name])),initial.templateId),volume=inputField(form,"Общий объём, мл · 50–1000, шаг 10","decimal",initial.volumeMl);
    const milk=inputField(form,"Молоко, мл · 0–500","decimal",initial.milkMl),sugar=inputField(form,"Сахар, г · 0–50","decimal",initial.sugarG),info=node("p",undefined,"notice");form.append(info);
    let previousVolume=initial.volumeMl;
    const scale=actionButton("Пересчитать добавки пропорционально",()=>{
      const v=parseNumber(volume.value,50,1000,10),m=parseNumber(milk.value,0,500),s=parseNumber(sugar.value,0,50);
      if(v.error||m.error||s.error){errorIn(form,"Сначала введите корректные значения.");return;}
      milk.value=Math.round(m.value*v.value/previousVolume);sugar.value=Math.round(s.value*v.value/previousVolume);previousVolume=v.value;foodDirty=true;update();
    });form.append(node("p","Изменение объёма само не меняет добавки.","subtle"),scale);
    function read(){const v=parseNumber(volume.value,50,1000,10),m=parseNumber(milk.value,0,500),s=parseNumber(sugar.value,0,50);return {error:v.error||m.error||s.error||(m.value>v.value?"Молока не может быть больше общего объёма.":null),config:{templateId:template.value,volumeMl:v.value,milkMl:m.value,sugarG:s.value}};}
    function update(){const water=template.value==="water";milk.disabled=water;sugar.disabled=water;scale.disabled=water;if(water){milk.value=0;sugar.value=0;}const r=read();info.textContent=r.error||format(r.config.milkMl*.52+r.config.sugarG*4)+" ккал";}
    template.addEventListener("change",()=>{milk.value=DRINKS[template.value].milk;sugar.value=0;update();});[volume,milk,sugar].forEach(x=>x.addEventListener("input",update));update();
    const save=node("button","Сохранить","button primary");save.type="submit";form.append(save);dialog.append(form);
    form.addEventListener("submit",e=>{e.preventDefault();const r=read();if(r.error){errorIn(form,r.error);return;}
      const snap=drinkSnapshot(r.config);if(conflicts({snapshot:snap},state.settings).length){errorIn(form,"В добавках есть исключённые продукты.");return;}
      const nextEntry={id:entry?.id||uid("pe_"),date,mealType:"drink",recipeId:null,snapshot:snap,portions:1,drinkConfig:r.config,locked:false,origin:"manual",createdAt:entry?.createdAt||new Date().toISOString()};
      if(savePlannedEntry(nextEntry,entry?.id))closeFood(true);
    });
  }
  function entryCard(entry,day) {
    const card=node("div",undefined,"plan-entry");card.append(node("strong",entry.snapshot.name),node("p",format(rawKcal(entry))+" ккал · "+(entry.mealType==="drink"?entry.drinkConfig.volumeMl+" мл":format(entry.portions,2)+" порц."),"subtle"));
    const excluded=conflicts(entry,state.settings);if(excluded.length)card.append(node("p","Конфликт ограничений: "+excluded.join(", ")+". Можно заменить блюдо.","warning"));
    const actions=node("div",undefined,"entry-actions");actions.append(actionButton("Рецепт",()=>showRecipe(entry.snapshot,entry.portions)),actionButton("Порция",()=>editPortion(entry)));
    if(entry.mealType!=="drink")actions.append(actionButton("Заменить",()=>openCatalog(entry.date,entry.mealType,entry)));
    actions.append(actionButton("Копировать",()=>copyEntryDialog(entry)),actionButton("Удалить",()=>confirmAction("Удалить запись?",entry.snapshot.name+" · "+prettyDate(entry.date),()=>{const next=clone(state);next.days[entry.date].planEntries=next.days[entry.date].planEntries.filter(e=>e.id!==entry.id);commit(next);})));
    const eaten=actionButton("Съедено · шаг 3",()=>{});eaten.disabled=true;actions.append(eaten);
    if(MAIN.includes(entry.mealType))card.append(checkField("Сохранить при подборе",entry.locked,value=>{const next=clone(state);next.days[entry.date].planEntries.find(e=>e.id===entry.id).locked=value;commit(next);}));
    card.append(actions);return card;
  }
  function renderWeek(parent) {
    const dates=dayDates(selectedWeek),tools=node("div",undefined,"button-row planner-tools");
    tools.append(actionButton("Составить автоматически",()=>generatePreview("replace"),false),actionButton("Составить самостоятельно",()=>{const next=clone(state);dates.forEach(d=>ensureDay(next,d));commit(next);announce("Неделя готова для ручного заполнения.");}),actionButton("Заполнить пустые места",()=>generatePreview("empty")),actionButton("Скопировать предыдущую",()=>copyWeekDialog()),actionButton("Перемешать основные блюда",shufflePreview));
    parent.append(node("p","Подбор из каталога · "+dates.reduce((n,d)=>n+(state.days[d]?.planEntries.filter(e=>MAIN.includes(e.mealType)).length||0),0)+" из 21 основных приёмов заполнено.","subtle"),tools);
    const switcher=node("div",undefined,"day-switcher");switcher.setAttribute("aria-label","Дни недели");
    dates.forEach(date=>{const b=actionButton(prettyDate(date,true),()=>{selectedDay=date;render();});b.setAttribute("aria-pressed",String(selectedDay===date));switcher.append(b);});parent.append(switcher);requestAnimationFrame(()=>{const active=switcher.querySelector("[aria-pressed=true]");if(active)switcher.scrollLeft=Math.max(0,active.offsetLeft-switcher.offsetLeft-switcher.clientWidth/2+active.clientWidth/2);});
    const grid=node("div",undefined,"week-grid");
    dates.forEach(date=>{
      const day=state.days[date]||{date,goalKcal:goalFor(state,date),planEntries:[],actualEntries:[]},card=node("article",undefined,"card day-card");
      card.dataset.date=date;if(date===selectedDay)card.classList.add("selected-day");card.append(node("h2",prettyDate(date,true)));
      const total=dayTotal(day);card.append(node("p","План: "+format(total)+" ккал","day-total"),node("p","Цель: "+(day.goalKcal===null?"без цели":format(day.goalKcal)+" ккал"),"subtle"));
      if(day.goalKcal!==null){const progress=node("progress");progress.max=day.goalKcal;progress.value=Math.min(total,day.goalKcal);progress.setAttribute("aria-label","План относительно цели");card.append(progress);if(total>day.goalKcal)card.append(node("p","Выше ориентира на "+format(total-day.goalKcal)+" ккал","subtle"));}
      if(date<todayDate())card.append(node("p","Изменение плана не меняет съеденное.","subtle"));
      for(const mealType of MAIN) {
        const section=node("section",undefined,"meal-slot");section.append(node("h3",MEALS[mealType]));
        const entry=day.planEntries.find(e=>e.mealType===mealType);section.append(entry?entryCard(entry,day):actionButton("Добавить",()=>openCatalog(date,mealType)));card.append(section);
      }
      for(const mealType of ["snack","drink"]) {
        const section=node("section",undefined,"meal-slot");section.append(node("h3",mealType==="drink"?"Напитки":"Перекусы"));
        day.planEntries.filter(e=>e.mealType===mealType).forEach(e=>section.append(entryCard(e,day)));
        section.append(actionButton(mealType==="drink"?"Добавить напиток":"Добавить перекус",()=>mealType==="drink"?editDrink(date):openCatalog(date,mealType)));card.append(section);
      }
      card.append(node("p","Фактическое питание: журнал появится на шаге 3.","subtle"));grid.append(card);
    });parent.append(grid);
  }
  function renderShopping(parent) {
    const p=shoppingPeriod(),tabs=node("div",undefined,"button-row");
    for(const [scope,label] of [["tomorrow","На завтра"],["week","На неделю"]]){const b=actionButton(label,()=>{shoppingScope=scope;render();},scope!==shoppingScope);b.setAttribute("aria-pressed",String(scope===shoppingScope));tabs.append(b);}
    tabs.append(actionButton("Продукты дома",pantryDialog));parent.append(tabs,node("h2",p.label),node("p","Количества для покупки округлены вверх.","subtle"));
    const items=aggregateShopping(state,p.start,p.end);
    if(!items.length)parent.append(node("p","В этом периоде пока нет продуктов: добавьте блюда или напитки в план.","notice"));
    else if(items.every(i=>state.pantry[i.ingredientId]))parent.append(node("p","Всё отмечено дома. Проверьте, достаточно ли продуктов.","notice"));
    for(const home of [false,true]) {
      const container=home?node("details",undefined,"card shopping-home"):node("section",undefined,"card shopping-list");
      container.append(node(home?"summary":"h3",home?"Есть дома — проверь количество":"Нужно купить"));
      const list=items.filter(i=>!!state.pantry[i.ingredientId]===home).sort((a,b)=>Number(isBought(state,p,a))-Number(isBought(state,p,b))||a.group.localeCompare(b.group,"ru")||a.name.localeCompare(b.name,"ru"));
      let group="";
      for(const i of list) {
        if(i.group!==group){group=i.group;container.append(node("h4",group));}
        const row=node("div",undefined,"shopping-row"),label=node("label",undefined,"check-line"),checked=isBought(state,p,i),checkbox=node("input");checkbox.type="checkbox";checkbox.checked=checked;checkbox.disabled=home||p.archive;
        const text=node("span",i.name+" — "+quantityLabel(i));if(checked&&!home)text.className="bought";
        checkbox.addEventListener("change",()=>{const next=clone(state);next.shoppingMarks[markKey(p,i.ingredientId)]={ingredientId:i.ingredientId,unit:i.unit,checked:checkbox.checked,requiredQuantity:i.quantity};commit(next);});
        label.append(checkbox,text);row.append(label,actionButton(home?"Нет дома":"Есть дома",()=>{const next=clone(state);next.pantry[i.ingredientId]=!home;commit(next);}));container.append(row);
      }
      if(!list.length)container.append(node("p","Пока пусто.","subtle"));parent.append(container);
    }
    const row=node("div",undefined,"button-row");
    row.append(actionButton("Скопировать список",async()=>{const text=shoppingText(state,p);try{await navigator.clipboard.writeText(text);announce("Список скопирован.");}catch{const dialog=modal("Скопировать вручную");dialog.append(node("p","Выделите текст и скопируйте его в заметки."));const area=node("textarea");area.value=text;area.readOnly=true;area.rows=14;area.setAttribute("aria-label","Текст списка покупок");dialog.append(area);area.focus();area.select();}}),actionButton("Скачать список",()=>downloadText(shoppingText(state,p),"shopping-"+p.start+"-"+p.end+".txt","text/plain")));
    parent.append(row,node("p","Скачанный текст — копия текущего списка для чтения без интернета. Изменения меню не обновляют файл.","subtle"));
  }
  function pantryDialog() {
    const dialog=modal("Продукты дома");dialog.append(node("p","Отметка означает «есть дома; количество не проверено». Продукты не списываются автоматически."));
    const search=inputField(dialog,"Найти продукт","search"),list=node("div");dialog.append(list);
    const refresh=()=>{list.replaceChildren();FOOD.filter(i=>i.name.toLocaleLowerCase("ru").includes(search.value.toLocaleLowerCase("ru"))).forEach(i=>list.append(checkField(i.name,!!state.pantry[i.id],v=>{const next=clone(state);next.pantry[i.id]=v;commit(next);})));}
    search.addEventListener("input",refresh);refresh();
  }
  function renderFoodPanel() {
    if(!["week","recipes","shopping"].includes(activeTab))return false;
    const parent=$("panelContent");parent.replaceChildren();
    $("sectionEyebrow").textContent={week:"Своя еда. Свой ритм.",recipes:"Простая еда на каждый день",shopping:"Меньше забытых продуктов"}[activeTab];
    $("sectionTitle").textContent={week:"Ваше меню на неделю",recipes:"Ваши блюда",shopping:"Покупки"}[activeTab];$("weekBar").hidden=activeTab==="recipes";
    if(activeTab==="week")renderWeek(parent);else if(activeTab==="recipes"){parent.append(node("p","30 простых блюд. Свои рецепты можно будет добавить на шаге 3.","subtle"));catalogUI(parent);}else renderShopping(parent);return true;
  }
  const clonePlanEntry=(entry,date)=>({...clone(entry),id:uid("pe_"),date,locked:false,origin:"copied",createdAt:new Date().toISOString()});
  function copyEntryDialog(entry) {
    const dialog=modal("Копировать запись",true),dates=[];dialog.append(node("p",entry.snapshot.name+". Выберите одну или несколько дат."));
    const target=inputField(dialog,"Дата назначения","date",addCalendarDays(entry.date,1)),list=node("ul");
    dialog.append(actionButton("Добавить дату",()=>{if(!validDate(target.value)){errorIn(dialog,"Выберите корректную дату.");return;}if(!dates.includes(target.value)){dates.push(target.value);list.append(node("li",prettyDate(target.value)));foodDirty=true;}}),list);
    dialog.append(actionButton("Предпросмотр",()=>{
      if(!dates.length){errorIn(dialog,"Добавьте хотя бы одну дату.");return;}
      const next=clone(state),messages=[];
      for(const date of dates) {
        if(conflicts(entry,next.settings).length){messages.push(date+": исключены "+conflicts(entry,next.settings).join(", "));continue;}
        if(entry.recipeId&&!eligible(recipeById(entry.recipeId),next.settings,false)){messages.push(date+": время или готовая еда не соответствует настройкам");continue;}
        const day=ensureDay(next,date),existing=day.planEntries.find(e=>e.mealType===entry.mealType);
        if(MAIN.includes(entry.mealType)&&existing&&(existing.locked||linked(day,existing))){messages.push(date+": защищённая запись сохранена");continue;}
        if(!MAIN.includes(entry.mealType)&&day.planEntries.filter(e=>e.mealType===entry.mealType).length>=100){messages.push(date+": достигнут предел записей");continue;}
        if(MAIN.includes(entry.mealType))day.planEntries=day.planEntries.filter(e=>e.mealType!==entry.mealType);
        day.planEntries.push(clonePlanEntry(entry,date));messages.push(date+": "+(existing&&MAIN.includes(entry.mealType)?"заменить":"добавить")+" "+entry.snapshot.name);
      }showPlanPreview(next,"Копирование записи",messages);
    },false));
  }
  function copyWeekPlan(s,sourceWeek,targetWeek) {
    const next=clone(s),warnings=[];let added=0,replaced=0,preserved=0;
    dayDates(sourceWeek).forEach((source,index)=>{
      const date=addCalendarDays(targetWeek,index),sourceDay=s.days[source]||{planEntries:[]};
      if(date<todayDate()){preserved+=s.days[date]?.planEntries.length||0;warnings.push(date+": прошлая дата сохранена");return;}
      const target=ensureDay(next,date),protectedEntries=target.planEntries.filter(e=>e.locked||linked(target,e));
      preserved+=protectedEntries.length;replaced+=target.planEntries.length-protectedEntries.length;target.planEntries=protectedEntries;
      sourceDay.planEntries.forEach(entry=>{
        if(conflicts(entry,s.settings).length||(entry.recipeId&&!eligible(recipeById(entry.recipeId),s.settings,false))){warnings.push(date+": пропущено "+entry.snapshot.name+" — ограничения профиля");return;}
        if(MAIN.includes(entry.mealType)&&target.planEntries.some(e=>e.mealType===entry.mealType))return;
        if(!MAIN.includes(entry.mealType)&&target.planEntries.filter(e=>e.mealType===entry.mealType).length>=100)return;
        target.planEntries.push(clonePlanEntry(entry,date));added++;
      });
    });return {next,warnings,added,replaced,preserved};
  }
  function copyWeekDialog() {
    const dialog=modal("Скопировать меню недели",true),source=inputField(dialog,"Любая дата недели-источника","date",addCalendarDays(selectedWeek,-7));
    dialog.append(node("p","Перенесём только план по дням недели. Прошлые даты и защищённые записи сохранятся."),actionButton("Предпросмотр",()=>{
      if(!validDate(source.value)){errorIn(dialog,"Выберите дату.");return;}
      const week=mondayOf(source.value);if(week===selectedWeek){errorIn(dialog,"Выберите другую неделю.");return;}
      if(!dayDates(week).some(d=>state.days[d]?.planEntries.length)){errorIn(dialog,"В выбранной неделе нет меню для копирования.");return;}
      const result=copyWeekPlan(state,week,selectedWeek);showPlanPreview(result.next,"Копирование недели",["Будет добавлено "+result.added+", заменено "+result.replaced+", сохранено "+result.preserved+".",...result.warnings]);
    },false));
  }
  function seeded(seed) {let value=seed>>>0;return ()=>{value=(Math.imul(value,1664525)+1013904223)>>>0;return value/4294967296;};}
  function shufflePreview() {
    const next=clone(state),rng=seeded(Date.now()),dates=dayDates(selectedWeek).filter(d=>d>=todayDate());
    for(const meal of MAIN) {
      const entries=dates.flatMap(d=>next.days[d]?.planEntries.filter(e=>e.mealType===meal&&!e.locked&&!linked(next.days[d],e))||[]),targets=entries.map(e=>e.date);
      for(let i=entries.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[entries[i],entries[j]]=[entries[j],entries[i]];}
      targets.forEach((date,i)=>{const old=next.days[date].planEntries.findIndex(e=>e.mealType===meal&&!e.locked&&!linked(next.days[date],e));entries[i].date=date;next.days[date].planEntries[old]=entries[i];});
    }showPlanPreview(next,"Перемешивание основных блюд",["Перекусы, напитки, прошлые даты и закреплённые записи сохранены."]);
  }
  function showPlanPreview(next,title,warnings=[],extra=null) {
    const dialog=modal(title);dialog.append(node("p","Предпросмотр. Сохранённое меню пока не изменено.","notice"));
    if(warnings.length){const list=node("ul",undefined,"notice");[...new Set(warnings)].forEach(w=>list.append(node("li",w)));dialog.append(list);}
    const preview=node("div",undefined,"preview-days");
    Object.values(next.days).filter(day=>day.date>=selectedWeek&&day.date<=addCalendarDays(selectedWeek,6)||JSON.stringify(day)!==JSON.stringify(state.days[day.date])).sort((a,b)=>a.date.localeCompare(b.date)).forEach(day=>{
      const card=node("section",undefined,"card");card.append(node("h3",prettyDate(day.date,true)),node("p","План: "+format(dayTotal(day))+" ккал · цель "+(day.goalKcal??"не задана")));
      const list=node("ul");day.planEntries.forEach(e=>list.append(node("li",MEALS[e.mealType]+": "+e.snapshot.name+" · "+format(e.portions,2)+" порц. · "+format(rawKcal(e))+" ккал")));card.append(list);preview.append(card);
    });dialog.append(preview);
    const actions=node("div",undefined,"dialog-actions");actions.append(actionButton("Применить",()=>{if(commit(next)){closeFood(true);announce("Меню сохранено.");}},false),actionButton("Отмена",()=>closeFood(true)));
    if(extra)actions.append(actionButton("Ещё вариант",extra));dialog.append(actions);
  }
  const yieldBrowser=()=>new Promise(resolve=>document.hidden?setTimeout(resolve,0):requestAnimationFrame(resolve));
  async function generatePlan(s,week,mode,seed,cancel=()=>false,metrics={}) {
    const settings=s.settings,rngBase=seed>>>0,dates=dayDates(week),candidates={};
    for(const meal of [...MAIN,"snack"])candidates[meal]=RECIPES.filter(r=>r.mealTypes.includes(meal)&&eligible(r,settings)&&recipeSnapshot(r).baseKcal>0);
    const history=new Map();
    Object.values(s.days).filter(d=>d.date>=addCalendarDays(week,-14)&&d.date<week).sort((a,b)=>a.date.localeCompare(b.date)).forEach(d=>d.planEntries.forEach(e=>{if(e.recipeId)history.set(e.recipeId,d.date);}));
    let best=null;metrics.attempts=0;metrics.maxFragmentMs=0;metrics.yields=0;
    for(let attempt=0;attempt<5;attempt++) {
      if(cancel())return null;metrics.attempts++;
      const next=clone(s),rng=seeded(rngBase+attempt),warnings=[];
      for(const date of dates) {
        if(date<todayDate())continue;const day=ensureDay(next,date);
        if(mode==="replace")day.planEntries=day.planEntries.filter(e=>e.locked||linked(day,e)||e.mealType==="drink"||e.mealType==="snack"&&e.origin!=="generated");
      }
      const usage=new Map();dates.forEach(d=>next.days[d]?.planEntries.filter(e=>MAIN.includes(e.mealType)).forEach(e=>usage.set(e.recipeId,(usage.get(e.recipeId)||0)+1)));
      for(const date of dates) {
        if(cancel())return null;let begin=performance.now();
        if(date>=todayDate()) {
          const day=ensureDay(next,date),goal=day.goalKcal,missing=MAIN.filter(meal=>!day.planEntries.some(e=>e.mealType===meal));
          const addSnack=settings.autoSnack&&!day.planEntries.some(e=>e.mealType==="snack"),slots=[...missing,...(addSnack?["snack"]:[])];
          const remaining=goal===null?null:Math.max(0,goal-dayTotal(day)),weights={breakfast:.25,lunch:.35,dinner:.30,snack:.10},denominator=slots.reduce((n,k)=>n+weights[k],0);
          for(const meal of slots) {
            if(cancel())return null;
            if(remaining===0){warnings.push(date+": свободный бюджет равен нулю — проверь сохранённые записи");continue;}
            const budget=remaining===null?null:remaining*weights[meal]/denominator;let pool=candidates[meal];
            if(MAIN.includes(meal)) {
              pool=pool.filter(r=>settings.allowRepeats||!usage.has(r.id));
              if(settings.allowRepeats) {
                const soft=pool.filter(r=>(usage.get(r.id)||0)<2&&!next.days[addCalendarDays(date,-1)]?.planEntries.some(e=>MAIN.includes(e.mealType)&&e.recipeId===r.id));
                if(soft.length)pool=soft;else if(pool.length)warnings.push("Некоторые блюда повторяются: подходящих вариантов мало");
              }
            }
            if(!pool.length){warnings.push(date+" · "+MEALS[meal]+": подходящих вариантов нет");continue;}
            let options=pool.map(recipe=>{
              const kcal=recipeSnapshot(recipe).baseKcal,portions=budget===null?1:[.75,1,1.25,1.5,1.75,2].reduce((best,p)=>Math.abs(kcal*p-budget)<Math.abs(kcal*best-budget)?p:best,.75);
              return {recipe,portions,error:budget===null?0:Math.abs(kcal*portions-budget)};
            });
            if(budget!==null) {
              const fresh=options.filter(o=>!history.has(o.recipe.id)&&o.error<=budget*.15);if(fresh.length)options=fresh;
              options.sort((a,b)=>a.error-b.error);options=options.filter(o=>o.error<=options[0].error+25).slice(0,3);
            } else {
              options.sort((a,b)=>(history.get(a.recipe.id)||"").localeCompare(history.get(b.recipe.id)||"")||(usage.get(a.recipe.id)||0)-(usage.get(b.recipe.id)||0));options=options.slice(0,3);
            }
            const chosen=options[Math.floor(rng()*options.length)];day.planEntries.push(makeEntry(chosen.recipe,date,meal,chosen.portions,"generated"));
            if(MAIN.includes(meal))usage.set(chosen.recipe.id,(usage.get(chosen.recipe.id)||0)+1);
            if(performance.now()-begin>8){metrics.maxFragmentMs=Math.max(metrics.maxFragmentMs,performance.now()-begin);await yieldBrowser();metrics.yields++;begin=performance.now();}
          }
          if(goal!==null&&Math.abs(dayTotal(day)-goal)>goal*.1)warnings.push(date+": подбор приблизительный — можно изменить порцию");
        }
        metrics.maxFragmentMs=Math.max(metrics.maxFragmentMs,performance.now()-begin);await yieldBrowser();metrics.yields++;
      }
      const filled=dates.reduce((n,d)=>n+(next.days[d]?.planEntries.filter(e=>MAIN.includes(e.mealType)).length||0),0);
      const deviation=dates.filter(d=>d>=todayDate()).reduce((n,d)=>{const day=next.days[d];return n+(day?.goalKcal?Math.abs(dayTotal(day)-day.goalKcal)/day.goalKcal:0);},0);
      const repeats=[...usage.values()].reduce((n,count)=>n+Math.max(0,count-1),0),score={filled,deviation,repeats};
      if(!best||filled>best.score.filled||filled===best.score.filled&&(deviation<best.score.deviation-1e-9||Math.abs(deviation-best.score.deviation)<1e-9&&repeats<best.score.repeats))best={next,warnings,score,seed:rngBase+attempt};
    }
    if(cancel())return null;best.next.lastGeneration={weekStart:week,seed:best.seed,algorithmVersion:1};return best;
  }
  async function generatePreview(mode) {
    if(generationRunning)return;
    if(addCalendarDays(selectedWeek,6)<todayDate()){announce("Автоматический подбор доступен для сегодняшних и будущих дат.");return;}
    const dialog=modal("Подбираем меню…");dialog.append(node("p","Подбор из каталога. До пяти попыток, сохранённое меню не меняется."),actionButton("Отмена",()=>closeFood(true)));
    generationRunning=true;const seed=Math.floor(Math.random()*4294967296),snapshot=clone(state),week=selectedWeek;
    try {
      const metrics={},result=await generatePlan(snapshot,week,mode,seed,()=>foodCancelled||foodDialog!==dialog,metrics);
      if(result&&!foodCancelled&&foodDialog===dialog)showPlanPreview(result.next,"Предпросмотр меню",result.warnings,()=>generatePreview(mode));
    } catch {if(foodDialog===dialog)errorIn(dialog,"Не удалось подобрать меню. Исходный план сохранён.");}
    finally {generationRunning=false;}
  }
  function bindFoodEvents() {
    document.querySelectorAll("[data-week-shift]").forEach(b=>b.addEventListener("click",()=>{selectedWeek=addCalendarDays(selectedWeek,+b.dataset.weekShift);selectedDay=selectedWeek;render();}));
    $("currentWeek").addEventListener("click",()=>{selectedWeek=mondayOf(todayDate());selectedDay=todayDate();render();});
    document.addEventListener("click",e=>{if(e.target.closest('[data-action="pantry"]'))pantryDialog();});
    window.FoodPlanner=Object.freeze({FOOD,RECIPES,recipeSnapshot,drinkSnapshot,rawKcal,aggregateShopping,shoppingText,shoppingPeriod,quantityLabel,generatePlan,copyWeekPlan,validatePlanDay,validateShopping,dayDates,seeded});
  }

  bindFoodEvents();buildIngredientOptions();bindEvents();loadState();render();
})();
