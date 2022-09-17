class Cat {
    constructor( name, age ) {
        // 속성
        this.name = name;
        this.age = age;
    }

    // 메소드
    mew() {
        console.log( "나는 " + this.name + "~ 야옹" );
    }
    eat() {
        console.log( "먹이를 먹습니다." );
    }
}

let cat1 = new Cat('나비', 1);
let cat2 = new Cat('냥이', 2);

cat1.mew();
cat1.eat();

cat2.mew();