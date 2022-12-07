var a = '이름';
console.log( a );


// 변수
// 키워드 변수이름: 타입 = 값;
var str1:string = '문자열';
var num1:number = 1;
var flag:boolean = true;
var any:any;
any = 1;
any = '문자';
any = false;
any = [];

var arr1: number[] = [1,2,3,4,5];
var arr2: string[] = ['a','b'];
// 튜플 : 배열의 길이가 고정되어 있고 타입도 지정
var arr3:[string, number] = ['1',2];
var arr4:object = [1,'a'];

enum Values { 값1, 값2 };
var v1:Values;
v1 = Values.값1;

var v2: string|number|boolean;
v2 = 1;
v2 = 'a';
v2 = true;

// 함수
/*
function 함수이름(매개변수: 타입) : 반환값타입{
    반환값
}
*/
function sum1(a,b) {
    return a + b;
}
console.log( sum1(1,'a') );
function sum2(a: number, b:number): number {
    return a + b;
}
console.log( sum2(1,2) );
console.log( sum2(3,NaN));
function sum3(a: number, b=10): number {
    return a + b;
}
console.log( sum3(1,3) )
console.log( sum3(1) )

const func1 = (a:string) : void => {
    console.log( "func1" );
}
function func2(){
    console.log("func2");
}
// 인터페이스
interface Student {
    name: string;
    age: number;
    nickname?: string;
};
var stu1:Student = {
    name: '이름',
    age: 10,
}
var stu2:Student = {
    name: '이름2',
    age: 20,
    nickname: 'student2'
}

interface Shape {
    width: number;
    getLength(): number;
}
class Square implements Shape {
    width: number;
    height: number;
    getLength():number {
        return 0;
    }
}

// 클래스
/*
class 클래스이름 {
    변수명1: 타입;
    constructor(변수명: 타입, 변수명: 타입) {
        this.변수명1 = 변수명;
    }
}
*/
interface Developer {
    name: string;
    getName(): string;
}
class Developer1 implements Developer{
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}
var dev1 = new Developer1("새싹");
console.log( dev1.getName() );

class Developer2 {
    constructor( readonly name: string) {}
    getName(): string {
        return this.name;
    }
}
var dev2 = new Developer2("코딩온");
console.log( dev2.getName() );

var abc = 1;
console.log( typeof(abc) );

// 타입 검사
// primitive type => typeof
// object type => instanceof
if ( dev2 instanceof Developer1 ){

}

// 제네릭 ( Generics )
// 재사용성을 높이기 위해서
// Array<number> = number[]
// Array<>
// const [age, setAge] = useState<number>(0)

function getText<S>(text:S) : S {
    return text;
}
getText<number>(1);
getText<string>('a');
getText(1);