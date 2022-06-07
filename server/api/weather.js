var express = require('express');
var Weather = require('../models/weather');

var router = express.Router();

router.get('/:city', (req, res) => {
  var cityid = req.params.cityid;

  Weather.retrieveByCity(cityid, (err, weather) => {
   console.log("hello");
   
    if (err) {
        return res.json(err);
    
    };
    return res.json(weather);
      
  });
  
});

module.exports = router;