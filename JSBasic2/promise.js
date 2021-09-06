// Promiss
// 어떤일이 완료되고 실행되는 함수 = callback function
// state 와 result 필드를 가진다.
// 초기
// state : pending(대기), result : undefined
// resolve 호출 시
// state : fulfulled(이행됨), result : value
// reject 호출 시
// state : rejected(거부됨), result : error
                        // 성공, 실패
const pr = new Promise((resolve, reject) => {
    // code
    setTimeout(() => {
        resolve('OK')
        // reject(new Error('error'))
    }, 3000)
});

// pr.then( // then 을 이용해 resolve, reject 처리
//     function(result){
//         console.log(result + ' 가지러 가자.');
//     }, // 이행
//     function(err){
//         console.log('다시 주문해주세요..');
//     } // 거부
// );

// pr.then( // 이행
//     function(result){
//         console.log(result + ' 가지러 가자.');
//     }
// ).catch( // 거부
//     function(err){
//         console.log('다시 주문해주세요..');
//     }
// ).finally( // 이행, 거부 상관없이 항상 실행
//     function(){
//         console.log('주문 끝!');
//     }
// )

const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('1번 주문 완료');
        }, 1000)
    });
};

const f2= (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            // rej('error');
            res('2번 주문 완료');
        }, 3000)
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('3번 주문 완료');
        }, 2000)
    });
};

// console.log('시작');
// f1()
//     .then(res => f2(res))
//     .then(res => f3(res))
//     .then(res => console.log(res))
//     .catch(console.log)
//     .finally(() => {
//             console.log("끝!");
//     });

// Promiss.all
// console.time("x");
// Promise.all([f1(), f2(), f3()]) // 작업이 모두 완료되면 then 실행
// .then(res => {
//     console.log(res); // 배열로 들어온다. 거부 시 에러 (다 보여주거나 다 안보여주거나)
//     console.timeEnd("x");
// });

// Promise.race
// console.time("x");
// Promise.race([f1(), f2(), f3()]) // 작업이 하나라도 완료되면 then
// .then(res => {
//     console.log(res); 
//     console.timeEnd("x");
// });

// Promise 보다 가독성이 좋다.
console.log("시작");
async function order() {
    try { // reject 는 try-catch로 처리 가능
        // const result1 = await f1();
        // const result2 = await f2(result1);
        // const result3 = await f3(result2);
        // console.log(result3);

        const result = await Promise.all([f1(), f2(), f3()]);
        console.log(result);
    }catch(e) {
        console.log(e);
    }finally {
        console.log("종료");
    }
}

order();