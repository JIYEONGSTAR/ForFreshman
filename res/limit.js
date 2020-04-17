/*var form,
    input,
    greeting,
    formLimit,
    inputLimit,
    greetingLimit,
    greetingBirthday,
    click,
    F;
    */
var click;
var lim = 0;

const USER_LS = "currentUser", //local storage
    SHOWING_CN = "showing",
    LIMIT_LS = "currentLimit",
    SHOWINGLIMIT_CN = "showingLimit",
    BIRTHDAY_LS = "birthday",
    SHOWINGBIRTHDAY_CN = "showingBirthday";

function isExist(limit) {
    document.querySelector(".js-click").classList.remove("notshow");
    document.querySelector("form").classList.add("notshow");
    document.querySelector("#liquor").classList.remove('notshow');
    document.querySelector("#liquor").classList.add("showing");
    document.querySelector("#choose").classList.remove('notshow');
    document.querySelector("#choose").classList.add("showing");
    lim = limit;
    changeLimit(parseInt(limit));
    console.log(limit + "");
}
/*
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function saveLimit(number) {
    localStorage.setItem(LIMIT_LS, number);
}

function saveBirthday(date) {
    localStorage.setItem(BIRTHDAY_LS, date);
}

function handlesubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function handlesubmitLimit(event) {
    event.preventDefault();
    const currentLimit = inputLimit.value;
    paintLimit(currentLimit);
    saveLimit(currentLimit);
}

function handlesubmitBirthday(event) {
    event.preventDefault();
    const birthday = (document.getElementsByName("birthday").value).toString();
    paintBirthday();
    saveBirthday(birthday);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handlesubmit);
}

function askLimit() {
    formLimit.classList.add(SHOWINGLIMIT_CN);
    formLimit.addEventListener("submit", handlesubmitLimit);
}

function askBirthday() {
    document.querySelector("name=birthday").classList.add(SHOWINGBIRTHDAY_CN);
    document.querySelector("name=birthday").addEventListener("submit", handlesubmitBirthday);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
}

function paintLimit(number) {
    formLimit.classList.remove(SHOWINGLIMIT_CN);
    greetingLimit.classList.add(SHOWINGLIMIT_CN);
    greetingLimit.innerText = `당신의 주량은 소주 ${number}잔입니다.`
}

function paintBirthday() {
    document.querySelector("name=birthday").classList.remove(SHOWINGBIRTHDAY_CN);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    const currentLimit = localStorage.getItem(LIMIT_LS);
    const birthday = localStorage.getItem(BIRTHDAY_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
    if (currentLimit === null) {
        askLimit();
    } else {
        paintLimit(currentLimit);
    }
    if (birthday === null) {
        askBirthday();
    }
}

function _init() {
    localStorage.clear();
    loadName();
}*/