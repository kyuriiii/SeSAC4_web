function login(id, pw, cb) {
    setTimeout(() => {
        console.log("사용자 입장");
        cb(id);
    },3000);
}

function getVideo( id, cb ) {
    setTimeout(() => {
        cb( ['아이언맨1', '아이언맨2']);
    }, 2000);
}
function getDetail( video, cb ) {
    setTimeout(() => {
        cb("비디오 제목은 : " +  video);
    }, 1000);
}
login('kim', '1234', user => {
    console.log( 'user님 환영' );
    getVideo( user, (videos) =>{
        console.log( videos );
        getDetail(videos[0], title => {
            console.log(title);
        });
    });
});