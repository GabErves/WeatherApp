// var express = require('express');
// var Cities = require('../models/cities');

// var router = express.Router();

// router.get('/', (req, res) => {
//   Cities.retrieveAll((err, cities) => {
//     if (err)
//       return res.json(err);
//     return res.json(cities);
//   });
// });

// router.post('/', (req, res) => {
//   var city = req.body.city;

//   Cities.insert(city, (err, result) => {
//     //   console.log("hello");
//     if (err){
//         console.log(err);

//         console.log(res);
//         return res.json(err);
        

//     }
//     // console.log("result");
      
//     return res.json(result);

//   });
// });

// module.exports = router;

var express = require('express');
var Cities = require('../models/cities');
var Weather = require('../models/weather');

var router = express.Router();

// router.get('/', function (req, res) {
//   Cities.retrieveAll(function (err, cities) {
//     if (err)
//       return res.json(err);
//     return res.json(cities);
//   });
// });


router.get('/:city', function(req, res)  {

    var city = req.params.city;
  
    console.log(city);
  
  Weather.retrieveByCity(city, function(err, weather)  {
    if (err) 
     return res.json(err);
   return res.json(weather);
  });
  //var city = req.params.city;
  });

router.post('/:city', function (req, res) {
  var city = req.body.city;
  
  
  Cities.insert(city, function (err, result) {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;