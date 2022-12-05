/*
    function 함수이름 ( 변수명:타입 ) : 반환타입 {}
*/
// ES2015 
var func1 = function (a) {
    console.log("func1");
};
var func2 = function () {
    console.log("func2");
};
function sum1(a, b) {
    return 1;
}
var person = { name: '코딩온', age: 10 };
function getInfo(obj) {
}
getInfo(person);
function getInfo2(obj) {
}
var person2 = { name: '코딩온', age: 10 };
person2.age = person2.age + 1;
;
var loginUser = function (id, pw) {
    return true;
};
var MyBook = /** @class */ (function () {
    function MyBook() {
        this.title = '책';
        this.date = '2022-12-05';
    }
    MyBook.prototype.getInfo = function () {
        console.log("정보");
    };
    MyBook.prototype.changeTitle = function (newTitle) {
    };
    return MyBook;
}());
