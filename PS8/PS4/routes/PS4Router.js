var db = require('../mongo/mongo');
var request = require('request');
var express = require('express');
var router = express.Router();


db.connect((err, client) => {
  if (err) {
    console.log(`ERR: ${err}`);
  } else {
    console.log(`Connected`);
  }
});


router.get('/:cityname',(req, res) => {
  const term = req.params.cityname;

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  let mongo = db.getDB();
  mongo.collection('city').find({name: term}).
  toArray(function(err,docs){
    const cityResult = JSON.stringify(docs, null, '\n')
    if (prettyResult.length > 2)
      console.log("Here is the query result from mongo database.", cityResult)
    else
      console.log('We find no result from mongo databse.')
    res.send(cityResult);
  });



  // search through the api call
  const searchRequest = {
    cityid: '101010100',
    term: term
  };

  client.search(searchRequest).then(response => {
    var first_result =  response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(first_result, null, '\n');

    mongo.collection('city').insertOne(JSON.parse(prettyJson),function(error,res){
      if (error) throw(error)
      else console.log(term,'insert one record!')
    })

    console.log(prettyJson);
  }).catch(e => {
    console.log(e);
  })
})

module.exports = router;