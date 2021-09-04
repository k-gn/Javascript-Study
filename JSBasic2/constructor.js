// 생성자 함수

function User(name, age) { // 첫글자 대문자
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log(this.name);
    }
}

let user = new User('Mike', 30); // new 사용
user.sayName(); // 여기서 this = user

let a = 'age';

const user2 = {
    name : 'mike',
    [a] : 30, // = age : 30 (computed property)
    [1 + 4] : 5
}

// 객체 복제
// 서로 다른 객체로 취급된다.
// 같은 key 가 있다면 뒤에꺼로 덮어쓴다.
// 2개 이상 합칠 수 있다
const newUser = Object.assign({}, user, user2); // {} 는 초기값, 즉 여기선 {} + {name : 'mike', age : 30, 5 : 5}

// 키 배열 반환
Object.keys(user2);

// 값 배열 반환
Object.values(user2);

// 키, 값 배열 반환
const arr = Object.entries(user2);

// 키, 값 배열을 객체로
Object.fromEntries(arr);

function makeObj(key, val){
    return {
        [key] : val
    }
}