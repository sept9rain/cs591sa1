var request = require('request');
var express = require('express');
var router = express.Router();

let cityid = '101010100';

router.route('/')
    .get(function(req, res, next){
        doReq()
            .then(function (body) {
                const value = JSON.parse(body);
                res.render('PS4G', { city: value['cityEn'] , wea: value['data'][0]['wea'] });
            })

            .catch(function(err) {
                console.log(`ERROR! ${err}`);
            });

});
const doReq =  function () {
    return new Promise(function (resolve, reject) {
        const options = {
            method : 'GET',
            url:'https://www.tianqiapi.com/api/?version=v1&cityid='+cityid,
        };

        request(options, function (error, response, body) {
            if (error)
                reject(new Error(error))
            else {
                resolve(body)
            }
        })
    })
}

module.exports = router;