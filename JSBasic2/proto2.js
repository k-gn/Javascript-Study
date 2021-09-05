// 상속
const user = {
    name: 'mike'
}

console.log(user.hasOwnProperty('name')); // 객체가 직접 가지고 있으면 trues
console.log(user.hasOwnProperty('age'));

const car = {
    wheels: 4,
    drive() {
        console.log("drive..");
    }
};

const bmw = {
    color: "red",
    navigation: 1
}

const audi = {
    color: "blue",
    navigation: 1
}

bmw.__proto__ = car;
audi.__proto__ = car;

bmw.drive();

for(let i in bmw) {
    console.log(i);
}


const Bmw = function(color) {
    const c = color;
    this.getColor = function() { // 클로져
        console.log(c);
    }
};

// 생성자 함수에 직접 프로토타입 설정
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function() {
    console.log("drive..");
}

// Bmw.prototype = {
//     constructor: Bmw,
//     wheels: 4,
//     drive() {
//         console.log("drive..");
//     }
// }

const x5 = new Bmw("red");
const z4 = new Bmw("blue");
x5.drive();

// x5.__proto__ = car;
// z4.__proto__ = car;

// 인스턴스 검사
console.log(x5 instanceof Bmw);
console.log(z4.constructor === Bmw); // 생성자로 만든 인스턴스에는 constructor 프로퍼티가 존재한다.