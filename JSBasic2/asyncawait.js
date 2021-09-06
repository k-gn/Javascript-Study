// async : 항상 Promise 반환
async function getName() {
    return "Mike"; 
    // return Promise.resolve("Tom"); // 만약 반환값이 Promise 면 그대로 사용
    // throw new Error('error..'); // reject Promise 반환
}

// console.log(getName());
// getName()
// .then((name) => {
//     console.log(name);
// })
// .catch((err) => {
//     console.log(err);
// });


function getName2(name) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(name);
        }, 1000);
    });
}

// await 
// async 내부에서만 사용 가능
// await 옆엔 Promise가 온다. (해당 Promise가 처리될 때 까지 기다린다.)
async function showName() {
    const result = await getName2('Mike');
    console.log(result);
}

console.log("시작");
showName();