let list = ['apple', 'banana'];

// let item1 = list[0];
// let item2 = list[1];

[item1, item2 = 'peach', item3 = 'melon'] = list;

console.log( "item1 : ", item1 );
console.log( "item2 : ", item2 );
console.log( "item3 : ", item3 );

let x=1;
let y=3;

[ y,x ] = [x,y];

// let temp = x;
// x = y;
// y=temp;
