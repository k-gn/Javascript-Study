
let name = 'Mike'; // 변수
const age = 30; // 상수

let message = `my name is ${name}`
console.log(message);
/* 
    1. 변수는 문자와 숫자, $, _ 만 사용
    2. 첫글자는 숫자 x
    3. 예약어 사용 x
    4. 가급적 상수는 대문자
    5. 변수명은 읽기 쉽고 이해할 수 있게 선언
*/

const PI = 3.14;


console.log(1 + 2);
console.log(3 * 2);
console.log(6 / 3);
console.log(6 % 4);
console.log(1 / 0); // infinity (무한대)
console.log(name / 2); // NaN (숫자가 아니다.)

const a = true
const b = false

let num1;
console.log(num1); // undefined
let user = null;
console.log(user);
console.log(typeof 3); // typeof : 타입을 알아내기



let test = 30;
function showTest() {
    console.log(test);

    // let test = 10;
}

showTest();

// var = 함수스코프
// let, const = 블록스코프
