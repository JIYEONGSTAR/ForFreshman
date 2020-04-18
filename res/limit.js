
var click;
var lim = 0;

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
