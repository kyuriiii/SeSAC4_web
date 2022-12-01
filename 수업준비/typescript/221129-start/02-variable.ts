// 기본 타입을 이용할 시에는 :을 이용해 자바스크립트 코드에 타입을 정의한다.
// 위와 같이 타입을 정의하는 방식을 "타입 표기(Type Annotation)" 라고 한다.

/* Primitive */
//// String
let str: string = 'hi';
console.log('str : ', str);
//// Number
let num: number = 1;
console.log('num : ', num);
//// Boolean
let flag: boolean = true;
console.log('flag : ', flag);
//// Union
let age: number | string;

age = 10;
age = '15';

// if ( 변수명 instanceof 타입 )

/* Object */
//// Array
let arr1: number[] = [1,2,3,4,5]; // 간단 선언
console.log('arr1 : ', arr1);
let arr2: Array<number> = [1,2,3]; // 제네릭 사용
console.log('arr2 : ', arr2);
//// Tuple
// Tuple은 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식
let arr3: [string, number] = ['str', 1];
console.log( "arr3[1] : ", arr3[1] );
// console.log( arr3[1].concat('!') ); // Error, 'number' does not have 'concat' function
// arr3[2] = 'hello'; // Error, Property '2' does not exist on type '[string, number]'.
//// Enum
// Enum은 C, Java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미한다.
enum Names { 홍길동, 성춘향, 코딩온, 새싹 };
let name1: Names = Names.홍길동;
let name2: Names = Names.코딩온;
console.log( "name : ", name1, " & ", name2 );
//// Any
// 기존에 Javascript로 구현되어 있는 웹 서비스 코드이 TypeScript를 점진적으로 적용할 때 활용하면 좋은 타입
// 모든 타입에 대해서 허용한다는 의미를 갖고 있따.
let any1: any = 'sesac';
let any2: any = 10;
let any3: any = [1, 'a', false];
//// Void
// 변수에는 undefined와 null만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입이다.
let void1: void = undefined;
function void2(): void {
    console.log( 'void2' );
}
void2();
//// Never
// 함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입이다.
function neverEnd(): never { 
    console.log('neverEnd');
    while(true){

    }
}
// neverEnd(); // 무한 반복하는 내용이 작성되어야 type error가 생기지 않는다.
