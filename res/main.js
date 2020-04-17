window.onload = function() {
    clockContainer = document.querySelector(".js-clock");
    clockTitle = clockContainer.querySelector("h1");
    init();
    duringTitle= this.clockContainer.querySelector("h2");
    // clock
/*
    form = document.getElementsByName("form");
    input = document.querySelector("input");
    greeting = document.querySelector(".js-greeting");
    formLimit = document.getElementsByName("limit");
    inputLimit = document.querySelector("input");
    greetingLimit = document.querySelector(".js-greetingLimit");
    click = document.querySelector(".js-click");
    F = document.querySelector("form");*/
    // _init();
    // limit

    alcoholLeft = document.querySelector(".js-alcoholLeft");
    // game

    change = document.querySelector(".js-change");
    btn = document.querySelector("#choose");
    limited = localStorage.currentLimit;
    changeToAnother = 1;
    // change
    __init();
}