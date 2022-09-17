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

async function exec(){
    let user = await login( "kim" );
    console.log( user + "님 환영합니다.");
    let videos = await getVideo(user);
    console.log( videos );
    let title = await getDetail(videos[0]);
    console.log( title );
}

exec();