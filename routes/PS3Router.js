var express = require('express');
var router = express.Router()


router.get('/', function(req, res, next){
    res.render('PS3G', { string: 'NodeJs is interesting.' });
});

router.post('/', function(req, res, next) {
    var myJSON = {string:(req.body.string), length: (req.body.string.length)};
    res.render('PS3P',myJSON);
});

module.exports = router;