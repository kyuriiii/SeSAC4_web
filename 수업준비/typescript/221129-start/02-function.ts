// 1) 함수의 기본적인 타입 선언
function sum1(a, b) {
    return a + b;
}
function sum2(a:number, b:number): number {
    return a + b;
}
console.log( 'sum2 - 1 : ', sum2(1,2) );
// console.log( 'sum2 - 2 : ', sum2(1,2,3) ); // Error

// 2) 함수의 인자
// 함수의 인자를 모두 필수 값으로 간주한다. 
// 따라서, 함수의 매개변수를 설정하면 undefined 나 null이라도 인자를 넘겨야 하며, 컴파일러에서 정의된 매개변수 값이 넘어 왔는지 확인한다.
// 만약, 인자를 넘기지 않아도 error가 나지 않게 하려면 ?를 이용한다.
function sum3(a:number, b?:number): number {
    return a + b;
}
console.log( 'sum3 - 1 : ', sum3(1,2) );
console.log( 'sum3 - 2 : ', sum3(1) );
// 매개변수 초기화
function sum4(a:number, b=10): number {
    return a + b;
}
console.log( 'sum4 - 1 : ', sum4(1, undefined) );
console.log( 'sum4 - 2 : ', sum4(10) );
console.log( 'sum4 - 3 : ', sum4(1,2) );