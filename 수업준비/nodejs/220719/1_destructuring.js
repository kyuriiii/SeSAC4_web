/* 변수 구조 분해 */
let lists = ['apple', 'grape'];
[item1, item2, item3 = 'peach'] = lists;

console.log( "item1 : ", item1 );
console.log( "item2 : ", item2 );
console.log( "item3 : ", item3 );

let x = 1, y = 3;
[x,y] = [y,x];
console.log( x, y ); 

/* 객체 구조 분해 */
let obj = {
    key1: 'one',
    key2: 'two'
};
let { key1: newKey1, key2, key3 = 'three' } = obj;
console.log( "key1 : ", key1 ); // 오류 날 부분
console.log( "newKey1 : ", newKey1 );
console.log( "key2 : ", key2 );
console.log( "key3 : ", key3 );

let { a, b } = { a: 10, b:20 };
console.log( "a : ", a );
console.log( "b : ", b );

let { c, d, ...rest } = { c: 30, d: 40, e: 50, f: 60 };
console.log( "c : ", c );
console.log( "d : ", d );
console.log( "rest : ", rest );