let arr = [1,2,3,4,5];
arr.splice(1,2); // 특정 인덱스 n부터 m개의 요소를 지움 -> [1,4,5]
arr.splice(1,3,100,200) // 특정 인덱스 n부터 m개의 요소를 지우고 추가 -> [1, 100, 200, 5]
// 삭제된 요소를 반환한다.
let result = arr.splice(1,2);
console.log(result);

arr.slice(1,4); // n부터 m미만까지 반환. [2,3,4]
let arr2 = [1,2];
arr2.concat([3,4]); // 합쳐서 새배열 반환. [1,2,3,4]
arr2.concat([5,6],[7,8],9) // [1,2,3,4,5,6,7,8,9]

let users = ['mike', 'tom', 'jane'];
users.forEach((item, index, arr) => { // 배열 반복 (요소, 인덱스, 배열객체)
    // ..
    console.log(item, index);
});

let arr3 = [1,2,3,4,5,6,3];
console.log(arr3.indexOf(3));
console.log(arr3.indexOf(3, 3)); // 3을 인덱스 3부터 탐색
console.log(arr3.lastIndexOf(3));

console.log(arr3.includes(2));
console.log(arr3.includes(8));

// arr.find(fn) / arr.findIndex(fn) -> 첫번째 true 값 반환 후 종료, 없으면 undefined 반환
const result2 = arr3.find((item) => {
    return item % 2 === 0;
})
const result3 = arr3.findIndex((item) => {
    return item % 2 === 0;
})
console.log(result2);
console.log(result3);

// arr.filter(fn) 만족하는 모든요소를 반환 
const result4 = arr3.filter((item) => {
    return item % 2 === 0;
});
console.log(result4);

let arr4 = [1,2,3,4,5]
console.log(arr4.reverse()); // 역순 정렬

// arr.map(fn) : 함수를 받아 특정 기능을 시행하고, 새로운 배열을 반환

let userList = [
    {name : 'mike', age : 30},
    {name : 'jane', age : 27},
    {name : 'tom', age : 10},
]

let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {isAdult : user.age > 19});
});

console.log(newUserList);

let arr5 = ['안녕', '나는', '철수야'];

let result5 = arr5.join("-"); // 배열 요소 합치기
console.log(result5);
let userstr = "Mike,Jane,Tom";
console.log(userstr.split(",")); // 문자열 나눠서 배열로

// 배열인지 검증
// typeof는 object라고 나온다.
console.log(Array.isArray(arr5));

