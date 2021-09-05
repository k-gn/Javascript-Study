// 함수 호출 방식과 관계없이 this 를 지정할 수 있다.

// call : 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.

const mike = {
    name: 'mike'
};

const tom = {
    name: 'tom'
};

function showThisName() {
    console.log(this.name);
}

// showThisName();
showThisName.call(mike);

function update(birth, occupation) {
    this.birth = birth;
    this.occupation = occupation;
}

update.call(mike, 1999, 'singer') // (함수, 매개변수 ...)
console.log(mike);

// apply 는 매개변수를 배열로 받는다.
update.apply(tom, [2002, "teacher"])
console.log(tom);

const nums = [3, 10, 1, 6, 4];
const minNum = Math.min(...nums);
console.log(minNum);
const maxNum1 = Math.max.apply(null, nums);
const maxNum2 = Math.max.call(null, ...nums);
console.log(maxNum1);
console.log(maxNum2);

// bind : 함수의 this 값을 영구히 바꿀 수 있다. 새롭게 바인딩한 함수를 만든다, 원본 함수 객체를 감싸는 함수
const updateMike = update.bind(mike); // this 를 항상 mike 로
updateMike(1980, "police");
console.log(mike);

const user = {
    name: 'mike',
    showname: function() {
        console.log(`hello, ${this.name}`);
    }
};

user.showname();
let fn = user.showname;

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);
boundFn();

let person1 = {
    name: 'Jo'
};

let person2 = {
    name: 'Kim',
    study: function() {
        console.log(this.name + '이/가 공부를 하고 있습니다.');
    }
};

person2.study(); // Kim이/가 공부를 하고 있습니다.

// bind()
let student = person2.study.bind(person1);

student(); // Jo이/가 공부를 하고 있습니다.