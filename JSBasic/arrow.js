// 화살표 함수
// return 문 하나면 괄호 생략 가능
// 인수가 하나면 괄호 생략 가능

let add = (n1, n2) => n1 + n2;

console.log(add(1,2));

const sayHello = name => {
    const msg = `hello ${name}`;
    console.log(msg);
}