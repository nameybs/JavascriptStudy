// Function declaration
// 호이스팅이 가능함(선언 전에 함수 사용 가능)

// 1. 기본적인 함수 형태
print();
function print() {
    console.log("Hello");
}
// 함수 호출 방법
print();

// 2. 파라미터
function printName(obj) {
    console.log(obj.name);
}

function changeName(obj) {
    obj.name = 1;
}

// 문자열로 선언
const change = {name : 'name'};
printName(change);

// 숫자로 변환
changeName(change);
printName(change);

// 3. Default Parameter(ES6)
// 파라미터인자에 아무것도 전달 하지 않았을 때 기본 값 적용
function showMessage(message, from = 'default') {
    console.log(`${message} by ${from}`);
}

showMessage('Hello!');

// 4. Rest Parameter(ES6)
// 배열 형태로 전달
function printAll(...args) {
    // 반복문 처리 예 1
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // 반복문 처리 예 2
    for (const arg of args) {
        console.log(arg);
    }
}

printAll(1,2,3);

// 5. Local scope
let globalMsg = 'global';
function printMsg() {
    let localMsg = 'local';
    console.log(localMsg);
    console.log(globalMsg);

    function childPrintMsg() {
        let childMsg = 'child';
        console.log(childMsg);
        console.log(localMsg);
        console.log(globalMsg);
    }
    // 에러
    // console.log(childMsg);
    childPrintMsg();
}

printMsg();
// 에러
// console.log(localMsg);

// 에러
//childPrintMsg();

// 6. Return
function sum(a,b) {
    return a + b;
}
// 리턴이 없는 함수들은 디폴트로 undefined가 들어있다
const result = sum(1,2);
console.log(result);

// 7. Early Return, early Exit
// 리턴 중간에 함수를 빠져나오고 싶을 경우
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }

    // 추가 로직 작성
}

// Function expression
// 호이스팅이 안됨(선언 전에 함수 사용 불가능)

// 1. anonymous function
const anPrint = function() {
    console.log('anPrint');
}
anPrint();

// 함수명 변경
const anPrintRe = anPrint;
anPrintRe();

// 2. Callback Funtion
// 파라미터에 함수를 넣어서 조건에 맞을 경우 해당 함수로 천이 시켜줌
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'test1') {
        printYes();
    }
    else {
        printNo();
    }
}

// anonymous function
const yesFunction = function () {
    console.log('Yes');
}

// 3. named function
// 디버깅 할 때 활용
const noFunction = function noPrint () {
    console.log('No');
    // 함수 안에서 함수를 또 쓰면 무한루프에 빠질 수 있다
    // noPrint();
}

randomQuiz('test', yesFunction, noFunction);
randomQuiz('test1', yesFunction, noFunction);

// 4. Arrow function
const simplePrint = () => console.log('Arrow Function');
simplePrint();

const sum2 = (a,b) => a + b;
console.log(sum2(2,3));

// 다른 방법
const mul = (a,b) => {
    return a * b;
}
console.log(mul(2,4));

// 5. IIFE : Immediately Invoked Function Expression
// 함수를 선언과 동시에 사용하고 싶은 경우
(function Hello() {
    console.log('IIFE');
})();