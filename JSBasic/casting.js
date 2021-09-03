// 명시적 형변환
// String()
// Number()
// Boolean()

const mathScore = Number(prompt("수학 몇점?"));
const engScore = Number(prompt("영어 몇점?"));

const result = (mathScore + engScore) / 2; // 나누기 연산은 자동 형변환 된다.
console.log(result);

console.log(String(true));
console.log(String(null));
console.log(String(undefined));

console.log(Number(0)); // false
console.log(Number('0')); // true
console.log(Number('')); // false
console.log(Number(' ')); // true
console.log(Number("1234avbc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

console.log(Boolean(0)); // false (0, '', null, undefined, NaN)
console.log(Boolean(1)); // true  