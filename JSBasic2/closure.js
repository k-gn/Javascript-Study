// 클로져
// 함수와 렉시컬 환경의 조합
// 함수가 생성될 당시의 외부 변수를 기억
// 생성 이후에도 계속 접근 가능

function makeCounter() {
    let num = 0;

    return function() {
        return num++;
    }
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

const add3 = makeAdder(3);
console.log(add3(2));