/*
    function 함수이름 ( 변수명:타입 ) : 반환타입 {}
*/
// ES2015 
const func1 = (a:string) : void => {
    console.log( "func1" );
}
const func2 = function(){
    console.log("func2");
}

function sum1(a:number, b?:number) : number {
    return 1;
}

let person = { name:'코딩온', age: 10};
function getInfo(obj: {name: string, age: number}){

}
getInfo(person)
interface PersonData {
    readonly name: string;
    age: number;
    nickname?: string;
}
function getInfo2(obj: PersonData){

}
let person2:PersonData = { name:'코딩온', age: 10};
person2.age = person2.age + 1;

interface login {
    (id: string, pw:string ):boolean
};
let loginUser:login = (id,pw) => {
    return true;
}
interface Book {
    title: string;
    getInfo(): void;
    changeTitle(newTitle: string): void;
}
class MyBook implements Book {
    title = '책';
    date = '2022-12-05';
    getInfo(){
        console.log("정보")
    }
    changeTitle(newTitle: string): void {
        
    }
}
