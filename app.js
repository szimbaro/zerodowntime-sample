var express = require('express');

var app = express();

console.log('server starting');

app.get('/', function(req, res){
    res.send('ZeroDowntime now is possible!');
});

app.listen(8080);
