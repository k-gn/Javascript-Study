function showName(name) { // 개수 제한 없음
    console.log(name);
    // arguments : 함수로 넘어온 모든 인수에 접근 가능, 함수 내에서 사용가능한 지역변수
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showName('mike', 'tom')

// 나머지 매개변수
function showName2(...names) { // 배열로 나타낸다.
    console.log(names);
}
showName2('mike', 'tom')

function add(...numbers) {
    // let result = 0;
    // numbers.forEach(num => result += num);
    let result = numbers.reduce((prev, cur) => prev + cur, 0);
    console.log(result);
}
add(1,2,3);

// 나머지 매개변수는 항상 마지막에 위치해야한다.
function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('mike', 30, 'html', 'css');
console.log(user1);

// 전개 구문
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let result = [0, ...arr1, ...arr2, 7,8,9]
console.log(result);

let user = {name: 'mike'}
let mike = {...user, age:30}
let user2 = {...mike}
user2.name = 'tom';
console.log(mike);
console.log(user2);

let info = {age: 30}
let fe = ['js', 'react']
let lang = ['kor', 'eng']

user = {
    ...user,
    ...info,
    skills : [
        ...fe,
        ...lang
    ]
}
console.log(user);