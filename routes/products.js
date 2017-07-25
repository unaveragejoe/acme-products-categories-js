var router = require('express').Router();
var db = require('../db.js');

var data = db.list();
module.exports = router;

router.get('/', function(req, res, next){
    res.render('products', { data: db.getCategoryNames()})
});

