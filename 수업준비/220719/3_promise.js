function promise1(flag) {
    return new Promise( function( resolve, reject ) {
        if ( flag ) {
            resolve( "promise 상태는 fulfilled. then으로 연결됩니다. 이때의 flag가 true입니다." );
        } else {
            reject( "promise 상태는 rejected. catch로 연결됩니다. 이때의 flag는 false입니다." );
        }
    })
}

promise1(true)
    .then( function(result){
        console.log( result );
    })
    .catch( function(err) {
        console.log( err );
    });
    
promise1(false)
    .then( function(result){
        console.log( result );
    })
    .catch( function(err) {
        console.log( err );
    });