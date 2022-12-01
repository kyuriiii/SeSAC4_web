/*
Cat 과 Fish 2개의 클래스를 아래의 조건을 부합하게 만들어주세요.
1. Cat과 Fish 클래스는 readonly 속성으로 name 변수를 갖는다.
2. Cat 클래스는 sayHello() 메서드를 가지며 울음소리("야옹") 을 return 한다.
3. Fish 클래스는 dive() 메서드를 갖는데, 이때 dive 메서드는 숫자를 parameter을 받고, '~m 다이빙 했습니다.' 를 return 한다. 
4. Pet이라는 타입을 이용해 Cat 과 Fish를 Union 타입으로 선언한다.
5. talkPet(pet: Pet):string  함수는 instanceof 를 이용해 Cat 클래스면 sayHello를 실행 후 출력, Fish 클래스면 '물고기는 말을 하지 못합니다. 를 출력하세요.
6. talkPet() 함수를 cat 한 번, fish 한 번을 보내서 총 2번 실행해주세요.
*/

class Cat{
    constructor(readonly name: string){};
    
    sayHello(): string{
        return '야옹';
    }
}

class Fish{
	constructor(readonly name: string){};
    
    div(howDeep: number): string{
        return `${howDeep}m 다이빙 했습니다.`;
    }
}

type Pet = Cat | Fish; // 유니온 타입

function talkToPet(pet: Pet): string{
    if(pet instanceof Cat){ // 타입가드
        return pet.sayHello();
    }else if(pet instanceof Fish){
        return '물고기는 말을 하지 못합니다.';
    }
}

const myCat = new Cat("Sammy");
const myFish = new Fish("Nimo");

console.log(talkToPet(myCat));
console.log(talkToPet(myFish));