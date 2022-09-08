let express = require( "express" );
let app = express();
let http = require( "http" ).Server( app );
let io = require( "socket.io" )( http );
let publicDir = require( "path" ).join( __dirname + "/public");
app.use( express.static( publicDir ) );

app.get( "/", function( req, res ){
    // let ip = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;
    // console.log( `client(${ip.slice(7)}) connected` );
    res.sendFile( __dirname + "/complete.html" );
} );

// 채팅 참가자 리스트 관리 => { 소켓아이디 : 닉네임 } 구조
let nick_array = [];
function update_list() {
    let nicks = [];
    for ( let socket in nick_array ){
        nicks.push(nick_array[socket]);
    }
    io.emit( "update_nicks", nicks );
    console.log(nick_array);
}

function getTime() { // 채팅메세지 시간 구하기
    const now = new Date();
    const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    const minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    const seconds = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();    
    return `${hours}:${minutes}:${seconds}`;
}

io.on( "connection", function ( socket ){    
    console.log( "Server Socket Connected", socket.id ); // 최초로 입장했을 때
    nick_array[socket.id] = socket.id; // 채팅에 참가한 사람들의 목록에 새로운 참가자 추가 
    io.emit( "notice", `${socket.id.slice(0,5)}*****(socket.id)님이 입장하셨습니다.`); // 입장한 사람에 대한 알림 메세지 전송
    update_list();

    socket.on( "sendMsg", ( msg ) =>{ // 새로운 채팅 메세지를 받았을 때
        if ( nick_array[socket.id] !== msg["myNick"] ) { // (1) 클라이언트의 닉네임의 변화 체크 + 닉네임 리스트 업데이트
            if ( Object.values(nick_array).indexOf( msg["myNick"] ) > -1 ){
                socket.emit( "error", "이미 존재하는 대화명입니다." );
                return false;
            } else {
                nick_array[socket.id] = msg["myNick"];
                update_list();
            }
        }
        const msgTime = getTime();
    
        if ( msg["DM"] !== "전체" ){ // (2) 귓속말 여부 체크
            let DM_socketID = Object.keys(nick_array).find( key => nick_array[key] === msg["DM"]);
            const data = { msg, msgTime , DM:"(속닥속닥) " };
            io.to(DM_socketID).emit( "newMsg", data )
            socket.emit( "newMsg", data )
        } else {
            const data = { msg, msgTime };
            io.emit( "newMsg", data );
        }
    } );


    socket.on( "disconnect", function () { // 접속한 사람이 퇴장했을 시에는 목록에서 제거 후, 퇴장 메세지 보내기!
        console.log( "user disconnected: ", socket.id );
        io.emit( "notice", `${nick_array[socket.id]}님이 퇴장하셨습니다.`)
        delete nick_array[socket.id];
        update_list();
    });
} );

http.listen( 3000, ()=>{
    console.log( "listening on *:3000" );
});