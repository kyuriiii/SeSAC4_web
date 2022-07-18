function login(id, pw) {
    return new Promise( function ( resolve, reject ) {
        setTimeout( function() {
            console.log( "사용자 입장" );
            resolve(id);
        }, 3000);
    })
}
function getVideo(id) {
    return new Promise( function( resolve, reject ){
        setTimeout( function() {
            resolve(['아이언맨1', '아이언맨2']);
        }, 2000);
    });
}
function getDetail(video) {
    return new Promise( function( resolve, reject ){
        setTimeout(function() {
            resolve( "비디오 제목은 : " + video);
        });
    } );
}
login( 'kim', '1234' )
    .then( function(user){
        console.log( 'user님 환영' );
        return getVideo(user);
    })
    .then( function(videos){
        console.log( videos );
        return getDetail( videos[0] );
    })
    .then( function(title){
        console.log( title );
    });