const superman = {
    name : 'clark',
    age : 30,
    // fly : function() {
    //     console.log('날아간다!');
    // }
    fly() { // method
        console.log('날아간다!');
    },
    sayHello() {
        // this : 런타임에 결정된다, 자기 자신을 가리킴 (단, 화살표 함수일 경우 외부에서 값인 전역객체를 가져온다.)
        console.log(`hello, i'm ${this.name}`); 
    }
}


// superman.fly();

let boy = {
    name : 'mike',
    showName() {
        console.log(this.name); // method 내에 this 는 해당 객체를 가리킨다.
        console.log(this);
    }
}

let man = boy;
// man.name = 'tom';
// console.log(boy.name);
boy = null;
man.showName();