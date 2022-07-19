const http = require('http');
const fs = require('fs').promises;

const server = http.createServer( async function(req, res){
    try {
        const data = await fs.readFile('./5_http.html');
        res.writeHead(200);
        res.end(data);
    } catch(err) {
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
});
// const server = http.createServer( function(req, res){
//     res.writeHead( 200 );
//     res.write( "<h1>Hello!</h1>");
//     res.end("<p>End</p>");
// });

server.on('request', function(code){
    console.log( "request 이벤트" );
});
server.on('connection', function(code){
    console.log( "connection 이벤트" );
});
server.listen(8080, function(){
    console.log( '8080번 포트로 서버 실행' );
});