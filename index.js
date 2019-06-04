const express=require('express');
const bodyparser=require('body-parser')
const app=express();

app.use(bodyparser());
app.get('/random',function(req,res){
	res.send(""+Math.random()*100);
});

// app.post('/sayhello',function(req,res){
// 	res.send("Hello "+req.body.name)
// });
app.get('/form',function(req,res){
	res.sendFile("/home/ritik/Random/doc/HTML_form.html");
});
app.post('/mydata',function(req,res){
	res.json(req.body);
	//res.json();
});
app.listen(8080);