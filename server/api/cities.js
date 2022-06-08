var express = require('express');
var Cities = require('../models/cities');

var router = express.Router();

router.get('/', (req, res) => {
  Cities.retrieveAll((err, cities) => {
    if (err)
      return res.json(err);
    return res.json(cities);
  });
});

router.post('/', (req, res) => {
  var city = req.body.city;

  Cities.insert(city, (err, result) => {
    //   console.log("hello");
    if (err){
        console.log(err);

        console.log(res);
        return res.json(err);
        

    }
    // console.log("result");
      
    return res.json(result);

  });
});

module.exports = router;