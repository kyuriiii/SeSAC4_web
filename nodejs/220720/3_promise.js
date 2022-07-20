function call(name) {
    return new Promise( function( resolve, reject ){
        setTimeout( function() {
            console.log( name );
            resolve( name );
        }, 1000 );
    });
}
function back() {
    return new Promise( function( resolve, reject ){
        setTimeout( function() {
            console.log( "back" );
            resolve( "back" );
        }, 1000 );
    });
}
function hell() {
    return new Promise( function( resolve, reject ){
        setTimeout( function() {
            resolve( "callback hell" );
        }, 1000 );
    });
}

function exec() {
    call('kim')
    .then(function(name){
        console.log( name + " 반가워");
        var b = back();
        console.log( b );
        return b;
    })
    .then( function(txt) {
        console.log( txt + "을 실행했구나" );
        return hell();
    })
    .then( function( message) {
        console.log( "여기는 " + message );
    });
}

exec();