// 객체
let name = 'clark';
const superman = {
    // name : 'clark'
    name,
    age : 33
}

// 접근
superman.name;
superman['age'];

// 추가
superman.gender = 'male';
superman['hairColor'] = 'black';

// 삭제
delete superman.hairColor;

// 존재 여부 확인
'birthDay' in superman;
'age' in superman;

for (let key in superman) {
    console.log(key);
    console.log("[] : ", superman[key]);
    console.log(". ", superman.key);
}

function mkObj(name, age) {
    return {
        name,
        age,
        hobby : 'football'
    }
}

const Mike = mkObj('Mike', 30);
console.log(Mike);

function isAdult(user) {
    if(!('age' in user) || user.age < 20) {
        return false;
    }
    return true;
}

console.log(isAdult(Mike));