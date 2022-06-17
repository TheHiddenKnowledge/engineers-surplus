var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

const port = process.env.port || 3000;
app.listen(port);