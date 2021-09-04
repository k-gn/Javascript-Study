// let desc = `오늘은
//     아침밥을
//     맛있게
//     먹었다.
// ` // 여러줄 가능
let desc = 'abcdefg'

// 문자열 길이 : length
console.log(desc.length);
console.log(desc[2]); // 배열처럼 접근 가능

let desc2 = "hello, MIKE!"
console.log(desc2.toLowerCase());
console.log(desc2.toUpperCase());
console.log(desc.indexOf('늘')); // 가장 먼저 등장하는 문자 인덱스 반환, 없을 시 -1 반환

console.log(desc.slice(1, 5)); // n 이상 m 미만
console.log(desc.slice(2, -1));

console.log(desc.substring(1, 4)); // 사이 문자를 반환, n 이상 m 미만, 음수는 0으로 인식
console.log(desc.substr(1, 4)); // n 부터 m 개

console.log(desc.trim()); // 앞 뒤 공백 제거
console.log(desc.repeat(3)); // 문자열을 n 번 반복

// 문자열 비교
console.log("a" < "c");
console.log("a".codePointAt(0));
String.fromCodePoint(97);

let list = [
    "01. 들어가며",
    "02. js의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];

for(let i=0; i<list.length; i++) {
    newList.push(
        list[i].slice(4)
    );
}

console.log(newList);

function hasCola(str) {
    // if(str.indexOf('콜라') > -1) {
    if(str.includes('콜라')) {
        console.log('금칙어!!');
    }else {
        console.log('pass!!');
    }
}