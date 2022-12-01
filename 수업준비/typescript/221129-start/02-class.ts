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

// instanceof
// instanceof는 클래스의 타입을 감지하는 역할을 하고, 모든 클래스의 기본 클래스인 Object에는 모두 true가 나온다.
// instanceof로는 primitive 타입에 대한 것은 비교할 수 없다. primitive 타입은 typeof 로 비교할 것!
if ( developer2 instanceof Developer1 ) {
    console.log( "developer2 is Developer1" );
} else if ( developer2 instanceof Developer2 ) {
    console.log( 'developer2 is Developer2' );
}

