const express = require('express');
const app = express();

app.get('/', (req,res) => {
	res.send(req.query.name);
});
app.get('/select', (req,res) => {
	res.send('select page0000');
});

app.listen(8000,()=>{
	console.log('Server is open');
});
