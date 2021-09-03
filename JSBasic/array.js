let students = ['철수', '영희', '영수'];
console.log(students[0]);
console.log(students.length);
students.push('맹구')
console.log(students);
students.pop();
console.log(students);

students.unshift('지혜'); // 배열 앞에 추가
console.log(students);
students.shift(); // 배열 앞에 제거
console.log(students);

for (let i=0; i<students.length; i++) {
    console.log(students[i]);
}

for (let student of students) {
    console.log(student);
}