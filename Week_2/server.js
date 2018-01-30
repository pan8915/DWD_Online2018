var express = require('express');
var app = express();

app.use(express.static('public'));

var count =0;

app.get('/formpost', function (req,res){
    res.send("you submitted"+ req.query.textfild);
});

app.get('/count', function(req,res){
    count++;
    //res.send
});

app.get('/', function (req, res) {
    res.send('Hello World!')
});
app.get('/get something', function (req, res) {
    res.send('goodbye')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});