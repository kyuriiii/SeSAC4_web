async function func() {
	return 1;
}
let a = func();
console.log( a );

func().then( function(result) {
	console.log( "result : ", result );
});


async function func() {
	return 1;
}
function func() {
    return new Promise(function( resolve, reject){
        resolve(1);
    });
}