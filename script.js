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
    const result=checkStructure(candidate,STATE_SCHEMA,"state");
    return result.errors.length?result.errors:validateRelations(result.value);
  }
  // Pure functions are reusable in subsequent steps and can be tested without UI state.
  window.MenuWithoutDrama = Object.freeze({parseNumber,calorieGoal,validateProfile,validateState,createEmptyState,todayDate,addCalendarDays,mondayOf});
  let state=createEmptyState(),lastSavedRaw=null,originalRaw=null,recovery=false,storageError=null,conflict=false,unsaved=false;
  let showStart=false,activeTab="week",wizardStep=1,skipPersonal=false,baselineForm="",returnFocus=null,dialogScroll=0,discardFocus=null;
  function node(tag,text,className) {
    const el=document.createElement(tag);
    if(text!==undefined) el.textContent=text;
    if(className) el.className=className;
    return el;
  }
  let uidCounter=0;
  const issuedIds=new Set();
  function uid(prefix) {
    let id;do{id=prefix+(window.crypto?.randomUUID?window.crypto.randomUUID():Date.now().toString(36)+"-"+Math.random().toString(36).slice(2)+"-"+(++uidCounter));}while(issuedIds.has(id));
    issuedIds.add(id);return id;
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
        state=checkStructure(candidate,STATE_SCHEMA).value;rememberIds(state);
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
    if(storageError?.name==="QuotaExceededError"&&!quotaShown){quotaShown=true;setTimeout(showQuotaDialog,0);}
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
    if(renderFoodPanel())return;
    if(activeTab==="weight"){renderWeight($("panelContent"));return;}
    renderSettings($("panelContent"));
  }
  function render() {
    weekRowObserver?.disconnect();weekRowObserver=null;
    weightChartObserver?.disconnect();weightChartObserver=null;
    document.documentElement.dataset.animations=state.settings.animationsEnabled?"on":"off";
    $("welcome").hidden=recovery||state.profile.completed&&!showStart;
    $("workspace").hidden=recovery||!state.profile.completed||showStart;
    $("continuePlanning").hidden=!state.profile.completed;
    $("completeProfile").hidden=state.profile.completed;
    const startProfile=$("welcome").querySelector("[data-action=open-profile]");
    startProfile.hidden=false;
    startProfile.parentElement.classList.toggle("with-planner",state.profile.completed);
    startProfile.classList.toggle("primary",!state.profile.completed);
    startProfile.classList.toggle("secondary",state.profile.completed);
    $("welcome").querySelector("[data-action=skip-profile]").hidden=state.profile.completed;
    $("recovery").hidden=!recovery;
    document.querySelectorAll("[data-tab]").forEach(el=>{
      el.disabled=recovery||!state.profile.completed;
      if(el.dataset.tab===activeTab&&!showStart) el.setAttribute("aria-current","page");else el.removeAttribute("aria-current");
    });
    const monday=selectedWeek,sunday=addCalendarDays(monday,6);
    const dateLabel=(date)=>{const [y,m,d]=date.split("-").map(Number);return new Date(y,m-1,d,12).toLocaleDateString("ru-RU",{day:"numeric",month:"long"});};
    $("weekLabel").textContent=dateLabel(monday)+" — "+dateLabel(sunday);
    renderStorage();
    if(state.profile.completed&&!recovery&&!showStart){renderPanel();renderTip($("panelContent"));}
  }
  function buildIngredientOptions() {
    const container=$("ingredientOptions");
    allFood().forEach(({id,name})=>{
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
    $("ingredientOptions").replaceChildren();buildIngredientOptions();
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
    } else preview.append(node("p","Без калорийной цели. Можно планировать блюда и записывать съеденное без дневного ориентира."));
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
  let lastDownloadUrl=null;
  function downloadText(text,filename,type="application/json") {
    if(lastDownloadUrl)URL.revokeObjectURL(lastDownloadUrl);
    lastDownloadUrl=URL.createObjectURL(new Blob([text],{type:type+";charset=utf-8"}));
    const a=node("a","Скачать: "+filename);a.href=lastDownloadUrl;a.download=filename;
    let fallback=$("downloadFallback");if(!fallback){fallback=node("p",undefined,"notice");fallback.id="downloadFallback";}
    (foodDialog||$("main")).append(fallback);
    fallback.replaceChildren(node("span","Если скачивание не началось, нажмите ссылку: "),a);a.click();
  }
  function emergencyExport() {
    downloadText(JSON.stringify({appId:"menu-without-drama",schemaVersion:1,catalogVersion:1,exportedAt:new Date().toISOString(),state},null,2),"lozhka-poryadka-"+todayDate()+".json");
  }
  function bindEvents() {
    document.addEventListener("click",event=>{
      const action=event.target.closest("[data-action]")?.dataset.action;
      if(action==="home"){
        event.preventDefault();showStart=true;render();announce("");
        $("main").focus({preventScroll:true});window.scrollTo(0,0);
      }
      if(action==="continue-planning"){
        showStart=false;render();$("main").focus({preventScroll:true});window.scrollTo(0,0);
      }
      if(action==="open-profile") {showStart=false;openProfile();}
      if(action==="skip-profile") {showStart=false;openProfile(true);}
      if(action==="edit-preferences") openProfile(false,true);
      if(action==="settings") {showStart=false;activeTab="settings";render();}
      const tab=event.target.closest("[data-tab]");
      if(tab&&!tab.disabled) {showStart=false;activeTab=tab.dataset.tab;render();announce("");}
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
        if(lastDownloadUrl){URL.revokeObjectURL(lastDownloadUrl);lastDownloadUrl=null;}$("downloadFallback")?.remove();
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
  let selectedWeek=mondayOf(todayDate()),selectedDay=todayDate(),shoppingScope="tomorrow",selectedPlannerAction="automatic";
  let foodDialog=null,foodDirty=false,foodCancelled=false,generationRunning=false;
  const expandedExtras=new Set();
  let catalogFilters={query:"",meal:"",minutes:"",noCook:false,mine:false,favorites:false,excluded:false};
  const allFood=()=>[...FOOD,...state.customIngredients],allRecipes=()=>[...RECIPES,...state.customRecipes];
  const foodById=id=>allFood().find(x=>x.id===id),recipeById=id=>allRecipes().find(x=>x.id===id);
  const dayDates=week=>Array.from({length:7},(_,i)=>addCalendarDays(week,i));
  function prettyDate(date,short=false) {
    const [y,m,d]=date.split("-").map(Number);
    return new Date(y,m-1,d,12).toLocaleDateString("ru-RU",{weekday:short?"short":"long",day:"numeric",month:short?"short":"long"});
  }
  function recipeSnapshot(recipe,sourceFood=allFood()) {
    const ingredients=recipe.ingredients.map(({ingredientId,quantity})=>{
      const item=sourceFood.find(i=>i.id===ingredientId);return {ingredientId,name:item.name,group:item.group,unit:item.unit,quantity,kcalRate:item.unit==="pcs"?item.kcalPerUnit:item.kcalPer100/100};
    });
    return {name:recipe.name,sourceType:recipe.sourceType,baseKcal:recipe.calorieMode==="manual"?recipe.manualKcal:ingredients.reduce((n,i)=>n+i.quantity*i.kcalRate,0),ingredients,steps:[...recipe.steps],incompleteIngredients:!ingredients.length,opaquePackaged:!!recipe.opaquePackaged,calorieMode:recipe.calorieMode||"ingredients"};
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
  function makeEntry(recipe,date,mealType,portions=1,origin="manual",sourceFood=allFood()) {
    return {id:uid("pe_"),date,mealType,recipeId:recipe.id,snapshot:recipeSnapshot(recipe,sourceFood),portions,drinkConfig:null,locked:false,origin,createdAt:new Date().toISOString()};
  }
  const linked=(day,entry)=>day.actualEntries.some(a=>a.sourcePlanEntryId===entry.id);
  const conflicts=(entry,settings)=>entry.snapshot.ingredients.filter(i=>settings.excludedIngredientIds.includes(i.ingredientId)).map(i=>i.name);
  function eligible(recipe,settings,automatic=true) {
    return !!recipe&&(!automatic||recipe.suitableForAuto)&&recipe.prepMinutes<=settings.maxPrepMinutes&&(settings.allowReadyMeals||recipe.sourceType!=="ready")&&!recipe.ingredients.some(i=>settings.excludedIngredientIds.includes(i.ingredientId));
  }
  function validatePlanDay(day) { return validateRelations({...state,days:{[day.date]:day},shoppingMarks:{}}); }
  function validateShopping(s) { return validateRelations(s); }
  function aggregateShopping(s,start,end) {
    const items=Object.create(null);Object.values(s.days).filter(d=>d.date>=start&&d.date<=end).forEach(d=>d.planEntries.forEach(e=>e.snapshot.ingredients.forEach(i=>{
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
    }const unclear=unclearShopping(s,p.start,p.end);if(unclear.length){lines.push("Уточнить состав");unclear.forEach(i=>lines.push(i.name+" — "+format(i.portions,2)+" порц."));}return lines.join("\n");
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
    snapshot.ingredients.forEach(i=>list.append(node("li",i.name+" — "+format(i.quantity*portions,2)+" "+(i.unit==="ml"?"мл":i.unit==="pcs"?"шт.":"г"))));dialog.append(list);
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
      const recipes=(alternatives||allRecipes()).filter(r=>(!f.query||r.name.toLocaleLowerCase("ru").includes(f.query.toLocaleLowerCase("ru")))&&(!f.meal||r.mealTypes.includes(f.meal))&&(!f.minutes||r.prepMinutes<=+f.minutes)&&(!f.noCook||r.noCook||r.prepMinutes===0)&&(!f.mine||r.id.startsWith("cr_"))&&(!f.favorites||state.settings.favoriteRecipeIds.includes(r.id))&&(f.excluded||!r.ingredients.some(i=>state.settings.excludedIngredientIds.includes(i.ingredientId))));
      if(!recipes.length)list.append(node("p","Подходящих блюд нет. Попробуйте изменить фильтры или создайте своё.","notice"));
      recipes.forEach(r=>{
        const snap=recipeSnapshot(r),blocked=conflicts({snapshot:snap},state.settings),card=node("article",undefined,"card recipe-card");
        card.append(node("h3",r.name),node("p",r.prepMinutes+" мин · "+format(snap.baseKcal)+" ккал · 1 порция"));
        if(blocked.length)card.append(node("p","Исключено: "+blocked.join(", "),"warning"));
        const row=node("div",undefined,"button-row");
        row.append(actionButton("Рецепт",()=>showRecipe(snap)),actionButton(state.settings.favoriteRecipeIds.includes(r.id)?"★ В избранном":"☆ Избранное",()=>{toggleFavorite(r.id);refresh();}));
        const add=actionButton(context?"Выбрать":"В план",()=>choosePortion(r,context),false);add.disabled=blocked.length>0;row.append(add);
        if(!context){row.append(actionButton(r.id.startsWith("cr_")?"Изменить":"Изменить копию",()=>editRecipe(r)));if(r.id.startsWith("cr_"))row.append(actionButton("Удалить",()=>deleteRecipe(r)));}
        if(snap.incompleteIngredients||snap.opaquePackaged)card.append(node("p",snap.opaquePackaged?"Состав и ограничения проверь по упаковке":"Состав не указан","warning"));if(r.note)card.append(node("p",r.note,"subtle"));card.append(row);list.append(card);
      });
    }
    search.addEventListener("input",refresh);meal.addEventListener("change",refresh);minutes.addEventListener("change",refresh);refresh();
  }
  function openCatalog(date,mealType,existing=null) {
    const dialog=modal(existing?"Заменить блюдо":"Выбрать блюдо");let alternatives=null;
    if(existing) {
      alternatives=allRecipes().filter(r=>r.id!==existing.recipeId&&r.mealTypes.includes(mealType)&&eligible(r,state.settings,false)).sort((a,b)=>Math.abs(recipeSnapshot(a).baseKcal*existing.portions-rawKcal(existing))-Math.abs(recipeSnapshot(b).baseKcal*existing.portions-rawKcal(existing))).slice(0,5);
      dialog.append(node("p","До пяти подходящих альтернатив по калорийности. Выбор сохраняется после подтверждения порции."));
    }
    catalogUI(dialog,{date,mealType,existing},alternatives);
  }
  function savePlannedEntry(entry,existingId=null) {
    const next=clone(state),day=ensureDay(next,entry.date);
    const removed=day.planEntries.filter(e=>(existingId&&e.id===existingId||MAIN.includes(entry.mealType)&&e.mealType===entry.mealType)&&e.id!==entry.id).map(e=>e.id);detachPlanLinks(day,removed);
    if(existingId)day.planEntries=day.planEntries.filter(e=>e.id!==existingId);
    if(MAIN.includes(entry.mealType))day.planEntries=day.planEntries.filter(e=>e.mealType!==entry.mealType);
    if(!MAIN.includes(entry.mealType)&&day.planEntries.filter(e=>e.mealType===entry.mealType).length>=100){announce("В день можно добавить до 100 записей этого вида.");return false;}
    day.planEntries.push(entry);return commit(next);
  }
  function choosePortion(recipe,context=null) {
    const dialog=modal("Порция · "+recipe.name,true),form=node("form"),date=inputField(form,"Дата","date",context?.date||selectedDay);
    const meal=selectField(form,"Приём пищи",Object.fromEntries(recipe.mealTypes.map(k=>[k,MEALS[k]])),context?.mealType||recipe.mealTypes[0]),quantity=inputField(form,"Порций · от 0,25 до 4, шаг 0,25","decimal",context?.existing?.portions||1);
    if(context?.existing){date.disabled=true;meal.disabled=true;}
    let packageConfirmed=null;if(recipeSnapshot(recipe).incompleteIngredients||recipe.opaquePackaged){form.append(node("p","Состав и ограничения проверь по упаковке.","warning"));packageConfirmed=node("input");packageConfirmed.type="checkbox";const label=node("label",undefined,"check-line");label.append(packageConfirmed,node("span","Я проверила состав для этого добавления"));form.append(label);}
    const preview=node("p",undefined,"notice");form.append(preview);
    const update=()=>{const parsed=parseNumber(quantity.value,.25,4,.25);preview.textContent=parsed.error||format(recipeSnapshot(recipe).baseKcal*parsed.value)+" ккал";};quantity.addEventListener("input",update);update();
    if(context?.existing?.locked)form.append(node("p","Ручная замена снимет отметку «Сохранить при подборе».","warning"));
    if(context?.date<todayDate())form.append(node("p","Изменение плана не меняет съеденное.","subtle"));
    const save=node("button","Сохранить","button primary");save.type="submit";form.append(save);dialog.append(form);
    form.addEventListener("submit",e=>{
      e.preventDefault();const q=parseNumber(quantity.value,.25,4,.25);
      if(!validDate(date.value)||q.error){errorIn(form,q.error||"Выберите корректную дату.");return;}
      if(packageConfirmed&&!packageConfirmed.checked){errorIn(form,"Подтвердите проверку состава.");return;}
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
  function openEntryDetails(entry) {
    const dialog=modal(entry.snapshot.name);
    dialog.append(node("p",MEALS[entry.mealType]+" · "+prettyDate(entry.date),"subtle"),
      node("p",format(rawKcal(entry))+" ккал · "+(entry.mealType==="drink"?entry.drinkConfig.volumeMl+" мл":format(entry.portions,2)+" порц."),"notice"));
    const excluded=conflicts(entry,state.settings);
    if(excluded.length)dialog.append(node("p","Конфликт ограничений: "+excluded.join(", ")+". Можно заменить блюдо.","warning"));
    if(entry.date<todayDate())dialog.append(node("p","Изменение плана не меняет съеденное.","subtle"));
    const actions=node("div",undefined,"button-row entry-detail-actions");
    actions.append(actionButton(entry.mealType==="drink"?"Изменить напиток":"Изменить порцию",()=>editPortion(entry),false));
    if(entry.mealType!=="drink")actions.append(actionButton("Заменить",()=>openCatalog(entry.date,entry.mealType,entry)));
    actions.append(actionButton("Копировать",()=>copyEntryDialog(entry)),
      actionButton("Удалить",()=>confirmAction("Удалить запись?",entry.snapshot.name+" · "+prettyDate(entry.date),()=>{
        const next=clone(state);detachPlanLinks(next.days[entry.date],[entry.id]);next.days[entry.date].planEntries=next.days[entry.date].planEntries.filter(e=>e.id!==entry.id);commit(next);
      })));
    const fact=state.days[entry.date]?.actualEntries.find(a=>a.sourcePlanEntryId===entry.id);
    const eaten=actionButton(fact?"Изменить факт":"Записать факт",()=>editActual(entry.date,entry,fact));eaten.disabled=entry.date>todayDate();actions.append(eaten);
    if(fact)actions.append(actionButton("Не съела",()=>removeActual(fact)));dialog.append(actions);
    const currentRecipe=recipeById(entry.recipeId);if(currentRecipe&&!linked(state.days[entry.date],entry))dialog.append(actionButton("Обновить из рецепта",()=>updatePlanRecipe(entry,currentRecipe)));
    const list=node("ul");
    entry.snapshot.ingredients.forEach(i=>list.append(node("li",i.name+" — "+format(i.quantity*entry.portions,2)+" "+(i.unit==="ml"?"мл":i.unit==="pcs"?"шт.":"г"))));
    if(list.childElementCount)dialog.append(node("h3","Ингредиенты"),list);
    if(entry.snapshot.steps.length){const steps=node("ol");entry.snapshot.steps.forEach(step=>steps.append(node("li",step)));dialog.append(node("h3","Приготовление"),steps);}
  }
  function entryCard(entry,day) {
    const card=node("div",undefined,"plan-entry compact-entry"),row=node("div",undefined,"entry-summary");
    const open=actionButton("",()=>openEntryDetails(entry));
    open.className="entry-open";open.dataset.entryId=entry.id;
    open.setAttribute("aria-label",entry.snapshot.name+" · "+format(rawKcal(entry))+" ккал. Открыть подробности");
    open.append(node("strong",entry.snapshot.name),node("span",format(rawKcal(entry))+" ккал","entry-meta"));
    row.append(open);
    if(MAIN.includes(entry.mealType)) {
      const pin=actionButton("",()=>{
        const next=clone(state);next.days[entry.date].planEntries.find(e=>e.id===entry.id).locked=!entry.locked;
        if(commit(next)){const current=[...document.querySelectorAll(".pin-button")].find(b=>b.dataset.entryId===entry.id);current?.focus({preventScroll:true});}
      });
      pin.className="pin-button";pin.dataset.entryId=entry.id;
      const label=(entry.locked?"Снять закрепление: ":"Сохранить при подборе: ")+entry.snapshot.name;
      pin.setAttribute("aria-label",label);pin.title=label;pin.setAttribute("aria-pressed",String(entry.locked));
      const svg=document.createElementNS("http://www.w3.org/2000/svg","svg");svg.setAttribute("viewBox","0 0 24 24");svg.setAttribute("aria-hidden","true");
      const path=document.createElementNS("http://www.w3.org/2000/svg","path");
      path.setAttribute("d","m9 3 6 0-1 6 4 4v2H6v-2l4-4-1-6M12 15v6");
      svg.append(path);pin.append(svg);row.append(pin);
    }
    card.append(row);
    if(conflicts(entry,state.settings).length)card.append(node("span","Проверь ограничения","entry-conflict"));
    const eaten=day.actualEntries.find(a=>a.sourcePlanEntryId===entry.id);if(eaten)card.append(node("span","✓ Съедено: "+format(eaten.portions,2)+" порц.","eaten-status"));
    return card;
  }
  function openDayDrinks(date) {
    const dialog=modal("Напитки · "+prettyDate(date,true));
    const entries=state.days[date]?.planEntries.filter(e=>e.mealType==="drink")||[];
    dialog.append(node("p",entries.length+" напитков · "+format(entries.reduce((sum,e)=>sum+rawKcal(e),0))+" ккал","notice"));
    if(!entries.length)dialog.append(node("p","Добавьте воду, чай или привычный кофе.","subtle"));
    const list=node("div",undefined,"day-drinks-list");
    entries.forEach(entry=>{
      const item=node("section",undefined,"card drink-list-item");
      item.append(node("h3",entry.snapshot.name),node("p",entry.drinkConfig.volumeMl+" мл · молоко "+entry.drinkConfig.milkMl+" мл · сахар "+entry.drinkConfig.sugarG+" г · "+format(rawKcal(entry))+" ккал","subtle"));
      const actions=node("div",undefined,"button-row");
      actions.append(actionButton("Изменить",()=>editDrink(date,entry),false),
        actionButton("Копировать",()=>copyEntryDialog(entry)),
        actionButton("Удалить",()=>confirmAction("Удалить напиток?",entry.snapshot.name+" · "+prettyDate(date),()=>{
          const next=clone(state);detachPlanLinks(next.days[date],[entry.id]);next.days[date].planEntries=next.days[date].planEntries.filter(e=>e.id!==entry.id);
          if(commit(next))openDayDrinks(date);
        })));
      const actual=state.days[date].actualEntries.find(a=>a.sourcePlanEntryId===entry.id);const eaten=actionButton(actual?"Изменить факт":"Записать факт",()=>editActual(date,entry,actual));eaten.disabled=date>todayDate();actions.append(eaten);if(actual)item.append(node("p","✓ Выпито: "+actual.drinkConfig.volumeMl+" мл","eaten-status"));
      item.append(actions);list.append(item);
    });
    dialog.append(list,actionButton("Добавить напиток",()=>editDrink(date),false));
  }
  function drinksSummary(date,day) {
    const entries=day.planEntries.filter(e=>e.mealType==="drink");
    const total=entries.reduce((sum,e)=>sum+rawKcal(e),0);
    const b=actionButton("",()=>entries.length?openDayDrinks(date):editDrink(date));
    b.className="drink-summary";b.dataset.drinksDate=date;
    b.setAttribute("aria-label",entries.length?"Напитки: "+entries.length+", "+format(total)+" ккал. Открыть список":"Добавить напиток");
    const icon=node("span","☕","drink-summary-icon");icon.setAttribute("aria-hidden","true");
    const text=node("span",undefined,"drink-summary-text");
    text.append(node("span",entries.length?"Напитки · "+entries.length:"Добавить напиток"));
    if(entries.length)text.append(node("span",format(total)+" ккал","drink-summary-kcal"));
    const arrow=node("span",entries.length?"›":"+","drink-summary-arrow");arrow.setAttribute("aria-hidden","true");
    b.append(icon,text,arrow);return b;
  }
  let weekRowObserver=null;
  function alignWeekRows(grid) {
    let scheduled=false;const observedSizes=new WeakMap();
    const selectors=[".day-card-header",".drink-summary",".fact-summary",...MAIN.map(meal=>'[data-meal-type="'+meal+'"]'),'[data-meal-type="snack"]'];
    const align=()=>{
      scheduled=false;
      if(!grid.isConnected)return;
      const rows=selectors.map(selector=>[...grid.querySelectorAll(".day-card > "+selector)]);
      rows.flat().forEach(element=>element.style.minHeight="");
      if(!matchMedia("(min-width:768px)").matches)return;
      const heights=rows.map(elements=>Math.max(0,...elements.map(element=>element.getBoundingClientRect().height)));
      rows.forEach((elements,index)=>elements.forEach(element=>element.style.minHeight=Math.ceil(heights[index])+"px"));
    };
    const schedule=()=>{if(!scheduled){scheduled=true;requestAnimationFrame(align);}};
    weekRowObserver=new ResizeObserver(entries=>{
      let changed=false;
      for(const entry of entries){
        const size=entry.target===grid?String(entry.contentRect.width):entry.contentRect.width+":"+entry.contentRect.height;
        if(observedSizes.get(entry.target)!==size){observedSizes.set(entry.target,size);changed=true;}
      }
      if(changed)schedule();
    });
    weekRowObserver.observe(grid);
    grid.querySelectorAll(".entry-open,.day-heading,.day-total,.extra-slot > summary").forEach(element=>weekRowObserver.observe(element));
    grid.addEventListener("toggle",schedule,true);
    document.fonts.ready.then(schedule);
    schedule();
  }
  function renderWeek(parent) {
    const dates=dayDates(selectedWeek),tools=node("div",undefined,"button-row planner-tools");
    const methods=[
      ["automatic","Составить автоматически",()=>generatePreview("replace")],
      ["manual","Составить самостоятельно",()=>{
        const next=clone(state);dates.forEach(d=>ensureDay(next,d));
        if(commit(next)){
          announce("Неделя готова: нажмите «Добавить» у нужного приёма пищи.");
          document.querySelector('[data-planner-action="manual"]')?.focus({preventScroll:true});
        }
      }],
      ["empty","Заполнить пустые места",()=>generatePreview("empty")],
      ["copy","Скопировать предыдущую",()=>copyWeekDialog()],
      ["shuffle","Перемешать основные блюда",shufflePreview]
    ];
    methods.forEach(([key,label,handler])=>{
      const b=actionButton(label,()=>{
        selectedPlannerAction=key;
        if(key!=="manual")parent.querySelector(".manual-plan-hint")?.remove();
        tools.querySelectorAll("[data-planner-action]").forEach(el=>{
          const selected=el.dataset.plannerAction===key;
          el.classList.toggle("primary",selected);el.classList.toggle("secondary",!selected);
          el.setAttribute("aria-pressed",String(selected));
        });
        handler();
      },selectedPlannerAction!==key);
      b.dataset.plannerAction=key;b.setAttribute("aria-pressed",String(selectedPlannerAction===key));tools.append(b);
    });
    parent.append(node("p","Подбор из каталога · "+dates.reduce((n,d)=>n+(state.days[d]?.planEntries.filter(e=>MAIN.includes(e.mealType)).length||0),0)+" из 21 основных приёмов заполнено.","subtle"),tools);
    if(selectedPlannerAction==="manual")parent.append(node("p","Выберите день и нажмите «Добавить» у завтрака, обеда или ужина. Блюдо можно открыть для изменения порции или замены.","notice manual-plan-hint"));
    const switcher=node("div",undefined,"day-switcher");switcher.setAttribute("aria-label","Дни недели");
    dates.forEach(date=>{const b=actionButton(prettyDate(date,true),()=>{selectedDay=date;render();});b.setAttribute("aria-pressed",String(selectedDay===date));switcher.append(b);});parent.append(switcher);requestAnimationFrame(()=>{const active=switcher.querySelector("[aria-pressed=true]");if(active)switcher.scrollLeft=Math.max(0,active.offsetLeft-switcher.offsetLeft-switcher.clientWidth/2+active.clientWidth/2);});
    const grid=node("div",undefined,"week-grid");
    dates.forEach(date=>{
      const day=state.days[date]||{date,goalKcal:goalFor(state,date),planEntries:[],actualEntries:[]},card=node("article",undefined,"card day-card");
      card.dataset.date=date;if(date===selectedDay)card.classList.add("selected-day");
      const header=node("header",undefined,"day-card-header");
      const calendarDate=new Date(date+"T12:00:00"),heading=node("h2",undefined,"day-heading");
      const weekday=calendarDate.toLocaleDateString("ru-RU",{weekday:"long"});
      heading.append(node("span",weekday.charAt(0).toUpperCase()+weekday.slice(1),"day-weekday"),node("span",calendarDate.toLocaleDateString("ru-RU",{day:"numeric",month:"short"}),"day-date"));header.append(heading);
      const total=dayTotal(day),totalRow=node("p",undefined,"day-total");
      totalRow.append(node("span","План: "+format(total)+" ккал"));
      if(day.goalKcal!==null&&total>day.goalKcal){
        const info=actionButton("ⓘ",()=>{
          const dialog=modal(prettyDate(date));
          dialog.append(node("p","План: "+format(total)+" ккал"),node("p","Ориентир: "+format(day.goalKcal)+" ккал"),node("p","Выше ориентира на "+format(total-day.goalKcal)+" ккал"));
        });
        info.className="day-goal-info";info.setAttribute("aria-label","Пояснение к калориям за "+prettyDate(date));info.setAttribute("aria-haspopup","dialog");totalRow.append(info);
      }
      header.append(totalRow,node("p","Цель: "+(day.goalKcal===null?"без цели":format(day.goalKcal)+" ккал"),"subtle"));
      if(day.goalKcal!==null){const progress=node("progress");progress.max=day.goalKcal;progress.value=Math.min(total,day.goalKcal);progress.setAttribute("aria-label","План относительно цели");header.append(progress);}
      if(date<todayDate())header.append(node("p","Изменение плана не меняет съеденное.","subtle"));
      card.append(header);
      for(const mealType of MAIN) {
        const section=node("section",undefined,"meal-slot");section.dataset.mealType=mealType;section.append(node("h3",MEALS[mealType]));
        const entry=day.planEntries.find(e=>e.mealType===mealType);section.append(entry?entryCard(entry,day):actionButton("Добавить",()=>openCatalog(date,mealType)));card.append(section);
      }
      for(const mealType of ["snack"]) {
        const entries=day.planEntries.filter(e=>e.mealType===mealType),many=entries.length>2;
        const section=node(many?"details":"section",undefined,"meal-slot extra-slot");section.dataset.mealType=mealType;
        const label=mealType==="drink"?"Напитки":"Перекусы",key=date+":"+mealType;
        section.append(node(many?"summary":"h3",label+(many?" · "+entries.length:"")));
        if(many){section.open=expandedExtras.has(key);section.addEventListener("toggle",()=>{if(section.open)expandedExtras.add(key);else expandedExtras.delete(key);});}
        entries.forEach(e=>section.append(entryCard(e,day)));
        section.append(actionButton(mealType==="drink"?"Добавить напиток":"Добавить перекус",()=>mealType==="drink"?editDrink(date):openCatalog(date,mealType)));card.append(section);
      }
      card.append(drinksSummary(date,day));
      const fact=actionButton(date>todayDate()?"Факт доступен с этой даты":"Записать факт · "+format(actualTotal(day))+" ккал · "+day.actualEntries.length,()=>openJournal(date));fact.classList.add("fact-summary");fact.disabled=date>todayDate();card.append(fact);grid.append(card);
    });parent.append(grid);alignWeekRows(grid);
  }
  function renderShopping(parent) {
    const p=shoppingPeriod(),tabs=node("div",undefined,"button-row");
    for(const [scope,label] of [["tomorrow","На завтра"],["week","На неделю"]]){const b=actionButton(label,()=>{shoppingScope=scope;render();},scope!==shoppingScope);b.setAttribute("aria-pressed",String(scope===shoppingScope));tabs.append(b);}
    tabs.append(actionButton("Продукты дома",pantryDialog));parent.append(tabs,node("h2",p.label),node("p","Количества для покупки округлены вверх.","subtle"));
    const items=aggregateShopping(state,p.start,p.end);
    const unclear=unclearShopping(state,p.start,p.end);if(unclear.length){const box=node("section",undefined,"card");box.append(node("h2","Уточнить состав"));unclear.forEach(i=>box.append(actionButton(i.name+" · "+format(i.portions,2)+" порц.",()=>showRecipe(i.snapshot))));parent.append(box);}
    if(p.scope==="tomorrow")parent.append(actionButton("Меню на завтра",()=>{selectedWeek=mondayOf(p.start);selectedDay=p.start;activeTab="week";render();}));
    if(!items.length&&!unclear.length)parent.append(node("p","В этом периоде пока нет продуктов: добавьте блюда или напитки в план.","notice"));
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
    const refresh=()=>{list.replaceChildren();allFood().filter(i=>!i.archived||state.pantry[i.id]).filter(i=>i.name.toLocaleLowerCase("ru").includes(search.value.toLocaleLowerCase("ru"))).forEach(i=>list.append(checkField(i.name,!!state.pantry[i.id],v=>{const next=clone(state);next.pantry[i.id]=v;commit(next);})));}
    search.addEventListener("input",refresh);refresh();
  }
  function renderFoodPanel() {
    if(!["week","recipes","shopping"].includes(activeTab))return false;
    const parent=$("panelContent");parent.replaceChildren();
    $("sectionEyebrow").textContent={week:"Своя еда. Свой ритм.",recipes:"Простая еда на каждый день",shopping:"Меньше забытых продуктов"}[activeTab];
    $("sectionTitle").textContent={week:"Ваше меню на неделю",recipes:"Ваши блюда",shopping:"Покупки"}[activeTab];$("weekBar").hidden=activeTab==="recipes";
    if(activeTab==="week")renderWeek(parent);else if(activeTab==="recipes"){parent.append(actionButton("Создать своё блюдо",()=>editRecipe(),false),node("p","Выберите из готовых или сохраните свой рецепт.","subtle"));catalogUI(parent);}else renderShopping(parent);return true;
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
        const restriction=copyRestriction(entry,next);if(restriction){messages.push(date+": "+restriction);continue;}
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
        const restriction=copyRestriction(entry,s);if(restriction){warnings.push(date+": пропущено "+entry.snapshot.name+" — "+restriction);return;}
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
    const savedIds=new Set(Object.values(state.days).flatMap(d=>d.planEntries.map(e=>e.id)));
    let packageCheck=null;if(Object.values(next.days).some(d=>d.planEntries.some(e=>!savedIds.has(e.id)&&e.mealType!=="drink"&&(e.snapshot.opaquePackaged||e.snapshot.incompleteIngredients)))){const label=checkField("Я проверила состав и ограничения по упаковке для этого копирования",false,()=>{});packageCheck=label.querySelector("input");dialog.append(node("p","В копии есть блюда с неизвестным составом. Состав и ограничения проверь по упаковке.","warning"),label);}
    const actions=node("div",undefined,"dialog-actions");actions.append(actionButton("Применить",()=>{if(packageCheck&&!packageCheck.checked){errorIn(dialog,"Подтвердите проверку состава.");return;}if(commit(next)){closeFood(true);announce(storageError?"Меню принято в память, но не сохранено. Скачайте текущие данные.":"Меню сохранено.");}},false),actionButton("Отмена",()=>closeFood(true)));
    if(extra)actions.append(actionButton("Ещё вариант",extra));dialog.append(actions);
  }
  const yieldBrowser=()=>new Promise(resolve=>document.hidden?setTimeout(resolve,0):requestAnimationFrame(resolve));
  async function generatePlan(s,week,mode,seed,cancel=()=>false,metrics={}) {
    const settings=s.settings,rngBase=seed>>>0,dates=dayDates(week),candidates={},sourceFood=[...FOOD,...s.customIngredients];
    for(const meal of [...MAIN,"snack"])candidates[meal]=[...RECIPES,...s.customRecipes].filter(r=>r.mealTypes.includes(meal)&&eligible(r,settings)&&recipeSnapshot(r,sourceFood).baseKcal>0);
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
              const kcal=recipeSnapshot(recipe,sourceFood).baseKcal,portions=budget===null?1:[.75,1,1.25,1.5,1.75,2].reduce((best,p)=>Math.abs(kcal*p-budget)<Math.abs(kcal*best-budget)?p:best,.75);
              return {recipe,portions,error:budget===null?0:Math.abs(kcal*portions-budget)};
            });
            if(budget!==null) {
              const fresh=options.filter(o=>!history.has(o.recipe.id)&&o.error<=budget*.15);if(fresh.length)options=fresh;
              options.sort((a,b)=>a.error-b.error);options=options.filter(o=>o.error<=options[0].error+25).slice(0,3);
            } else {
              options.sort((a,b)=>(history.get(a.recipe.id)||"").localeCompare(history.get(b.recipe.id)||"")||(usage.get(a.recipe.id)||0)-(usage.get(b.recipe.id)||0));options=options.slice(0,3);
            }
            const chosen=options[Math.floor(rng()*options.length)];day.planEntries.push(makeEntry(chosen.recipe,date,meal,chosen.portions,"generated",sourceFood));
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


  // Step 3. Two-pass whitelist validation: structural descriptors, then relations.
  const str=(maxLength,minLength=0)=>({type:"string",maxLength,minLength});
  const num=(min,max,step)=>({type:"number",min,max,step});
  const en=values=>({type:"string",enum:values});
  const bool={type:"boolean"},dateType={type:"localDate"},stamp={type:"isoTimestamp"};
  const nullable=s=>({...s,nullable:true}),optional=s=>({...s,optional:true});
  const arr=(items,max=10000)=>({type:"array",items,maxLength:max});
  const obj=properties=>({type:"object",properties});
  const idType={...str(120,1),pattern:/^(?!(?:__proto__|prototype|constructor)$)[A-Za-z0-9_-]+$/};
  const dict=(values,keyType)=>({type:"dictionary",values,keyType,maxLength:10000});
  const ingredientLine=obj({ingredientId:idType,quantity:num(.000001,100000)});
  const customIngredientSchema=obj({id:idType,name:str(60,1),group:str(60,1),unit:en(["g","ml","pcs"]),kcalPer100:nullable(num(0,1000)),kcalPerUnit:nullable(num(0,1000)),archived:optional(bool)});
  const customRecipeSchema=obj({id:idType,name:str(80,1),mealTypes:arr(en(["breakfast","lunch","dinner","snack"]),4),prepMinutes:num(0,240,1),sourceType:en(["homemade","ready"]),ingredients:arr(ingredientLine,40),calorieMode:en(["ingredients","manual"]),manualKcal:nullable(num(0,3000)),steps:arr(str(1000,1),10),note:str(1000),suitableForAuto:bool,opaquePackaged:optional(bool)});
  const SNAPSHOT_SCHEMA=obj({name:str(80,1),sourceType:en(["homemade","ready"]),baseKcal:num(0,Number.MAX_SAFE_INTEGER),ingredients:arr(obj({ingredientId:idType,name:str(60,1),group:str(60,1),unit:en(["g","ml","pcs"]),quantity:num(.000001,100000),kcalRate:num(0,1000)}),40),steps:arr(str(1000,1),10),incompleteIngredients:bool,opaquePackaged:optional(bool),calorieMode:optional(en(["ingredients","manual"]))});
  const drinkSchema=nullable(obj({templateId:en(Object.keys(DRINKS)),volumeMl:num(50,1000,10),milkMl:num(0,500,1),sugarG:num(0,50,1)}));
  const planSchema=obj({id:idType,date:dateType,mealType:en(Object.keys(MEALS)),recipeId:nullable(idType),snapshot:SNAPSHOT_SCHEMA,portions:num(.25,4,.25),drinkConfig:drinkSchema,locked:bool,origin:en(["manual","generated","copied"]),createdAt:stamp});
  const actualSchema=obj({id:idType,date:dateType,mealType:en(Object.keys(MEALS)),time:nullable({...str(5),pattern:/^([01]\d|2[0-3]):[0-5]\d$/}),sourcePlanEntryId:nullable(idType),snapshot:SNAPSHOT_SCHEMA,portions:num(.25,4,.25),drinkConfig:drinkSchema,totalKcalRaw:num(0,Number.MAX_SAFE_INTEGER),note:str(1000),createdAt:stamp});
  const STATE_SCHEMA=obj({
    schemaVersion:{type:"number",enum:[1]},updatedAt:stamp,
    profile:obj({completed:bool,age:nullable(num(18,100,1)),heightCm:nullable(num(120,230,.1)),baselineWeightKg:nullable(num(30,300,.1)),goalWeightKg:nullable(num(30,300,.1)),formulaSex:en(["female","male","none"]),activityFactor:nullable({type:"number",enum:[1.2,1.375,1.55,1.725]}),pregnancyStatus:en(["no","yes","unknown"]),goalMode:en(["calculated","manual","none"]),lossPreference:{type:"number",enum:[0,.25,.5]},dailyKcalGoal:nullable(num(1000,5000,1)),manualGoalConfirmed:bool}),
    settings:obj({maxPrepMinutes:{type:"number",enum:[15,20,30]},allowReadyMeals:bool,allowRepeats:bool,autoSnack:bool,tipsEnabled:bool,animationsEnabled:bool,excludedIngredientIds:arr(idType),favoriteRecipeIds:arr(idType)}),
    customIngredients:arr(customIngredientSchema),customRecipes:arr(customRecipeSchema),
    pantry:dict(bool,idType),days:dict(obj({date:dateType,goalKcal:nullable(num(1000,5000,1)),planEntries:arr(planSchema,203),actualEntries:arr(actualSchema,Infinity)}),dateType),
    shoppingMarks:dict(obj({ingredientId:idType,unit:en(["g","ml","pcs"]),checked:bool,requiredQuantity:num(.000001,100000000)}),str(200,1)),
    weightLog:arr(obj({id:idType,date:dateType,weightKg:num(30,300,.1),note:str(300)})),
    lastGeneration:nullable(obj({weekStart:dateType,seed:num(0,4294967295,1),algorithmVersion:{type:"number",enum:[1]}}))
  });
  function checkStructure(value,schema,path="state") {
    const errors=[],bad=(p,message)=>{if(errors.length<30)errors.push(p+": "+message);};
    function safe(v,p,depth=0){
      if(depth>30){bad(p,"слишком глубокая структура");return;}
      if(v&&typeof v==="object")for(const k of Object.keys(v)){
        if(["__proto__","prototype","constructor"].includes(k))bad(p+"."+k,"небезопасный ключ");
        else safe(v[k],p+"."+k,depth+1);
      }
    }
    safe(value,path);if(errors.length)return {errors,value:null};
    function walk(v,s,p){
      if(v===undefined&&s.optional)return undefined;
      if(v===null&&s.nullable)return null;
      if(s.enum&&!s.enum.includes(v)){bad(p,"недопустимое значение");return;}
      if(s.type==="object"||s.type==="dictionary"){
        if(!isRecord(v)){bad(p,"ожидается объект");return;}
        const result={};
        if(s.type==="object")for(const [k,field]of Object.entries(s.properties)){
          const parsed=walk(v[k],field,p+"."+k);if(parsed!==undefined)result[k]=parsed;
        }else{
          if(Object.keys(v).length>s.maxLength)bad(p,"слишком много записей");
          for(const k of Object.keys(v)){walk(k,s.keyType,p+".ключ");result[k]=walk(v[k],s.values,p+"."+k);}
        }return result;
      }
      if(s.type==="array"){
        if(!Array.isArray(v)){bad(p,"ожидается список");return;}
        if(v.length>s.maxLength){bad(p,"слишком много записей");return [];}
        return v.map((x,i)=>walk(x,s.items,p+"["+i+"]"));
      }
      if(s.type==="boolean"&&typeof v!=="boolean")bad(p,"ожидается да/нет");
      else if(s.type==="string"){
        if(typeof v!=="string"||v.length>(s.maxLength??Infinity)||v.trim().length<(s.minLength??0)||s.pattern&&!s.pattern.test(v))bad(p,"некорректный текст");
      }else if(s.type==="number"){
        if(typeof v!=="number"||!Number.isFinite(v)||v<(s.min??-Infinity)||v>(s.max??Infinity)||s.step&&Math.abs(v/s.step-Math.round(v/s.step))>1e-7)bad(p,"число вне диапазона или неверный шаг");
      }else if(s.type==="localDate"&&!validDate(v))bad(p,"некорректная календарная дата");
      else if(s.type==="isoTimestamp"&&(typeof v!=="string"||!/^\d{4}-\d\d-\d\dT([01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d{1,3})?(?:Z|[+-]\d\d:\d\d)$/.test(v)||!validDate(v.slice(0,10))||!Number.isFinite(Date.parse(v))))bad(p,"некорректная дата/время");
      return v;
    }
    const cleaned=walk(value,schema,path);return {value:cleaned,errors};
  }
  function validateRelations(s) {
    const errors=validateProfile(s.profile),ids=new Set(),food=new Map([...FOOD,...s.customIngredients].map(i=>[i.id,i])),recipes=new Map([...RECIPES,...s.customRecipes].map(r=>[r.id,r]));
    const fail=(path,msg)=>{if(errors.length<30)errors.push(path+": "+msg);};
    const unique=(id,path,prefix)=>{if(!id.startsWith(prefix)||ids.has(id))fail(path,"неверный или повторный ID");ids.add(id);};
    s.customIngredients.forEach((i,n)=>{
      unique(i.id,"customIngredients["+n+"].id","ci_");
      if(i.unit==="pcs"?i.kcalPerUnit===null||i.kcalPer100!==null:i.kcalPer100===null||i.kcalPerUnit!==null)fail("customIngredients["+n+"]","неверная калорийность для единицы");
    });
    s.customRecipes.forEach((r,n)=>{
      const p="customRecipes["+n+"]";unique(r.id,p+".id","cr_");
      if(!r.mealTypes.length||new Set(r.mealTypes).size!==r.mealTypes.length||!r.steps.length)fail(p,"приёмы пищи и шаги обязательны");
      r.ingredients.forEach(i=>{if(!food.has(i.ingredientId))fail(p+".ingredients","неизвестный ингредиент");});
      if(r.calorieMode==="manual"?(r.manualKcal===null):(!r.ingredients.length||r.manualKcal!==null))fail(p,"неверный источник калорий");
      const kcal=r.calorieMode==="manual"?r.manualKcal:r.ingredients.reduce((v,i)=>{const f=food.get(i.ingredientId);return v+(f?i.quantity*(f.unit==="pcs"?f.kcalPerUnit:f.kcalPer100/100):0);},0);
      if(!Number.isFinite(kcal)||r.suitableForAuto&&(!r.ingredients.length||r.opaquePackaged||r.prepMinutes>30||kcal<=0))fail(p,"блюдо не подходит для автоподбора");
    });
    for(const [key,list,known]of [["excludedIngredientIds",s.settings.excludedIngredientIds,food],["favoriteRecipeIds",s.settings.favoriteRecipeIds,recipes]]){
      if(new Set(list).size!==list.length||list.some(id=>!known.has(id)))fail("settings."+key,"неизвестные или повторные ссылки");
    }
    function snapCheck(e,p){
      const snap=e.snapshot;
      if(snap.calorieMode==="manual"&&snap.baseKcal>3000)fail(p+".snapshot.baseKcal","ручные калории должны быть от 0 до 3000");
      if(e.mealType!=="drink"&&snap.incompleteIngredients!==(snap.ingredients.length===0))fail(p+".snapshot","неверная отметка состава");
      const ingredientIds=new Set();
      snap.ingredients.forEach(i=>{
        if(ingredientIds.has(i.ingredientId))fail(p+".snapshot.ingredients","повторный ингредиент");
        ingredientIds.add(i.ingredientId);
        if(food.has(i.ingredientId)&&food.get(i.ingredientId).unit!==i.unit)fail(p+".snapshot.ingredients","единица не совпадает со справочником");
      });
      if((snap.calorieMode||"ingredients")==="ingredients"&&Math.abs(snap.baseKcal-snap.ingredients.reduce((n,i)=>n+i.quantity*i.kcalRate,0))>1e-7)fail(p+".snapshot.baseKcal","не совпадает с составом");
      if(e.drinkConfig){
        const c=e.drinkConfig;if(e.mealType!=="drink"||e.portions!==1||c.milkMl>c.volumeMl||c.templateId==="water"&&(c.milkMl||c.sugarG))fail(p+".drinkConfig","неверный напиток");
        const expected=drinkSnapshot(c);
        if(Math.abs(expected.baseKcal-snap.baseKcal)>1e-7||(expected.ingredients.length!==snap.ingredients.length||expected.ingredients.some(i=>{const saved=snap.ingredients.find(x=>x.ingredientId===i.ingredientId);return !saved||["name","group","unit","quantity","kcalRate"].some(k=>saved[k]!==i[k]);})))fail(p+".snapshot","напиток не соответствует составу");
      }else if(e.mealType==="drink")fail(p+".drinkConfig","нет параметров напитка");
    }
    Object.entries(s.days).forEach(([date,d])=>{
      const p="days."+date;if(d.date!==date)fail(p+".date","не совпадает с ключом");
      const counts={},plan=new Map();
      d.planEntries.forEach((e,n)=>{
        const path=p+".planEntries["+n+"]";unique(e.id,path+".id","pe_");plan.set(e.id,e);
        counts[e.mealType]=(counts[e.mealType]||0)+1;
        if(e.date!==date||MAIN.includes(e.mealType)&&counts[e.mealType]>1||!MAIN.includes(e.mealType)&&(counts[e.mealType]>100||e.locked))fail(path,"неверная дата или число слотов");
        if(e.mealType==="drink"?e.recipeId!==null:!(typeof e.recipeId==="string"&&(recipes.has(e.recipeId)||e.recipeId.startsWith("cr_"))))fail(path+".recipeId","неверная ссылка рецепта");

        snapCheck(e,path);
      });
      const links=new Set(),actualCounts={};
      d.actualEntries.forEach((e,n)=>{
        const path=p+".actualEntries["+n+"]";unique(e.id,path+".id","ae_");
        actualCounts[e.mealType]=(actualCounts[e.mealType]||0)+1;
        if(e.date!==date||date>todayDate()||!MAIN.includes(e.mealType)&&actualCounts[e.mealType]>100)fail(path+".date","неверная/будущая дата или слишком много записей");
        if(e.sourcePlanEntryId!==null){
          const source=plan.get(e.sourcePlanEntryId);
          if(!source||links.has(e.sourcePlanEntryId)||source.mealType!==e.mealType)fail(path+".sourcePlanEntryId","повреждённая или повторная связь");
          links.add(e.sourcePlanEntryId);
        }
        snapCheck(e,path);
        if(e.sourcePlanEntryId===null&&e.snapshot.calorieMode==="manual"&&!e.snapshot.ingredients.length&&!e.snapshot.steps.length&&e.portions!==1)fail(path+".portions","свободная запись хранит калории всего съеденного, порция должна быть 1");
        if(Math.abs(e.totalKcalRaw-e.snapshot.baseKcal*e.portions)>1e-7)fail(path+".totalKcalRaw","сумма не соответствует снимку и порции");
      });
    });
    const weights=new Set();s.weightLog.forEach((w,n)=>{
      unique(w.id,"weightLog["+n+"].id","wl_");
      if(w.date>todayDate()||weights.has(w.date))fail("weightLog["+n+"].date","будущая или повторная дата");weights.add(w.date);
    });
    const historical=new Map();Object.values(s.days).forEach(d=>d.planEntries.forEach(e=>e.snapshot.ingredients.forEach(i=>historical.set(i.ingredientId,i))));
    for(const id of Object.keys(s.pantry))if(!food.has(id)&&!historical.has(id))fail("pantry."+id,"неизвестный продукт");
    for(const [key,m]of Object.entries(s.shoppingMarks)){
      const [scope,start,end,id,...rest]=key.split(":");
      if(rest.length||!["week","tomorrow"].includes(scope)||!validDate(start)||!validDate(end)||start>end||scope==="tomorrow"&&start!==end||scope==="week"&&addCalendarDays(start,6)<end||m.ingredientId!==id||!(food.has(id)||historical.has(id))||(food.get(id)||historical.get(id))?.unit!==m.unit)fail("shoppingMarks."+key,"неверный период или продукт");
    }
    if(s.lastGeneration&&mondayOf(s.lastGeneration.weekStart)!==s.lastGeneration.weekStart)fail("lastGeneration.weekStart","неделя должна начинаться с понедельника");
    return errors;
  }
  function detachPlanLinks(day,ids) {day.actualEntries.forEach(a=>{if(ids.includes(a.sourcePlanEntryId))a.sourcePlanEntryId=null;});}
  function putActual(s,date,entry) {
    const next=clone(s),day=ensureDay(next,date);
    if(date>todayDate())throw Error("Факт нельзя записать на будущую дату.");
    const index=day.actualEntries.findIndex(a=>a.id===entry.id||entry.sourcePlanEntryId&&a.sourcePlanEntryId===entry.sourcePlanEntryId);
    if(index>=0)day.actualEntries[index]=clone(entry);else day.actualEntries.push(clone(entry));
    const errors=validateState(next);if(errors.length)throw Error(errors[0]);return next;
  }
  function archivePreview(s) {
    const cutoff=addCalendarDays(todayDate(),-90),dates=Object.keys(s.days).filter(d=>d<cutoff).sort();
    return {cutoff,dates,planCount:dates.reduce((n,d)=>n+s.days[d].planEntries.length,0),actualCount:dates.reduce((n,d)=>n+s.days[d].actualEntries.length,0)};
  }
  function trimArchive(s) {
    const next=clone(s),preview=archivePreview(s);
    preview.dates.forEach(d=>delete next.days[d]);
    for(const key of Object.keys(next.shoppingMarks))if(key.split(":")[2]<preview.cutoff)delete next.shoppingMarks[key];
    if(next.lastGeneration&&addCalendarDays(next.lastGeneration.weekStart,6)<preview.cutoff)next.lastGeneration=null;
    return next;
  }

  const actualTotal=day=>(day?.actualEntries||[]).reduce((n,e)=>n+e.totalKcalRaw,0);
  function removeActual(entry) {
    confirmAction("Удалить съеденное?",entry.snapshot.name+". План останется.",()=>{
      const next=clone(state);next.days[entry.date].actualEntries=next.days[entry.date].actualEntries.filter(a=>a.id!==entry.id);commit(next);
    });
  }
  function openJournal(date) {
    const day=state.days[date]||{actualEntries:[]},dialog=modal("Журнал факта · "+prettyDate(date));
    dialog.append(node("p","Фактически: "+format(actualTotal(day))+" ккал","notice"));
    const entries=[...day.actualEntries].sort((a,b)=>(a.time||"99:99").localeCompare(b.time||"99:99")||Date.parse(a.createdAt)-Date.parse(b.createdAt));
    if(!entries.length)dialog.append(node("p","Пока нет записей съеденного. План не считается фактом."));
    entries.forEach(entry=>{
      const card=node("section",undefined,"card journal-entry");card.append(node("h3",entry.snapshot.name),node("p",MEALS[entry.mealType]+" · "+(entry.time||"Без времени")+" · "+format(entry.totalKcalRaw)+" ккал"));
      if(entry.note)card.append(node("p",entry.note,"subtle"));
      card.append(actionButton("Изменить",()=>editActual(date,null,entry)),actionButton("Удалить",()=>removeActual(entry)));dialog.append(card);
    });
    dialog.append(actionButton("Добавить факт",()=>editActual(date),false));
  }
  function editActual(date,plan=null,existing=null) {
    if(date>todayDate()){announce("Факт можно записать за сегодня или прошлое.");return;}
    existing=existing||state.days[date]?.actualEntries.find(a=>plan?.id&&a.sourcePlanEntryId===plan.id)||null;
    const base=existing||plan,fixedLink=existing?.sourcePlanEntryId||plan?.id||null;
    const dialog=modal(existing?"Изменить факт":"Записать факт",true),form=node("form");
    const dayInput=inputField(form,"Дата съеденного","date",date);dayInput.max=todayDate();dayInput.disabled=!!fixedLink;
    const meal=selectField(form,"Приём пищи",MEALS,base?.mealType||"snack");meal.disabled=!!fixedLink;
    const time=inputField(form,"Время · необязательно","time",existing?.time||"");
    const fresh=!base?.snapshot;
    const mode=fresh?selectField(form,"Источник",{free:"Вне плана — свободная запись",recipe:"Из каталога",plan:"Съедено по плану"},"free"):null;
    const planSelect=fresh?selectField(form,"Блюдо или напиток из плана",{},""):null;
    const controls=node("div");form.append(controls);
    const note=inputField(form,"Заметка и описание порции · необязательно","text",existing?.note||"");note.maxLength=1000;
    const info=node("p",undefined,"notice");form.append(info);
    let chosenPlan=null,chosenFact=null,snapshot=null,portion=null,recipeSelect=null,name=null,kcal=null,template=null,volume=null,milk=null,sugar=null;
    function refreshPlans(){
      if(!planSelect)return;
      const old=planSelect.value;planSelect.replaceChildren();
      const prompt=node("option","Выберите запись из плана");prompt.value="";planSelect.append(prompt);
      const entries=state.days[dayInput.value]?.planEntries||[];
      entries.filter(e=>e.mealType===meal.value).forEach(e=>{
        const fact=state.days[dayInput.value].actualEntries.find(a=>a.sourcePlanEntryId===e.id);
        const option=node("option",e.snapshot.name+(fact?" · факт уже записан":""));option.value=e.id;planSelect.append(option);
      });
      if([...planSelect.options].some(o=>o.value===old))planSelect.value=old;
      else planSelect.value="";
    }
    function draw(){
      controls.replaceChildren();controls.dataset.drink=String(meal.value==="drink");snapshot=null;portion=recipeSelect=name=kcal=template=volume=milk=sugar=null;
      const fromPlan=mode?.value==="plan";
      if(planSelect)planSelect.parentElement.hidden=!fromPlan;
      chosenPlan=fromPlan?(state.days[dayInput.value]?.planEntries||[]).find(e=>e.id===planSelect.value)||null:null;
      chosenFact=chosenPlan?state.days[dayInput.value].actualEntries.find(a=>a.sourcePlanEntryId===chosenPlan.id)||null:null;
      const current=chosenFact||chosenPlan||base;
      if(fromPlan&&!chosenPlan){controls.append(node("p","Выберите приём пищи и запись из плана. Порция из плана будет подставлена автоматически.","subtle"));update();return;}
      snapshot=current?.snapshot&&(current.mealType==="drink")===(meal.value==="drink")?clone(current.snapshot):null;
      if(meal.value==="drink"){
        const config=current?.drinkConfig||{templateId:"coffee",volumeMl:200,milkMl:0,sugarG:0};
        template=selectField(controls,"Напиток",Object.fromEntries(Object.entries(DRINKS).map(([id,c])=>[id,c.name])),config.templateId);
        volume=inputField(controls,"Общий объём, мл · 50–1000, шаг 10","decimal",config.volumeMl);
        milk=inputField(controls,"Молоко, мл · 0–500","decimal",config.milkMl);sugar=inputField(controls,"Сахар, г · 0–50","decimal",config.sugarG);
        const change=()=>{if(template.value==="water"){milk.value=0;sugar.value=0;}milk.disabled=sugar.disabled=template.value==="water";};
        template.addEventListener("change",()=>{milk.value=DRINKS[template.value].milk;sugar.value=0;change();update();});change();
        let previousVolume=config.volumeMl;
        controls.append(node("p","Изменение объёма само не меняет добавки.","subtle"),actionButton("Пересчитать добавки пропорционально",()=>{
          if(template.value==="water"){milk.value=0;sugar.value=0;update();return;}
          const v=parseNumber(volume.value,50,1000,10),m=parseNumber(milk.value,0,500,1),s=parseNumber(sugar.value,0,50,1);
          if(v.error||m.error||s.error){errorIn(form,"Сначала введите корректные значения.");return;}
          milk.value=Math.round(m.value*v.value/previousVolume);sugar.value=Math.round(s.value*v.value/previousVolume);previousVolume=v.value;foodDirty=true;update();
        }));
      }else if(snapshot){
        controls.append(node("p",snapshot.name));portion=inputField(controls,"Фактических порций · 0,25–4, шаг 0,25","decimal",current.portions);
        if(snapshot.incompleteIngredients&&snapshot.calorieMode==="manual"&&!fixedLink&&!chosenPlan&&!snapshot.steps.length){
          name=inputField(controls,"Название","text",snapshot.name);name.maxLength=80;kcal=inputField(controls,"Калории всего съеденного · 0–3000","decimal",current.totalKcalRaw??snapshot.baseKcal);portion.disabled=true;portion.value=1;
        }
      }else if(mode?.value==="recipe"){
        recipeSelect=selectField(controls,"Блюдо",Object.fromEntries(allRecipes().map(r=>[r.id,r.name])),allRecipes()[0]?.id);
        portion=inputField(controls,"Фактических порций · для блюда из каталога","decimal",1);
      }else{
        name=inputField(controls,"Название","text","");name.maxLength=80;
        kcal=inputField(controls,"Калории всего съеденного · 0–3000","decimal","");
      }
      if(chosenFact)controls.append(node("p","Факт уже записан. Сохранение изменит эту запись, без дубликата.","subtle"));
      update();
    }
    function read(){
      if(mode?.value==="plan"&&!chosenPlan)return {error:"Выберите запись из плана."};
      let resultSnapshot=snapshot,portions=1,drinkConfig=null;
      if(meal.value==="drink"){
        const v=parseNumber(volume.value,50,1000,10),m=parseNumber(milk.value,0,500,1),s=parseNumber(sugar.value,0,50,1);
        if(v.error||m.error||s.error||m.value>v.value)return {error:v.error||m.error||s.error||"Молока больше общего объёма."};
        drinkConfig={templateId:template.value,volumeMl:v.value,milkMl:m.value,sugarG:s.value};resultSnapshot=drinkSnapshot(drinkConfig);
      }else if(kcal){
        const k=parseNumber(kcal.value,0,3000,.000001);if(k.error)return {error:k.error};
        const title=name.value.trim();if(!title)return {error:"Укажите название."};
        resultSnapshot={name:title,sourceType:"homemade",baseKcal:k.value,ingredients:[],steps:[],incompleteIngredients:true,opaquePackaged:false,calorieMode:"manual"};
      }else{
        if(recipeSelect)resultSnapshot=recipeSnapshot(recipeById(recipeSelect.value));
        const q=parseNumber(portion.value,.25,4,.25);if(q.error)return {error:q.error};portions=q.value;
      }
      return {snapshot:resultSnapshot,portions,drinkConfig,totalKcalRaw:resultSnapshot.baseKcal*portions};
    }
    function update(){try{const r=read();info.textContent=r.error||"Факт: "+format(r.totalKcalRaw)+" ккал. План и покупки не изменятся.";}catch{info.textContent="Выберите блюдо.";}}
    function changeMeal(){
      if(mode){const option=mode.querySelector('option[value="recipe"]');option.disabled=meal.value==="drink";if(option.disabled&&mode.value==="recipe")mode.value="free";}
      refreshPlans();if(mode?.value==="plan"||controls.dataset.drink!==String(meal.value==="drink"))draw();else update();
    }
    meal.addEventListener("change",changeMeal);dayInput.addEventListener("change",()=>{refreshPlans();if(mode?.value==="plan")draw();else update();});
    mode?.addEventListener("change",draw);
    planSelect?.addEventListener("change",()=>{
      const fact=state.days[dayInput.value]?.actualEntries.find(a=>a.sourcePlanEntryId===planSelect.value);
      time.value=fact?.time||"";note.value=fact?.note||"";draw();
    });
    form.addEventListener("input",update);form.addEventListener("change",update);refreshPlans();draw();
    const save=node("button","Сохранить факт","button primary");save.type="submit";form.append(save);dialog.append(form);
    form.addEventListener("submit",event=>{
      event.preventDefault();const result=read();
      if(result.error||!validDate(dayInput.value)||dayInput.value>todayDate()){errorIn(form,result.error||"Дата должна быть сегодня или в прошлом.");return;}
      const prior=existing||chosenFact,linkedId=fixedLink||chosenPlan?.id||null;
      const entry={id:prior?.id||uid("ae_"),date:dayInput.value,mealType:meal.value,time:time.value||null,sourcePlanEntryId:linkedId,snapshot:result.snapshot,portions:result.portions,drinkConfig:result.drinkConfig,totalKcalRaw:result.totalKcalRaw,note:note.value.trim(),createdAt:prior?.createdAt||new Date().toISOString()};
      try{
        let next=clone(state);if(existing&&existing.date!==entry.date)next.days[existing.date].actualEntries=next.days[existing.date].actualEntries.filter(a=>a.id!==existing.id);
        next=putActual(next,entry.date,entry);if(commit(next)){closeFood(true);announce("Факт записан.");}
      }catch(error){errorIn(form,error.message);}
    });
  }
  let weightPeriod="all",weightChartObserver=null;
  function weightPoints(records,goal=null,width=360,height=240) {
    const plot={left:44,right:width-18,top:32,bottom:height-40,width,height};
    const sorted=[...records].sort((a,b)=>a.date.localeCompare(b.date));if(!sorted.length)return {points:[],min:0,max:0,plot};
    const values=sorted.map(r=>r.weightKg);if(goal!==null)values.push(goal);
    const low=Math.min(...values),high=Math.max(...values),pad=Math.max(.5,(high-low)*.15),min=low-pad,max=high+pad;
    const calendar=d=>{const [y,m,day]=d.split("-").map(Number);return Date.UTC(y,m-1,day);},first=calendar(sorted[0].date),last=calendar(sorted.at(-1).date);
    const y=value=>plot.bottom-(value-min)/(max-min)*(plot.bottom-plot.top);
    return {min,max,plot,goalY:goal===null?null:y(goal),points:sorted.map(r=>({...r,x:first===last?(plot.left+plot.right)/2:plot.left+(calendar(r.date)-first)/(last-first)*(plot.right-plot.left),y:y(r.weightKg)}))};
  }
  function drawWeightChart(chart,goal) {
    const {plot,points,min,max}=chart,svg=svgNode("svg",{viewBox:"0 0 "+plot.width+" "+plot.height,role:"img","aria-label":"Изменения веса. Точные значения в таблице ниже."});
    const short=date=>{const [y,m,d]=date.split("-").map(Number);return new Date(y,m-1,d,12).toLocaleDateString("ru-RU",{day:"numeric",month:"short"});};
    for(let i=0;i<4;i++){
      const value=min+(max-min)*i/3,y=plot.bottom-(plot.bottom-plot.top)*i/3;
      svg.append(svgNode("line",{x1:plot.left,x2:plot.right,y1:y,y2:y,class:"weight-grid"}),svgNode("text",{x:plot.left-8,y:y+4,"text-anchor":"end",class:"weight-axis"},format(value,1)));
    }
    const coords=points.map(p=>p.x+","+p.y).join(" ");
    if(points.length>1)svg.append(svgNode("polygon",{points:points[0].x+","+plot.bottom+" "+coords+" "+points.at(-1).x+","+plot.bottom,class:"weight-area"}));
    if(goal!==null){
      svg.append(svgNode("line",{x1:plot.left,x2:plot.right,y1:chart.goalY,y2:chart.goalY,class:"weight-goal"}),svgNode("text",{x:plot.left+6,y:chart.goalY-8,class:"weight-goal-label"},"Цель · "+format(goal,1)+" кг"));
    }
    svg.append(svgNode("polyline",{points:coords,class:"weight-line"}));
    points.forEach((p,i)=>{const circle=svgNode("circle",{cx:p.x,cy:p.y,r:i===points.length-1?5:3.5,class:i===points.length-1?"weight-point weight-point-last":"weight-point"});circle.append(svgNode("title",{},short(p.date)+" · "+format(p.weightKg,1)+" кг"));svg.append(circle);});
    const occupied=goal===null?[]:[{x:plot.left+6,y:chart.goalY-21,w:110,h:18}];
    const candidates=[points.at(-1),...(points.length>1?[points[0]]:[]),...points.slice(1,-1)];
    let labels=0;const limit=Math.max(3,Math.floor((plot.right-plot.left)/70));
    for(const p of candidates){
      if(labels>=limit)break;
      const text=format(p.weightKg,1)+" кг",w=text.length*7.5;
      const x=Math.max(plot.left+w/2,Math.min(plot.right-w/2,p.x));
      for(const y of [p.y-14,p.y+24]){
        const box={x:x-w/2,y:y-13,w,h:18};
        if(box.y<5||box.y+box.h>plot.bottom+8||occupied.some(b=>box.x<b.x+b.w+6&&box.x+box.w+6>b.x&&box.y<b.y+b.h+3&&box.y+box.h+3>b.y))continue;
        svg.append(svgNode("text",{x,y,"text-anchor":"middle",class:"weight-value"},text));occupied.push(box);labels++;break;
      }
    }
    const dates=[];
    for(const p of candidates){
      const text=short(p.date),w=text.length*7;
      const x=Math.max(plot.left+w/2,Math.min(plot.right-w/2,p.x));
      if(dates.some(b=>Math.abs(b.x-x)<(b.w+w)/2+12))continue;
      svg.append(svgNode("text",{x,y:plot.bottom+28,"text-anchor":"middle",class:"weight-date"},text));dates.push({x,w});
      if(dates.length>=Math.max(2,Math.floor((plot.right-plot.left)/90)))break;
    }
    return svg;
  }
  function svgNode(tag,attrs={},text) {
    const el=document.createElementNS("http://www.w3.org/2000/svg",tag);Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v)));if(text!==undefined)el.textContent=text;return el;
  }
  function renderWeight(parent) {
    parent.replaceChildren();$("sectionEyebrow").textContent="Спокойно наблюдаем";$("sectionTitle").textContent="Ваш вес";$("weekBar").hidden=true;
    const sorted=[...state.weightLog].sort((a,b)=>a.date.localeCompare(b.date)),latest=sorted.at(-1),summary=node("section",undefined,"card");
    if(latest)summary.append(summaryList([["Последнее измерение",format(latest.weightKg,1)+" кг · "+prettyDate(latest.date)],["От первого измерения",format(latest.weightKg-sorted[0].weightKg,1)+" кг"],["Желаемый вес",state.profile.goalWeightKg===null?"Не указан":format(state.profile.goalWeightKg,1)+" кг"]]));
    else summary.append(node("p","Пока нет измерений. Добавьте первое, когда удобно."));
    summary.append(actionButton("Добавить вес",()=>editWeight(),false));parent.append(summary);
    const tabs=node("div",undefined,"button-row weight-tabs");for(const [v,label]of [["30","30 дней"],["90","90 дней"],["all","Всё"]]){
      const b=actionButton(label,()=>{weightPeriod=v;render();},weightPeriod!==v);b.setAttribute("aria-pressed",String(weightPeriod===v));tabs.append(b);
    }parent.append(tabs);
    const records=sorted.filter(r=>weightPeriod==="all"||r.date>=addCalendarDays(todayDate(),1-Number(weightPeriod))),chart=weightPoints(records,state.profile.goalWeightKg,Math.max(280,Math.min(800,parent.clientWidth-40))),panel=node("section",undefined,"card weight-chart");
    if(records.length){
      const goal=state.profile.goalWeightKg;
      if(goal!==null)panel.append(node("p","Желаемый вес — "+format(goal,1)+" кг","subtle"));
      panel.append(drawWeightChart(chart,goal));
      if(records.length===1)panel.append(node("p","Добавь ещё измерение для сравнения."));
    }else panel.append(node("p","За этот период измерений нет."));
    const table=node("table",undefined,"weight-table"),caption=node("caption","Измерения веса"),thead=node("thead"),header=node("tr");["Дата","Вес, кг","Действия"].forEach(t=>header.append(node("th",t)));thead.append(header);table.append(caption,thead);
    const tbody=node("tbody");[...records].reverse().forEach(r=>{const row=node("tr"),date=node("td",r.date),weight=node("td",format(r.weightKg,1)),actions=node("td");actions.append(actionButton("Изменить",()=>editWeight(r)),actionButton("Удалить",()=>confirmAction("Удалить измерение?",prettyDate(r.date),()=>{const next=clone(state);next.weightLog=next.weightLog.filter(w=>w.id!==r.id);commit(next);})));row.append(date,weight,actions);tbody.append(row);});
    table.append(tbody);panel.append(table);parent.append(panel);
    if(records.length){
      let chartWidth=chart.plot.width;
      weightChartObserver=new ResizeObserver(()=>{
        const css=getComputedStyle(panel),width=Math.max(280,Math.min(800,panel.clientWidth-parseFloat(css.paddingLeft)-parseFloat(css.paddingRight)));
        if(Math.abs(width-chartWidth)<1)return;chartWidth=width;
        panel.querySelector("svg")?.replaceWith(drawWeightChart(weightPoints(records,state.profile.goalWeightKg,width),state.profile.goalWeightKg));
      });
      weightChartObserver.observe(panel);
    }
  }
  function editWeight(existing=null) {
    const dialog=modal(existing?"Изменить вес":"Добавить вес",true),form=node("form"),date=inputField(form,"Дата измерения","date",existing?.date||todayDate());date.max=todayDate();
    const weight=inputField(form,"Вес, кг · 30–300, шаг 0,1","decimal",existing?.weightKg||""),note=inputField(form,"Заметка · необязательно","text",existing?.note||"");note.maxLength=300;
    const save=node("button","Сохранить вес","button primary");save.type="submit";form.append(save);dialog.append(form);
    form.addEventListener("submit",event=>{
      event.preventDefault();const value=parseNumber(weight.value,30,300,.1);
      if(value.error||!validDate(date.value)||date.value>todayDate()){errorIn(form,value.error||"Дата должна быть сегодня или в прошлом.");return;}
      const collision=state.weightLog.find(w=>w.date===date.value&&w.id!==existing?.id),next=clone(state);
      next.weightLog=next.weightLog.filter(w=>w.id!==existing?.id&&w.date!==date.value);next.weightLog.push({id:existing?.id||collision?.id||uid("wl_"),date:date.value,weightKg:value.value,note:note.value.trim()});
      const finish=()=>{if(commit(next)){closeFood(true);announce(storageError?"Вес принят в память, но не сохранён. Скачайте текущие данные.":"Вес сохранён. Калорийный ориентир не менялся.");}};
      if(collision)confirmAction("Заменить измерение?",date.value+": "+format(collision.weightKg,1)+" → "+format(value.value,1)+" кг",finish);else finish();
    });
  }

  function textareaField(parent,label,value,maxLength) {
    const wrap=node("div",undefined,"field"),id=uid("field_"),l=node("label",label),input=node("textarea");l.htmlFor=id;input.id=id;input.value=value;input.maxLength=maxLength;input.rows=3;wrap.append(l,input);parent.append(wrap);return input;
  }
  function deleteRecipe(recipe) {
    confirmAction("Удалить своё блюдо?",recipe.name+". Запланированные и съеденные записи сохранятся.",()=>{
      const next=clone(state);next.customRecipes=next.customRecipes.filter(r=>r.id!==recipe.id);next.settings.favoriteRecipeIds=next.settings.favoriteRecipeIds.filter(id=>id!==recipe.id);commit(next);
    });
  }
  function editRecipe(original=null) {
    const isOwn=original?.id.startsWith("cr_"),recipe=original?clone(original):{name:"",mealTypes:[],prepMinutes:10,sourceType:"homemade",ingredients:[],calorieMode:"ingredients",manualKcal:null,steps:[],note:"",suitableForAuto:false,opaquePackaged:false};
    const dialog=modal(isOwn?"Изменить своё блюдо":"Создать своё блюдо",true),form=node("form");form.noValidate=true;dialog.classList.add("recipe-wizard");
    const progress=node("p",undefined,"recipe-step-title");progress.setAttribute("aria-live","polite");dialog.append(progress);
    const track=node("div",undefined,"wizard-track");track.setAttribute("aria-hidden","true");for(let i=0;i<3;i++)track.append(node("span"));dialog.append(track);
    const body=node("div",undefined,"recipe-wizard-body"),error=node("p",undefined,"notice notice-error food-error");error.hidden=true;error.setAttribute("role","alert");body.append(error);
    const pages=[0,1,2].map(()=>node("section",undefined,"recipe-step"));pages.forEach(p=>body.append(p));form.append(body);dialog.append(form);
    const name=inputField(pages[0],"Название блюда · до 80 символов","text",recipe.name);name.maxLength=80;
    const types=node("fieldset",undefined,"meal-type-options recipe-meals"),legend=node("legend","Приёмы пищи");types.append(legend);const mealInputs={};
    types.append(node("p","Выберите один или несколько","subtle"));const chips=node("div",undefined,"recipe-meal-chips");
    for(const key of [...MAIN,"snack"]){const label=checkField(MEALS[key],recipe.mealTypes.includes(key),()=>{});mealInputs[key]=label.querySelector("input");chips.append(label);}types.append(chips);pages[0].append(types);
    const basics=node("div",undefined,"recipe-basics");pages[0].append(basics);
    const minutes=inputField(basics,"Готовка, минут · 0–240","decimal",recipe.prepMinutes);
    const source=selectField(basics,"Вид блюда",{homemade:"Домашнее",ready:"Готовое покупное"},recipe.sourceType);
    const mode=selectField(pages[1],"Источник калорий",{ingredients:"Рассчитать по ингредиентам",manual:"Указать калории"},recipe.calorieMode);
    const manual=inputField(pages[1],"Калории на 1 порцию · 0–3000","decimal",recipe.manualKcal??"");
    const ingredients=clone(recipe.ingredients),ingredientArea=node("section",undefined,"recipe-ingredients"),list=node("div",undefined,"recipe-ingredient-list");
    const composition=checkField("Добавить состав для списка покупок",ingredients.length>0,()=>{update();}),compositionInput=composition.querySelector("input");pages[1].append(composition,ingredientArea);
    ingredientArea.append(node("h3","Ингредиенты на 1 порцию"),list);
    const choices=()=>({"":"Выберите…",...Object.fromEntries(allFood().filter(i=>!i.archived||ingredients.some(x=>x.ingredientId===i.id)).map(i=>[i.id,i.name+" · "+(i.unit==="g"?"г":i.unit==="ml"?"мл":"шт.")]))});
    const entryFields=node("div",undefined,"recipe-entry-fields");ingredientArea.append(entryFields);
    const selected=selectField(entryFields,"Ингредиент",choices(),"");
    const quantity=inputField(entryFields,"Количество","decimal","");
    function updateQuantityUnit(){const food=foodById(selected.value);quantity.parentElement.querySelector("label").textContent="Количество"+(food?", "+(food.unit==="g"?"г":food.unit==="ml"?"мл":"шт."):"");}
    selected.addEventListener("change",updateQuantityUnit);
    const ingredientActions=node("div",undefined,"button-row");ingredientArea.append(ingredientActions);
    function refresh(){
      list.replaceChildren();ingredients.forEach((i,n)=>{
        const food=foodById(i.ingredientId),row=node("div",undefined,"ingredient-line");
        const remove=actionButton("×",()=>{ingredients.splice(n,1);foodDirty=true;refresh();});remove.setAttribute("aria-label","Убрать "+food.name);remove.classList.add("ingredient-remove");
        row.append(node("span",food.name+" — "+format(i.quantity,3)+" "+(food.unit==="g"?"г":food.unit==="ml"?"мл":"шт.")),remove);list.append(row);
      });update();
    }
    ingredientActions.append(actionButton("Добавить ингредиент",()=>{
      const q=parseNumber(quantity.value,.000001,100000,.000001);
      if(!selected.value||q.error||ingredients.length>=40||ingredients.some(i=>i.ingredientId===selected.value)){showError(1,!selected.value?"Выберите ингредиент.":q.error||"До 40 разных ингредиентов. Этот продукт уже добавлен.",!selected.value?selected:quantity);return;}
      ingredients.push({ingredientId:selected.value,quantity:q.value});quantity.value="";selected.value="";updateQuantityUnit();error.hidden=true;foodDirty=true;refresh();
    }));
    const createProduct=actionButton("Новый продукт",openNewProduct);ingredientActions.append(createProduct);
    function openNewProduct(){
      const child=node("dialog",undefined,"recipe-product-dialog"),heading=node("div",undefined,"dialog-heading"),title=node("h2","Новый продукт");title.id=uid("title_");child.setAttribute("aria-labelledby",title.id);
      let dirty=false;
      function finish(){child.close();child.remove();createProduct.focus({preventScroll:true});}
      function cancel(){
        if(!dirty){finish();return;}
        if(child.querySelector(".discard-prompt"))return;
        const prompt=node("div",undefined,"notice discard-prompt");prompt.append(node("p","Закрыть без сохранения нового продукта?"),actionButton("Продолжить редактирование",()=>{prompt.remove();newName.focus();}),actionButton("Не сохранять",finish));child.append(prompt);prompt.querySelector("button").focus();
      }
      const close=actionButton("×",cancel);close.className="icon-button";close.setAttribute("aria-label","Закрыть новый продукт");heading.append(title,close);child.append(heading);
      const productForm=node("form");productForm.noValidate=true;child.append(productForm);
      const newName=inputField(productForm,"Название продукта · до 60 символов","text","");newName.maxLength=60;
      const group=selectField(productForm,"Отдел",Object.fromEntries([...new Set(FOOD.map(i=>i.group))].map(g=>[g,g])),"другое");
      const unit=selectField(productForm,"Единица",{g:"Граммы",ml:"Миллилитры",pcs:"Штуки"},"g");
      const rate=inputField(productForm,"Ккал на 100 г/мл или на 1 штуку · 0–1000","decimal","");
      const actions=node("div",undefined,"button-row"),save=node("button","Сохранить продукт","button primary");save.type="submit";actions.append(save,actionButton("Отмена",cancel));productForm.append(actions);
      productForm.addEventListener("input",()=>dirty=true);productForm.addEventListener("change",()=>dirty=true);
      child.addEventListener("cancel",event=>{event.preventDefault();cancel();});
      productForm.addEventListener("submit",event=>{
        event.preventDefault();const k=parseNumber(rate.value,0,1000,.000001);
        if(k.error||!newName.value.trim()){errorIn(productForm,k.error||"Укажите название продукта.");(!newName.value.trim()?newName:rate).focus();return;}
        const ingredient={id:uid("ci_"),name:newName.value.trim(),group:group.value,unit:unit.value,kcalPer100:unit.value==="pcs"?null:k.value,kcalPerUnit:unit.value==="pcs"?k.value:null,archived:false};
        const next=clone(state);next.customIngredients.push(ingredient);
        if(commit(next)){
          selected.replaceChildren();Object.entries(choices()).forEach(([value,text])=>{const option=node("option",text);option.value=value;selected.append(option);});selected.value=ingredient.id;updateQuantityUnit();
          finish();quantity.focus();announce(storageError?"Продукт принят в память, но не сохранён.":"Продукт сохранён. Укажите количество для блюда.");
        }
      });
      document.body.append(child);child.showModal();newName.focus();
    }
    const steps=textareaField(pages[2],"Приготовление · 1–10 шагов, каждый с новой строки",recipe.steps.join("\n"),10010);steps.rows=3;
    const noteArea=node("details",undefined,"recipe-note");noteArea.append(node("summary","Заметка · необязательно"));pages[2].append(noteArea);
    const note=textareaField(noteArea,"Заметка · до 1000 символов",recipe.note||"",1000);note.rows=2;noteArea.open=!!recipe.note;
    const autoLabel=checkField("Разрешить в автоматическом подборе",recipe.suitableForAuto,()=>{}),auto=autoLabel.querySelector("input");
    const opaqueLabel=checkField("Полный состав по упаковке неизвестен",!!recipe.opaquePackaged,()=>{}),opaque=opaqueLabel.querySelector("input");pages[2].append(opaqueLabel,autoLabel,node("p","Для автоматического подбора нужен полный состав и готовка до 30 минут.","subtle"));
    const info=node("p",undefined,"notice recipe-calories");pages[1].append(info);
    function update(){
      const isManual=mode.value==="manual";manual.parentElement.hidden=!isManual;composition.hidden=!isManual;
      ingredientArea.hidden=isManual&&!compositionInput.checked&&!ingredients.length;
      if(isManual&&ingredients.length)compositionInput.checked=true;
      const total=ingredients.reduce((n,i)=>{const food=foodById(i.ingredientId);return n+i.quantity*(food.unit==="pcs"?food.kcalPerUnit:food.kcalPer100/100);},0);
      const value=isManual?parseNumber(manual.value,0,3000,.000001).value:total;
      info.textContent=Number.isFinite(value)?"1 порция: "+format(value)+" ккал":"Введите калории на порцию.";
      if(isManual&&!ingredients.length)info.textContent+=" Без состава продукты для этого блюда не попадут в покупки.";
      auto.disabled=!(ingredients.length>0&&!opaque.checked&&parseNumber(minutes.value,0,240,1).value<=30&&value>0);if(auto.disabled)auto.checked=false;
    }
    let step=0;
    const footer=node("div",undefined,"recipe-wizard-actions"),back=actionButton("Назад",()=>setStep(step-1)),next=actionButton("Далее",()=>advance(),false),save=node("button","Сохранить блюдо","button primary");save.type="submit";footer.append(back,next,save);form.append(footer);
    const titles=["О блюде","Состав и калории","Рецепт и сохранение"];
    function setStep(value){
      step=value;pages.forEach((page,i)=>page.hidden=i!==step);[...track.children].forEach((part,i)=>part.classList.toggle("active",i<=step));
      progress.textContent="Шаг "+(step+1)+" из 3 · "+titles[step];back.hidden=step===0;next.hidden=step===2;save.hidden=step!==2;error.hidden=true;body.scrollTop=0;
      pages[step].querySelector("input:not(:disabled),select:not(:disabled),textarea")?.focus({preventScroll:true});
    }
    function showError(index,message,field){setStep(index);error.textContent=message;error.hidden=false;field?.focus({preventScroll:true});body.scrollTop=0;}
    function validateStep(index){
      if(index===0){
        if(!name.value.trim()){showError(0,"Укажите название блюда.",name);return false;}
        if(!Object.values(mealInputs).some(input=>input.checked)){showError(0,"Выберите хотя бы один приём пищи.",Object.values(mealInputs)[0]);return false;}
        const min=parseNumber(minutes.value,0,240,1);if(min.error){showError(0,min.error,minutes);return false;}
      }
      if(index===1){
        if(quantity.value.trim()&&!ingredientArea.hidden){showError(1,"Нажмите «Добавить ингредиент» или очистите количество.",quantity);return false;}
        if(mode.value==="manual"){const k=parseNumber(manual.value,0,3000,.000001);if(k.error){showError(1,k.error,manual);return false;}}
        else if(!ingredients.length){showError(1,"Добавьте ингредиенты или выберите «Указать калории».",selected);return false;}
      }
      if(index===2){
        const values=steps.value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
        if(!values.length||values.length>10||values.some(s=>s.length>1000)){showError(2,"Укажите от 1 до 10 шагов приготовления, до 1000 символов в каждом.",steps);return false;}
      }
      return true;
    }
    function advance(){if(validateStep(step))setStep(step+1);}
    form.addEventListener("input",update);form.addEventListener("change",update);refresh();setStep(0);
    form.addEventListener("submit",event=>{
      event.preventDefault();if(step<2){advance();return;}
      for(let i=0;i<3;i++)if(!validateStep(i))return;
      const nextRecipe={id:isOwn?recipe.id:uid("cr_"),name:name.value.trim(),mealTypes:Object.keys(mealInputs).filter(k=>mealInputs[k].checked),prepMinutes:parseNumber(minutes.value,0,240,1).value,sourceType:source.value,ingredients:clone(ingredients),calorieMode:mode.value,manualKcal:mode.value==="manual"?parseNumber(manual.value,0,3000,.000001).value:null,steps:steps.value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean),note:note.value.trim(),suitableForAuto:auto.checked,opaquePackaged:opaque.checked};
      const nextState=clone(state);nextState.customRecipes=nextState.customRecipes.filter(r=>r.id!==nextRecipe.id);nextState.customRecipes.push(nextRecipe);
      const errors=validateState(nextState);if(errors.length){showError(2,errors[0]);return;}
      if(commit(nextState)){closeFood(true);announce(storageError?"Рецепт принят в память, но не сохранён.":"Рецепт сохранён. Записи меню и съеденного не изменились.");}
    });
  }
  function manageIngredients() {
    const dialog=modal("Свои продукты");dialog.append(node("p","Скрытые продукты сохраняются в рецептах и истории. Встроенные продукты не изменяются."));
    if(!state.customIngredients.length)dialog.append(node("p","Свои продукты можно создать в форме своего блюда."));
    state.customIngredients.forEach(i=>dialog.append(checkField(i.name+" · скрыть из выбора",!!i.archived,v=>{const next=clone(state);next.customIngredients.find(x=>x.id===i.id).archived=v;commit(next);})));
  }

  let quotaShown=false;
  function strictSave(candidate) {
    const result=checkStructure(candidate,STATE_SCHEMA);const errors=result.errors.length?result.errors:validateRelations(result.value);
    if(errors.length)return {error:errors[0]};
    if(conflict)return {error:"Данные изменились в другой вкладке. Обновите страницу."};
    const next=result.value;next.updatedAt=new Date().toISOString();
    try{
      if(window.localStorage.getItem(KEY)!==lastSavedRaw){markConflict();return {error:"Данные изменились в другой вкладке. Обновите страницу."};}
      const raw=JSON.stringify(next);window.localStorage.setItem(KEY,raw);
      state=next;rememberIds(state);lastSavedRaw=raw;originalRaw=raw;storageError=null;unsaved=false;recovery=false;render();return {ok:true};
    }catch(error){return {error:"Не удалось записать данные. Текущее состояние не заменено. "+(error.name==="QuotaExceededError"?"Недостаточно места.":error.name==="SecurityError"?"Браузер запретил доступ к хранилищу.":"Повторите попытку или сохраните резервную копию.")};}
  }
  function readBackup(text) {
    let raw;try{raw=JSON.parse(text);}catch{throw Error("Файл не является корректным JSON.");}
    const envelope=obj({appId:en(["menu-without-drama"]),schemaVersion:{type:"number",enum:[1]},catalogVersion:{type:"number",enum:[1]},exportedAt:stamp,state:STATE_SCHEMA});
    const result=checkStructure(raw,envelope,"backup");
    if(result.errors.length)throw Error(result.errors[0]);
    const errors=validateRelations(result.value.state);if(errors.length)throw Error(errors[0]);return result.value;
  }
  function importDialog() {
    const dialog=modal("Импорт резервной копии"),input=inputField(dialog,"Файл JSON · до 5 МБ","file");input.accept=".json,application/json";
    const preview=node("div");dialog.append(node("p","Импорт полностью заменяет данные этого браузера. До подтверждения ничего не меняется."),preview);
    input.addEventListener("change",async()=>{
      preview.replaceChildren();const file=input.files?.[0];if(!file)return;
      if(file.size>5*1024*1024){errorIn(preview,"Файл больше 5 МБ.");return;}
      try{
        const backup=readBackup(await file.text());if(foodDialog!==dialog)return;
        preview.append(node("p","Копия: "+new Date(backup.exportedAt).toLocaleString("ru-RU")),summaryList([["Дней",Object.keys(backup.state.days).length],["Своих блюд",backup.state.customRecipes.length],["Измерений",backup.state.weightLog.length]]),node("p","Текущие данные будут заменены.","warning"),actionButton("Скачать текущую копию",emergencyExport));
        preview.append(actionButton("Заменить данные",()=>{
          const result=strictSave(backup.state);if(!result.ok){errorIn(preview,result.error);return;}
          showStart=false;selectedWeek=mondayOf(todayDate());selectedDay=todayDate();activeTab="week";closeFood(true);render();announce("Резервная копия восстановлена.");
        },false),actionButton("Отмена",()=>closeFood(true)));
      }catch(error){errorIn(preview,error.message);}
    });
  }
  function showQuotaDialog() {
    if(!storageError||storageError.name!=="QuotaExceededError")return;
    const dialog=modal("Место для данных закончилось");
    dialog.append(node("p","Последние изменения пока не сохранены. Скачайте полную копию перед очисткой."),
      actionButton("Скачать полную копию",emergencyExport,false),
      actionButton("Посмотреть очистку архива",archiveDialog),
      actionButton("Продолжить без сохранения",()=>closeFood(true)));
  }
  function archiveDialog() {
    const preview=archivePreview(state),dialog=modal("Очистка архива");
    dialog.append(node("p","Можно удалить дни строго раньше "+preview.cutoff+". Вес, профиль, свои блюда и будущие даты сохранятся."),
      summaryList([["Дней",preview.dates.length],["Плановых записей",preview.planCount],["Съеденных записей",preview.actualCount],["Диапазон",preview.dates.length?preview.dates[0]+" — "+preview.dates.at(-1):"Нет старых дней"]]),
      actionButton("Скачать полную копию",emergencyExport,false));
    const label=checkField("Резервная копия сохранена мной",false,()=>{}),check=label.querySelector("input");dialog.append(label);
    dialog.append(actionButton("Подтвердить очистку",()=>{
      if(!check.checked){errorIn(dialog,"Сначала сохраните полную копию и поставьте отметку.");return;}
      const next=trimArchive(state);confirmAction("Удалить перечисленные архивные дни?",preview.dates.length+" дней, "+preview.planCount+" плановых и "+preview.actualCount+" фактических записей. Измерения веса останутся.",()=>{
        const result=strictSave(next);if(!result.ok){const error=modal("Архив не удалён");error.append(node("p",result.error),actionButton("Скачать текущие данные",emergencyExport));return;}
        announce("Архив очищен. Вес и будущие дни сохранены.");
      });
    }));
  }
  function requestReset() {
    $("resetWord").value="";$("resetError").textContent="";openModal($("resetDialog"),$("resetWord"));
  }
  function renderSettings(parent) {
    parent.replaceChildren();$("sectionEyebrow").textContent="План подстраивается под вас";$("sectionTitle").textContent="Настройки";$("weekBar").hidden=true;
    const grid=node("div",undefined,"settings-grid"),profile=node("section",undefined,"card");
    profile.append(node("h2","Личный профиль"),summaryList(profileSummary()),button("Изменить профиль","open-profile"));grid.append(profile);
    const preferences=node("section",undefined,"card");
    preferences.append(node("h2","Предпочтения"),summaryList([["Готовка","До "+state.settings.maxPrepMinutes+" минут"],["Готовые блюда",state.settings.allowReadyMeals?"Разрешены":"Не подбирать"],["Повторение",state.settings.allowRepeats?"Можно":"Без повторов"],["Автоперекус",state.settings.autoSnack?"Добавлять":"Не добавлять"]]),button("Изменить предпочтения","edit-preferences",true));
    for(const [key,text]of [["tipsEnabled","Мягкие подсказки и мотивация"],["animationsEnabled","Анимации"]])preferences.append(checkField(text,state.settings[key],v=>{const next=clone(state);next.settings[key]=v;commit(next);}));grid.append(preferences);
    const excluded=node("section",undefined,"card");excluded.append(node("h2","Исключения"),node("p",state.settings.excludedIngredientIds.map(id=>foodById(id)?.name||id).join(", ")||"Нет исключений"),button("Изменить исключения","open-profile",true),actionButton("Свои продукты",manageIngredients),button("Продукты дома","pantry",true));grid.append(excluded);
    const copies=node("section",undefined,"card");
    const bytes=JSON.stringify(state).length*2;
    copies.append(node("h2","Данные и резервные копии"),node("p","Копия содержит личные параметры. Телефон и компьютер хранят независимые данные."),
      actionButton("Экспорт JSON",emergencyExport,false),actionButton("Импорт JSON",importDialog),actionButton("Очистить архив",archiveDialog),actionButton("Удалить все данные",requestReset),
      node("p","Объём данных: примерно "+format(bytes/1024,1)+" КиБ. Это оценка, а не доступная квота.","subtle"));
    if(bytes>=3.5*1024*1024)copies.append(node("p","Данных много — сохраните копию и посмотрите очистку архива.","warning"));grid.append(copies);parent.append(grid);
  }
  function renderTip(parent) {
    if(!state.settings.tipsEnabled||storageError||conflict||activeTab==="weight")return;
    const tomorrow=addCalendarDays(todayDate(),1),day=state.days[tomorrow],full=dayDates(selectedWeek).every(d=>MAIN.every(m=>state.days[d]?.planEntries.some(e=>e.mealType===m)));
    let text="План можно менять — он не начальник",handler=null,label=null;
    if(!day?.planEntries.some(e=>MAIN.includes(e.mealType))){
      text="Завтра пока пусто. Выберем еду заранее?";label="Меню на завтра";handler=()=>{selectedWeek=mondayOf(tomorrow);selectedDay=tomorrow;activeTab="week";render();};
    }else if(aggregateShopping(state,tomorrow,tomorrow).length||unclearShopping(state,tomorrow,tomorrow).length){
      text="Меню на завтра готово — проверь покупки";label="Покупки на завтра";handler=()=>{shoppingScope="tomorrow";activeTab="shopping";render();};
    }else if(full)text="Ужин уже придуман. Одно расследование отменяется";
    const tip=node("aside",undefined,"notice notice-tip");tip.append(node("p",text));if(handler&&!(activeTab==="shopping"&&shoppingScope==="tomorrow"&&label==="Покупки на завтра"))tip.append(actionButton(label,handler));parent.append(tip);
  }
  function unclearShopping(s,start,end) {
    const items=new Map();
    Object.values(s.days).filter(d=>d.date>=start&&d.date<=end).forEach(d=>d.planEntries.filter(e=>e.mealType!=="drink"&&e.snapshot.incompleteIngredients).forEach(e=>{
      const key=e.snapshot.name,old=items.get(key);if(old)old.portions+=e.portions;else items.set(key,{name:key,portions:e.portions,snapshot:e.snapshot});
    }));return [...items.values()];
  }

  function rememberIds(s) {
    [...s.customIngredients,...s.customRecipes,...s.weightLog,...Object.values(s.days).flatMap(d=>[...d.planEntries,...d.actualEntries])].forEach(item=>issuedIds.add(item.id));
  }

  function copyRestriction(entry,s) {
    const excluded=conflicts(entry,s.settings);if(excluded.length)return "исключены "+excluded.join(", ");
    if(entry.snapshot.sourceType==="ready"&&!s.settings.allowReadyMeals)return "готовые блюда не разрешены в предпочтениях";
    const recipe=[...RECIPES,...s.customRecipes].find(r=>r.id===entry.recipeId);
    if(recipe&&recipe.prepMinutes>s.settings.maxPrepMinutes)return "время приготовления превышает лимит";
    return null;
  }

  function updatePlanRecipe(entry,recipe) {
    if(linked(state.days[entry.date],entry)){announce("Запись со съеденным не обновляется из каталога.");return;}
    const snapshot=recipeSnapshot(recipe),dialog=modal("Обновить запланированное блюдо?");
    dialog.append(node("p","Сохранённый состав будет заменён текущим рецептом. Съеденное не изменится."));
    const excluded=conflicts({snapshot},state.settings);if(excluded.length){dialog.append(node("p","Сначала измените ограничения: "+excluded.join(", "),"warning"));return;}
    let check=null;
    if(snapshot.incompleteIngredients||snapshot.opaquePackaged){const label=checkField("Я проверила состав и ограничения по упаковке для этого обновления",false,()=>{});check=label.querySelector("input");dialog.append(label);}
    dialog.append(actionButton("Обновить",()=>{
      if(check&&!check.checked){errorIn(dialog,"Подтвердите проверку состава.");return;}
      const next=clone(state),target=next.days[entry.date].planEntries.find(e=>e.id===entry.id);target.snapshot=clone(snapshot);target.origin="manual";
      if(commit(next)){closeFood(true);announce(storageError?"Изменение принято в память, но не сохранено.":"Запланированное блюдо обновлено.");}
    },false),actionButton("Отмена",()=>closeFood(true)));
  }
  bindFoodEvents();buildIngredientOptions();bindEvents();loadState();render();
  document.addEventListener("click",event=>{if(event.target.closest("[data-action=import]"))importDialog();});
  window.PlannerComplete=Object.freeze({checkStructure,STATE_SCHEMA,readBackup,validateRelations,putActual,detachPlanLinks,archivePreview,trimArchive,weightPoints,unclearShopping});
})();
