const app = require('../index');
const PORT = process.env.PORT || 3000;

// 서버 띄우기
app.listen(PORT, ()=>{
    console.log( "Server Port : ", PORT);
});