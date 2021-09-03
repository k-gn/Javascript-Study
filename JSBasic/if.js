// >, >=, <, <=, ==, !=, ===, !==

// if(age > 19) {
//     console.log('환영합니다.');
// }else if(age === 19){
//     console.log('반갑습니다.');
// }else {
//     console.log('누구세요?');
// }


const name = "MIKE";
const age = 30;

// && > ||
if(name === 'Tom' || age > 19) {
    console.log("pass");
}

if(name === 'MIKE' && age > 19) {
    console.log("pass");
}

const isAdult = age > 19;

if(!isAdult) {
    console.log("pass");
}