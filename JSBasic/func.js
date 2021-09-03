let msg = `hi~`; // 전역변수
function sayHello(name = 'friend') { // 매개변수 = 지역변수, default 설정 가능
    // let newName = name || 'friend'; // false 면 오른쪽 아니면 그대로
    let msg = 'hello~'; // 지역변수, 함수 내에서 우선
    if(name) {
        msg = `hi~, ${name}`;
    }
    console.log(msg);
}

sayHello('mike');
sayHello();

function add(n1, n2) {
    return n1 + n2;
}

function showError() {
    alert('error!!');
    return; // 함수 종료
}

// 한번에 한작업에 집중
// 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍
// 위에 함수 선언문은 호이스팅 동작

// 함수 표현식 (호이스팅 x)
let sayHello = function() {
    console.log('hello');
}