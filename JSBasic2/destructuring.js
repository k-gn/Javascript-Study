// 구조분해할당
// 배열이나 객체의 속성을 분해해서, 그 값은 변수에 담게하는 표현식

let [x, y] = [1, 2];
console.log(x);
console.log(y);

let users = ['Mike', 'Tom', 'Jane'];
// let [user1, user2, user3] = users;
let [user1, , user2] = users;

let str = "Mike-Tom-Jane";
let [user4, user5, user6] = str.split('-');

// let [a,b,c] = [1,2]; // c = undefined
// let [a=3, b=4, c=5] = [1,2] // default set

let a = 1;
let b = 2;
[a, b] = [b, a]

let user = {name: 'mike', age: 30};
let {name, age: userAge, gender='male'} = user;
console.log(name);
console.log(userAge);