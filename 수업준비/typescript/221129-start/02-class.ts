class Developer1 {
    readonly name: string;
    constructor(newName: string) {
        this.name = newName;
    }
    getName(){
        console.log( this.name );
    }
}

let developer1 = new Developer1('sesac');
developer1.getName();
// developer1.name = '새싹';


// readonly를 이용하는 클래스 코드 줄이기
class Developer2 {
    constructor(readonly name: string) {}
    getName(){
        console.log( this.name );
    }
}
let developer2 = new Developer2('codingon');
developer2.getName();

/* NO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 추상화 클래스 ( Abstract Class )
// 추상 클래스는 인터페이스와 비슷한 역할을 하면서도 조금 다른 특징을 갖고 있다.
// 추상 클래스는 특정 클래스의 상속 대상이 되는 클래스이며 좀 더 상위 레벨에서 속성, 메서드의 모양을 정의한다.
abstract class Developer3 {
    abstract coding(): void;
}
class FrontDeveloper extends Developer3 {
    coding(): void {
        console.log( '웹을 개발합니다.' );
    }
    debugging(): void {
        console.log( 'debug 합니다.');
    }
}
*/