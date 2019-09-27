var express = require('express');
var server = express();
var fs = require('fs');
var path = require('path');

server.get('/',(req, res, next)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})
var css = path.join(__dirname, 'interface.css');
var btn = path.join(__dirname, 'button.js');
var img = path.join(__dirname, 'image');
server.use('/interface.css',express.static(css));
server.use('/button.js',express.static(btn));
server.use('/image',express.static(img));
server.get('/download/',(req,res,next)=>{
    var link = path.join(__dirname,'image/All.jpg');
    res.download(link);
})
server.listen(3000, ()=>{
    console.log('Dang lang nghe tai 3000');
})