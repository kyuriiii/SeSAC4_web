var a = '이름';
console.log(a);
// 변수
// 키워드 변수이름: 타입 = 값;
var str1 = '문자열';
var num1 = 1;
var flag = true;
var any;
any = 1;
any = '문자';
any = false;
any = [];
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ['a', 'b'];
// 튜플 : 배열의 길이가 고정되어 있고 타입도 지정
var arr3 = ['1', 2];
var arr4 = [1, 'a'];
var Values;
(function (Values) {
    Values[Values["\uAC121"] = 0] = "\uAC121";
    Values[Values["\uAC122"] = 1] = "\uAC122";
})(Values || (Values = {}));
;
var v1;
v1 = Values.값1;
var v2;
v2 = 1;
v2 = 'a';
v2 = true;
// 함수
/*
function 함수이름(매개변수: 타입) : 반환값타입{
    반환값
}
*/
function sum1(a, b) {
    return a + b;
}
console.log(sum1(1, 'a'));
function sum2(a, b) {
    return a + b;
}
console.log(sum2(1, 2));
console.log(sum2(3, NaN));
function sum3(a, b = 10) {
    return a + b;
}
console.log(sum3(1, 3));
console.log(sum3(1));
const func1 = (a) => {
    console.log("func1");
};
function func2() {
    console.log("func2");
}
;
var stu1 = {
    name: '이름',
    age: 10,
};
var stu2 = {
    name: '이름2',
    age: 20,
    nickname: 'student2'
};
class Square {
    getLength() {
        return 0;
    }
}
class Developer1 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
var dev1 = new Developer1("새싹");
console.log(dev1.getName());
class Developer2 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
var dev2 = new Developer2("코딩온");
console.log(dev2.getName());
