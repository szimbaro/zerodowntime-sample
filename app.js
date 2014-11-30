var express = require('express');

var app = express();

console.log('server starting');

app.get('/', function(req, res){
    res.send('ZeroDowntime it\'s possible!');
});

app.listen(8080);
