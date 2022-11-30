// 일반 변수에 타입 선언
const a = "a";
const b = 1;
// 배열 변수에 타입 선언
const numArray = [1, 2, 3, 4, 5];
const stringArray = ['a', 'b', 'c', 'd'];
const tempArray = [true, 'a', 1];
console.log("string :", a);
/********************/
// 함수 사용법
// (매개변수:type):<리턴type>
function func1(a, b) {
    console.log('func1 - a : ', a);
    console.log('func1 - b : ', b);
    return 'func1';
}
let result1 = func1('a', 1);
const func2 = (a, b) => {
    console.log('func2 - a : ', a);
    console.log('func2 - b : ', b);
    return 'func2';
};
let result2 = func2('a', 1);
console.log(result2);
;
const student1 = {
    name: '학생1',
    age: 10
};
const student2 = {
    name: '학생2',
    age: 20,
    nickname: 'student2'
};
function checkStudent(student) {
    return `이름 : ${student.name} 나이 : ${student.age} 닉네임 : ${student.nickname}`;
}
console.log(`checkStudent : ${checkStudent(student1)}`);
console.log(`checkStudent : ${checkStudent(student2)}`);
class Square {
    constructor(a, b) {
        this.width = a;
        this.height = b;
    }
    getLength() {
        return (this.width + this.height) * 2;
    }
}
const square = new Square(5, 6);
console.log(square.getLength());
/********************/
// class 사용법
class Person {
    constructor(name, age) {
        this.id = name + age;
    }
}
const person1 = new Person('이름', 10);
console.log(person1.id);
/********************/
// public & private 사용법
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
        this.name = name;
        this.department = department;
    }
}
const employee1 = new Employee('직원', '개발팀');
console.log(employee1.name);
// console.log(employee1.department);
//# sourceMappingURL=01-init.js.map