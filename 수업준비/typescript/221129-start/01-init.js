// 일반 변수에 타입 선언
var a = "a";
var b = 1;
// 배열 변수에 타입 선언
var numArray = [1, 2, 3, 4, 5];
var stringArray = ['a', 'b', 'c', 'd'];
var tempArray = [true, 'a', 1];
console.log("string :", a);
/********************/
// 함수 사용법
// (매개변수:type):<리턴type>
function func1(a, b) {
    console.log('func1 - a : ', a);
    console.log('func1 - b : ', b);
    return 'func1';
}
var result1 = func1('a', 1);
var func2 = function (a, b) {
    console.log('func2 - a : ', a);
    console.log('func2 - b : ', b);
    return 'func2';
};
var result2 = func2('a', 1);
console.log(result2);
;
var student1 = {
    name: '학생1',
    age: 10
};
var student2 = {
    name: '학생2',
    age: 20,
    nickname: 'student2'
};
function checkStudent(student) {
    return "\uC774\uB984 : ".concat(student.name, " \uB098\uC774 : ").concat(student.age, " \uB2C9\uB124\uC784 : ").concat(student.nickname);
}
console.log("checkStudent : ".concat(checkStudent(student1)));
console.log("checkStudent : ".concat(checkStudent(student2)));
var Square = /** @class */ (function () {
    function Square(a, b) {
        this.width = a;
        this.height = b;
    }
    Square.prototype.getLength = function () {
        return (this.width + this.height) * 2;
    };
    return Square;
}());
var square = new Square(5, 6);
console.log(square.getLength());
/********************/
// class 사용법
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.id = name + age;
    }
    return Person;
}());
var person1 = new Person('이름', 10);
console.log(person1.id);
/********************/
// public & private 사용법
var Employee = /** @class */ (function () {
    function Employee(name, department) {
        this.name = name;
        this.department = department;
        this.name = name;
        this.department = department;
    }
    return Employee;
}());
var employee1 = new Employee('직원', '개발팀');
console.log(employee1.name);
// console.log(employee1.department);
