// Interface 사용하기 전
let person = { name: '코딩온', age: 20 };
function getInfo(obj: {name: string, age: number}) {
    console.log( '이름 : ', obj.name );
    console.log( '나이 : ', obj.age );
}
getInfo(person);


// Interface로 바뀌기
interface personData {
    name: string;
    age: number;
}
let person2 = { name: 'sesac', age: 30 };
function getInfo2(obj: personData) {
    console.log( '이름2 : ', obj.name );
    console.log( '나이2 : ', obj.age );
}
getInfo2(person2);


// Interface 옵션 속성
interface personData3 {
    name: string;
    age?: number;
}
let person3 = {name: '새싹'};
function getInfo3(obj: personData3) {
    console.log( '이름3 : ', obj.name );
    console.log( '나이3 : ', obj.age );
}
getInfo3(person3);


// readonly 읽기 전용 속성
interface personData4 {
    readonly name: string;
    age: number;
};
let person4 = {name: 'codingon', age: 40 };
function getInfo4(obj: personData4) {
    // obj.name = 'codngon'; // 읽기 전용 속성이기 때문에 사용 불가
    obj.age = obj.age + 1;
    console.log( '이름4 : ', obj.name );
    console.log( '나이4 : ', obj.age );
}
getInfo4(person4);


// interface 함수 타입
interface login {
    (id: string, pw: string): boolean
};
let loginUser: login = (id, pw) => {
    console.log( '로그인 성공!' );
    return true;
}
// loginUser(1,2); // type error
loginUser('1', '2');


// interface 클래스 타입
interface Book {
    title: string;
    getInfo(): void;
    changeTitle(newTitle:string): void;
}
class MyBook implements Book {
    title: string = '오늘의 도서';
    getInfo() {
        console.log( '제목은 : ', this.title );
    }
    changeTitle(nTitle: string) {
        this.title = nTitle;
        console.log( '새로운 제목은 : ', this.title );
    }
    getTitle() {
        console.log( 'getTitle : ', this.title );
    }
}
let myBook = new MyBook();
myBook.getInfo();
myBook.changeTitle('내일의 도서');
myBook.getTitle();