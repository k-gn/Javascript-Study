// setTimeout : 일정 시간이 지난 후 함수 실행
// setInterval : 일정 시간 간격으로 함수 반복

function fn(num) {
    console.log(num);
    if (num > 5) {
        clearInterval(tid2);
    }
}

// 현재 실행중인 스크립트를 종료 후에 스케쥴링 함수를 실행한다.

const tid = setTimeout(fn, 3000, 3); // (함수, 시간, 인수)
const tid2 = setInterval(fn, 3000, 1);
// clearTimeout(tid);
// clearInterval(tid2);
console.log("test");