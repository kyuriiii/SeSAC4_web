let obj = {
    key1: "value1",
    key2: "value2",
    key3: function(){
        console.log( "a" );
    }
};

const { key1: key00, key2, key3, key4="a" } = obj;
key3();
console.log( key00 );

let obj2 = { a:1, b:2, c:3, d:4 };
const { a, b, ...rest } = obj2;

console.log( rest );