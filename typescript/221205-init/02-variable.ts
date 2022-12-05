// : 타입 표기 ( Type Annotation )
let str: string = 'hi';
let num: number = 1;
let flag: boolean = true;
let age: number | string;
age = 10;
age = 'a';
let any: any;

// Array
let arr1: number[] = [1,2,3,4,5];
let arr2: string[] = ['a','b','c','d'];
let arr3: Array<number> = [1,2,3,4,5];
// Tuple
let arr4: [string, number] = ['str',1];
// Enum
enum Names { 홍길동, 코딩온, 새싹 };
let name1: Names = Names.홍길동;
name1 = Names.코딩온;

// void 
// 함수 : 반환값이 없는 친구 / 변수 undefined 와 null만 들어갈 수 있다.
let void1: void = undefined;
function void2(): void {
    console.log('11');
}

// never
// 함수에 사용. 함수의 끝에 절대 도달하지 않는다
// function neverEnd(): never {
//     while(true){

//     }
// }

let test: any; // 모든 타입 허용
test = 1;
test = [1,2,3];

let test2: object; // 기본타입을 제외한 나머지 모두 ( array, tuple 등등 )
// test2 = 1;
test2 = [1,2,3];