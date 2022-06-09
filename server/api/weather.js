// var express = require('express');
// var Weather = require('../models/weather');


// var router = express.Router();


// router.get('/:city', (req, res) => {
//   var city = req.params.city;
// //   console.log("hello");

//   Weather.retrieveByCity(city, (err, weather) => {
// //    console.log("hello");

//    const myPromise = new Promise((err, weather)=> {
//     if (err) {
//         PromiseRejectionEvent('Failed')
//         return res.json(err);
       
//     };
//     resolve('')
//     return res.json(weather);
    

   
//    }) 

//    myPromise.then((weather) => {
//        console.log(weather);
//    })

// //    }).catch((err) =>{

// //         console.log(err);

// //    }

   
      
// });
  
// });


// module.exports = router;


var express = require('express');
var Weather = require('../models/weather');

var router = express.Router();

router.get('/:city', function (req, res) {

    Weather.retrieveByCity(city, function (err, weather) {
        if (err)
          return res.json(err);
        return res.json(weather);
      });  
      
  var city = req.params.city;

  
});

module.exports = router;