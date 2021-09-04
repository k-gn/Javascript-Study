// 배열 정렬
// 배열 자체가 변경된다.
import _ from 'lodash';

let arr = [1,4,3,2,5];

function fn(a,b) {
    return a - b; // 작은 값을 앞으로 보낸다. (양수면 자리 교체)
}
arr.sort(fn);
console.log(arr);

// Lodash ( JavaScript의 인기있는 라이브러리 중 하나 )
// array, collection, date 등 데이터의 필수적인 구조를 쉽게 다룰 수 있게끔 하는데에 사용

let arr2 = [1,4,3,2,5];
console.log(_.sortBy(arr2));
console.log(arr2);

// 배열의 모든 수 합치기
// let result = 0;
// arr.forEach(num => {
//     result += num;
// })
const result = arr2.reduce((prev, cur) => { // (누적 계산값, 현재 값)
    return prev + cur; // 계산값
}, 0) // 초기값
console.log(result);

// reduceRight() : reduce() 와 동일하나 배열 우측부터 계산
