// Generator
// 함수 실행을 중간에 멈췄다가 재게할 수 있는 기능
// 함수옆에 * 을 쓰고, 내부에 yield 키워드를 사용한다.
// 다른 작업을 하다가 돌아와서 next() 하여 다시 진행
function* fn() {
    try{
        // console.log(1);
        yield 1; // yield 로 함수 실행을 멈출 수 있다.
        // console.log(2);
        yield 2;
        // console.log(3);
        // console.log(4);
        yield 3;
        return "finish";
    }catch(e) {
        console.log(e);
    } 
    
}

const a = fn(); // generator 객체만 반환되고 함수본문은 실행x
// console.log(a);
// console.log(a.next()); // 가장 가까운 yield 문을 만날때까지 실행되고 데이터 객체 반환
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.return('end')); // 즉시 종료 = done: true
// console.log(a.throw(new Error('err'))); // 즉시 종료 (예외)

// Generator 는 Iterable 이다.
// Iterable 조건
// - Symbol.iterator 메소드가 있어야 함
// - Symbol.iterator 는 iterator 를 반환해야 함

// iterator
// - next 메소드를 가진다.
// - next : value 와 done 속성을 가진 객체 반환
// - 작업 종료 시 done: true
// iterable 객체는 for of 가능
// console.log(a[Symbol.iterator]() === a); // Generator == iterable
for(let num of a) {
    // console.log(num);
}


const arr = [1,2,3,4,5];
const it = arr[Symbol.iterator](); // 배열의 iterator 사용
// console.log(it.next());

const str = 'hello'; 
const xx = str[Symbol.iterator](); // 문자열의 iterator 사용
// console.log(xx.next());


function* fn2() {
    const num1 = yield "첫번째 숫자를 입력해주세요";

    const num2 = yield "두번째 숫자를 입력해주세요";
    console.log(num1, num2);
    
    return num1 + num2;
}

const b = fn2(); 
// generator 의 인수 사용
// console.log(b.next());
// console.log(b.next(2)); // num1 에 저장된다.
// console.log(b.next(4)); // num2 에 저장된다.

// generator 는 값을 미리 만들어 두지 않음, 필요한 순간까지 미룰 수 있다. (일반 함수는 모든 값일 미리 계산함)
function* fn3() {
    let index = 0;
    while(true) {
        yield index++;
    }
};

const c = fn3();
// console.log(c.next());
// console.log(c.next());
// console.log(c.next());
// console.log(c.next());

function* gen1() {
    yield "w";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2() {
    yield "hello,";
    yield* gen1(); // 다른 generator 불러오기 (사실 반복가능한 모든 객체가 올 수 있다.)
    yield "!";
}

// generator 구조분해 할당은 done이 true가 될때까지 값을 출력
console.log(...gen2());