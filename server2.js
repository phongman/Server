var express = require('express');
var server = express();
var data = require('./database');
var path = require('path');
var cors = require('cors');

server.use(cors());
server.get('/home/:page',function(req,res,next){
    var page = parseInt(req.params.page)-1;
    var start = page*10;
    var end = start + 10;
    res.json(data.slice(start,end));
})


server.listen(8000,()=>console.log('dang lang nghe tai 8000'));