var express = require('express');
var app = express();

app.use(express.static('public'));

var count =0;

var thesubmissions =[];
app.get('/formpost', function (req,res){
    res.send("you submitted"+ req.query.textfild);
    thesubmissions.push(req.query.textfild);
});

app.get('/display', function(req,res){
    var htmlout = "<html><body>";
    for ( var i = 0; i <thesubmissions.length; i++){
        htmlout = htmlout + thesubmissions[i] +"<br>";
    }
    var htmlout =htmlout + "<html><body>";
    res.send(htmlout);
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

app.listen(80, function () {
    console.log('Example app listening on port 3000!')
});