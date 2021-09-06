class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 클래스 내에 정의된 메소드는 프로토타입에 저장된다.
    showName() {
        console.log(this.name);
    }
}

// 함수로 객체를 만들 때 실수로 new 를 빼면 undefined 로 나오는 것 말고는 문제없이 동작,,
// 반면 클래스는 new 를 빼면 바로 에러가 발생
const mike = new User("Mike", 19);
console.log(mike);

for(const p in mike) {
    console.log(p); // 클래스의 메소드는 제외된다.
}

// 상속 : extends

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }

    drive() {
        console.log("drive..");
    }

    stop() {
        console.log("stop..");
    }
}

class Bmw extends Car {

    // 생성자 오버라이딩
    constructor(color) {
        super(color); // 자식은 무조건 부모 생성자를 호출해야한다.
        this.navigation = 1;
    }

    park() {
        console.log("park..");
    }

    // 동일한 메소드일 경우 자식꺼로 덮어쓴다. = 오버라이딩
    stop() {
        super.stop(); // 부모 클래스의 메소드를 사용할 수 있다.
        console.log("OFF");
    }
}

const z4 = new Bmw("blue");
z4.drive();
console.log(z4);
