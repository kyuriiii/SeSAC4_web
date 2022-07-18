// const func1 = new Promise( ( resolve, reject ) => {
//     var flag = true;
//     if ( flag ) resolve( "성공" );
//     else reject("실패");
// })
const func1 = new Promise( function ( resolve, reject ){
    var flag = true;
    if ( flag ) resolve( "성공" );
    else reject("실패");
})

// func1.then( value => {
//     return value + "1";
// }).then(result => {
//  console.log(result);
// }).catch( err => {
//     console.log( err );
// });
func1.then( function(value){
    return value + "1";
}).then( function(result){
    console.log( result );
})