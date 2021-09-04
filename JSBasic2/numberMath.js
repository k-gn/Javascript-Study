// toString()
// 10 -> 2 / 16 진수
let num = 10;
let numStr = num.toString();
let numStr2 = num.toString(2);
let numStr16 = num.toString(16);

console.log(num, numStr, numStr2, numStr16);

console.log(Math.PI);
let num1 = 5.1;
let num2 = 5.7;
// 올림
Math.ceil(num1); // 6
Math.ceil(num2); // 6
// 내림
Math.floor(num1); // 5
Math.floor(num2); // 5
// 반올림
Math.round(num1); // 5
Math.round(num2); // 6

let userRate = 30.1234;
Math.round(userRate * 100)/100 // 30.12
userRate.toFixed(2) // "30.12
userRate.toFixed(0) // "30" , 소수부 개수보다 크면 0으로 채운다.
// toFixed는 문자열을 리턴해서 숫자로 쓰려면 Number() 로 변환해야한다.

// NaN 검증
let x = Number('x');
isNaN(x);

let margin = '10px';
parseInt(margin); // 10 , 숫자로 시작할 경우만 해당
Number(margin) // NaN

let redColor = 'f3';
parseInt(redColor); // NaN
parseInt(redColor, 16); // 243, 진수를 같이 넣을 수 있다.

let padding = '18.5%';
parseInt(padding); // 18
parseFloat(padding); // 18.5

// 무작위 수 생성
Math.random()
Math.floor(Math.random * 100) + 1 // 1 ~ 100

Math.max(1,4,-1,10,5); // 최대값
Math.min(1,4,-2,10,5); // 최소값
Math.abs(-1); // 절대값
Math.pow(n, m); // n의 m제곱
Math.sqrt(16) // 제곱근

