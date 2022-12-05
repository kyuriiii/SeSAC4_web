// : 타입 표기 ( Type Annotation )
let str = 'hi';
let num = 1;
let flag = true;
let age;
age = 10;
age = 'a';
let any;
// Array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['a', 'b', 'c', 'd'];
let arr3 = [1, 2, 3, 4, 5];
// Tuple
let arr4 = ['str', 1];
// Enum
var Names;
(function (Names) {
    Names[Names["\uD64D\uAE38\uB3D9"] = 0] = "\uD64D\uAE38\uB3D9";
    Names[Names["\uCF54\uB529\uC628"] = 1] = "\uCF54\uB529\uC628";
    Names[Names["\uC0C8\uC2F9"] = 2] = "\uC0C8\uC2F9";
})(Names || (Names = {}));
;
let name1 = Names.홍길동;
name1 = Names.코딩온;
// void 
// 함수 : 반환값이 없는 친구 / 변수 undefined 와 null만 들어갈 수 있다.
let void1 = undefined;
function void2() {
    console.log('11');
}
// never
// 함수에 사용. 함수의 끝에 절대 도달하지 않는다
// function neverEnd(): never {
//     while(true){
//     }
// }
let test; // 모든 타입 허용
test = 1;
test = [1, 2, 3];
let test2; // 기본타입을 제외한 나머지 모두 ( array, tuple 등등 )
// test2 = 1;
test2 = [1, 2, 3];
