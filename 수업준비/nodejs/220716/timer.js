const func1 = setTimeout(() => {
    console.log( "1.5초 후 실행" );
}, 1500);

const func2 = setInterval(() => {
    console.log( "1초마다 반복" );
}, 1000);

const func3 = setTimeout(() => {
    console.log( "실행 안 시킬 것" );
}, 3000);

setTimeout(() => {
    clearTimeout( func2 );
    clearInterval(func3);
}, 2500);

const func4 = setImmediate(() => {
    console.log( "즉시 실행" );
});
const func5 = setImmediate(() => {
    console.log( "즉시 실행되지 않는 것" );
});
clearImmediate( func5 );