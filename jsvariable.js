'use strict';

// Variable

// global variable
// block 안쪽에서도 사용이 가능해짐
let globalName = 'global variable';

// block안에서도 사용 가능
{
    console.log(globalName);
}

// 함수 내부에서도 사용 가능
function globalTest() {
    console.log(globalName);
}

globalTest();

// let (added in ES6)
// mutable data type
// block scope 가능
{
    let name = 'tom';
    console.log(name);
    name = 'jim';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (왠만하면 안쓰는게 좋음)
// 선언 전에 사용 가능 hoisting이 가능
// hoisting = 어디에 선언했든 상관없이 가장 최상위로 선언을 해 준다.
// block scope을 무시함
// mutable data type
{
    console.log(age);
    age = 4;
    console.log(age);
    var age;
}
console.log(age);



// Const
// 상수 = 변경이 불가능
// immutable data type
const dayInWeek = 7;

// Variable type
// primitive type = number, striong, boolean, null, undefined, symbol
// object , box container
// function, first-class function

// number type = 숫자 관련 데이터 전부 관장 (typescript에도 있음)
const count = 17;
console.log(`value:${count}, type: ${typeof count}`);
// 그 외에 허용 불가능한 숫자값
const infinity = 1/0;
const negativeInfinity = -1 / 0;
const nAn = 'string' / 2;
// valid체크 용도로 쓰면 좋음
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

if(infinity == Infinity) {
    console.log("Infinity!");
}

if(negativeInfinity == -Infinity) {
    console.log("-Infinity!");
}

if(isNaN(nAn)) {
    console.log("Nan!");
}

// string type = 문자열 관련 데이터 전부 관장
const str = 'string data';
console.log(`value:${str}, type: ${typeof str}`);
const char = 'c';
const brendan = 'breandan';
// template literals
const hellobob = `hi ${brendan}!`;
console.log(hellobob);

// boolean
const canRead = true;
const boolData = 3 < 1;
console.log(`value:${boolData}, type: ${typeof boolData}`);

// null
// 값이 지정 되어있음
let nothing = null;
console.log(`value:${nothing}, type: ${typeof nothing}`);
if(nothing == null) {
    console.log("is Null!");
}

// undefined
// 선언은 되었지만 아무것도 지정되지 않음
let x;
let y = undefined;
console.log(`value:${x}, type: ${typeof x}`);
if(y == undefined) {
    console.log("is Undefined!");
}

// symbol
// 고유한 식별자가 필요할 때 쓰여짐
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
// 같은 이름이여도 실제로 다르다고 결과가 출력됨
console.log(symbol1 == symbol2);
// symbol을 쓸 경우 문자열로 출력하는 방법
console.log(symbol1.description);

// Dynamic typing
// 선언할때 타입을 선언하지 않고 런타임시 값에 따라 타입이 변환됨

// string타입으로 선언
let text = 'hello';
// 문자열의 0번째 인덱스 값 출력 함수(string타입일 경우에는 정상 작동)
console.log(text.charAt(0));
console.log(`value:${text}, type: ${typeof text}`);

// number타입으로 변환
text = 1;
console.log(`value:${text}, type: ${typeof text}`);

// 숫자와 문자를 덧셈 연산 할 경우 문자열 인식을 해서 75를 반환
text = '7' + 5;
console.log(`value:${text}, type: ${typeof text}`);

// 나눗셈 연산의 경우 인자가 숫자인 경우 number로 변환해서 연산 수행
text = '8' / '2';
console.log(`value:${text}, type: ${typeof text}`);

// 이 경우 NaN을 리턴 type은 number
text = 'a' / '2';
console.log(`value:${text}, type: ${typeof text}`);

// number 타입으로 변한 상태로 문자열 함수 처리를 하면 에러 발생
console.log(text.charAt(0));