// 심볼은 유일성 보장
const a = Symbol();

// 유일한 프로퍼티를 사용하고 싶을 때
const id = Symbol('id');
const user = {
    name : 'mike',
    age : 30,
    // [id] : 'myid'
}

user[id] = 'myid';
console.log(id.description);
console.log(user);
console.log(Object.getOwnPropertySymbols(user));
Reflect.ownKeys(user);

const showName = Symbol("show name");
user[showName] = function() {
    console.log(this.name);
};

user[showName]();

// 전역 심볼
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
console.log(id1 === id2);
console.log(Symbol.keyFor(id1));



