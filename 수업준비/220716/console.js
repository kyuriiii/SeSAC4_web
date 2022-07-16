const obj = {
    outside: {
        inside: {
            key: 'value'
        }
    }
};
console.time("시간 측정");

console.log("평범한 로그");
console.error("error 메세지");

console.table([{ name: 'abc', birth: 1990 }, { name: 'def', birth: 1980}]);

console.dir(obj, { colors: false, depth: 2 } );
console.dir(obj, { colors: true, depth: 1 } );

console.timeEnd("시간 측정");
console.trace();