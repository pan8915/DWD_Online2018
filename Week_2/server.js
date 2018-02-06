var express = require('express');
var app = express();
var feedbackData = require('feedback.json');

app.use(express.static('public'));

var count =0;

var thesubmissions =[];

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');

});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/api', function(req,res){
    res.json(feedbackData);
});


app.get('/formpost', function (req,res){
    //res.send("you submitted"+ req.query.textfild);
    thesubmissions.push(req.query.textfield);
    res.redirect('/display');
})

app.get('/display', function(req,res){
    var htmlout = "<html><body>";
    for ( var i = 0; i <thesubmissions.length; i++) {
        htmlout = htmlout + thesubmissions[i] + "<br>";
    }
    htmlout =htmlout + "</body></html>";
    res.send(htmlout);
})


app.get('/count', function(req,res){
    count++;
    res.send('<html><body><h1>'+ count + '</h1></body></html>');
})

app.get('/', function (req, res) {
    res.send('Hello World!');
})
app.get('/somethingelse', function (req, res) {
    res.send('Goodbye');
})

app.listen(80, function () {
    console.log('Example app listening on port 80')
})