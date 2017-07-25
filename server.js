var express = require('express');
var path = require('path');
var swig = require('swig');
var db = require('./db');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('Listening on port 3000');
});

app.use(morgan('dev'));

swig.setDefaults({ cache: false });
// app.use(express.static(path.join(__dirname, 'node_modules')));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.use('/products', require('./routes/products.js'));


app.get('/', function(req, res, next){
    res.render('index.html' , { title: 'Welcome' });
    next();
});

module.exports = db;