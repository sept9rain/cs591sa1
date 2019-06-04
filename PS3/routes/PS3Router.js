var express = require('express');
var router = express.Router()
var bodyParser = require('body-parser')


router.get('/', function(req, res, next){
    res.render('PS3G', { string: 'NodeJs is interesting.' });
});

router.post('/', function(req, res, next) {
    var myJSON = [];
    myJSON['oristring'] = req.body['string'];
    myJSON['stringlength'] = req.body['string'].length;
    res.render('PS3P',myJSON);
});

module.exports = router;