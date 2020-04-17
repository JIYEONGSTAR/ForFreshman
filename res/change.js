var limited = 0;
let change;
let btn;
let liquor;
changeToAnother = 1; //소주를 다른 알코올로 바꾼거 몇잔인지

function changeLimit(li) {
    limited = li;
}

function changer(liquor) {

    switch (liquor) {
        case "소주":
            changeToAnother = limited * 1;
            break;
        case "맥주":
            changeToAnother = limited * 1 / 3;
            break;
        case "보드카":
            changeToAnother = limited * 0.7;
            break;
        case "와인":
            changeToAnother = limited * 0.2;
            break;
        case "위스키":
            changeToAnother = limited * 1;
            break;
        case "소맥":
            changeToAnother = limited * 0.35;
            break;
        case "바카디":
            changeToAnother = limited * 0.35;

    }

    changeToAnother = changeToAnother.toFixed(0);
    change.innerText = `당신은 ${liquor}을 ${changeToAnother}잔 마실 수 있습니다.`;
}

function __init() {
    liquor = document.querySelector('#liquor');
    btn.addEventListener('click', function() {
        limited = lim;
        changer(liquor.value);
    })
}