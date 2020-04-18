//홀수 모두 더하기
function oddNumberAdd() {
    let a = Math.floor(Math.random() * 10 + 1);
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        if (i % 2 != 0) {
            sum = sum + i;

        }
    }
    let ans = prompt(a + "이하의 홀수를 모두 더하시오\n" + "정답을 입력하세요");
    if (ans == sum) {
        return true;
    } else {
        return false;
    }
}

//두 자리수 곱셈
function binMul() {
    let a = Math.floor(Math.random() * 100 + 1);
    let b = Math.floor(Math.random() * 100 + 1);
    let c = a * b;
    let ans = prompt(a + "x" + b + "=?\n" + "정답을 입력하세요");
    if (ans == c) {
        return true;
    } else {
        return false;
    }
}

//한 자리수 곱셈
function Mul() {
    let a = Math.floor(Math.random() * 10 + 1);
    let b = Math.floor(Math.random() * 10 + 1);
    let c = a * b;
    let ans = prompt(a + "x" + b + "=?\n" + "정답을 입력하세요");
    if (ans == c) {
        return true;
    } else {
        return false;
    }
}

//네 자리수 덧셈
function quadAdd() {
    let a = Math.floor(Math.random() * 10000 + 1);
    let b = Math.floor(Math.random() * 10000 + 1);
    let c = a + b;
    let ans = prompt(a + "+" + b + "=?\n" + "정답을 입력하세요");
    if (ans == c) {
        return true;
    } else {
        return false;
    }
}

//세 자리수 덧셈
function triAdd() {
    let a = Math.floor(Math.random() * 1000 + 1);
    let b = Math.floor(Math.random() * 1000 + 1);
    let c = a + b;
    let ans = prompt(a + "+" + b + "=?\n" + "정답을 입력하세요");
    if (ans == c) {
        return true;
    } else {
        return false;
    }
}

//두 자리수 덧셈
function binAdd() {
    let a = Math.floor(Math.random() * 100 + 1);
    let b = Math.floor(Math.random() * 100 + 1);
    let c = a + b;
    let ans = prompt(a + "+" + b + "=?\n" + "정답을 입력하세요");
    if (ans == c) {
        return true;
    } else {
        return false;
    }
}

//네 자리수 뺄셈
function quadSub() {
    let a = Math.floor(Math.random() * 10000 + 1);
    let b = Math.floor(Math.random() * 10000 + 1);
    let c = a - b;
    let ans = prompt(a + "-" + b + "=?\n" + "정답을 입력하세요");
    if (ans == c) {
        return true;
    } else {
        return false;
    }
}

//세 자리수 뺄셈
function triSub() {
    let a = Math.floor(Math.random() * 1000 + 1);
    let b = Math.floor(Math.random() * 1000 + 1);
    let c = a - b;
    let ans = prompt(a + "-" + b + "=?\n" + "정답을 입력하세요");
    if (ans == c) {
        return true;
    } else {
        return false;
    }
}

//두 자리수 뺄셈
function binSub() {
    let a = Math.floor(Math.random() * 100 + 1);
    let b = Math.floor(Math.random() * 100 + 1);
    let c = a - b;
    let ans = prompt(a + "-" + b + "=?\n" + "정답을 입력하세요");
    if (ans == c) {
        return true;
    } else {
        return false;
    }
}

//제곱을 구하시오
function square() {
    let a = Math.floor(Math.random() * 10 + 1);
    let b = Math.floor(Math.random() * 10 + 1);
    let c = Math.pow(a, b)
    let ans = prompt(a + "^" + b + "=?\n" + "정답을 입력하세요");
    if (ans == c) {
        return true;
    } else {
        return false;
    }
}

function games() {
    let randomGame = Math.floor(Math.random() * 10 + 1);
    switch (randomGame) {
        case 1:
            return square();
        case 2:
            return oddNumberAdd();
        case 3:
            return binMul();
        case 4:
            return Mul();
        case 5:
            return quadAdd();
        case 6:
            return triAdd();
        case 7:
            return binAdd();
        case 8:
            return quadSub();
        case 9:
            return triSub();
        case 10:
            return binSub();
    }
}


let fale = 0;
let alcoholLeft;

function plus_click() {
    if (changeToAnother <= 0) {
        if (changeToAnother <= 0) {
            if (changeToAnother == 0) {
                alert('주량을 초과했습니다. 게임을 시작합니다.');
            }
            changeToAnother = changeToAnother - 1;
            if (changeToAnother < 0) {
                alcoholLeft.innerText = Math.abs(changeToAnother) + '잔만큼 더 마셨습니다.\n 버튼을 눌러 게임을 무작위로 진행하세요.';
                let k = Math.floor(Math.random() * 10 + 1);
                if (k % 2 == 0) { //50퍼센트의 확률로 게임시작
                    if (games() == false) {
                        alert('오답입니다. 휴식을 취하시길 권유합니다');
                        alcoholLeft.innerText = Math.abs(changeToAnother) + '잔만큼 더 마셨습니다.\n 버튼을 눌러 게임을 무작위로 진행하세요';
                        fale = fale + 1;
                        switch (fale) {
                            case 1:
                                document.body.style.backgroundColor = "#F6CECE";
                                break;
                            case 2:
                                document.body.style.backgroundColor = "#F5A9A9";
                                break;
                            case 3:
                                document.body.style.backgroundColor = "#F78181";
                                break;
                            case 4:
                                document.body.style.backgroundColor = "#FA5858";
                                break;
                            default:
                                document.body.style.backgroundColor = "#2A0A0A";
                                document.querySelector(".warning").classList.remove("notshow");
                                document.querySelector(".js-click").classList.add("notshow");
                                document.querySelector(".js-click").classList.add("notshow");
                                document.querySelector(".js-clock").classList.add("notshow");
                        }
                    }
                }
            }
        }
    } else {
        changeToAnother = changeToAnother - 1;
        changeToAnother = changeToAnother.toFixed(0);
        alcoholLeft.innerText = `${changeToAnother}잔만 더 마시면 주량을 넘습니다.`;
    }
}