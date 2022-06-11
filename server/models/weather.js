const request = require('request-promise');
const Cities = require('./cities');
const API_KEY = ` b35ff6710b09ea0d9ed069e5ee0faa74`; // where the api key would go
const URL = "https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b35ff6710b09ea0d9ed069e5ee0faa74"; 
require('dotenv').config();





class Weather extends Cities {


static retrieveByCity (city, callback) {
    

      request({
        uri: URL,
        json: true,
        data: { id: city }


        
      }).then((res) =>{
           // parsing the body of response object
          return res.json();

      }).then((res) => {
        
         callback(res);

      }).catch((err) => {
        console.log(err);
        callback({ error: 'Could not reach OpenWeatherMap API.' });
      });

      console.log(`Sent: ${city}`);


    }
   
    // retrieveByCity(cityid,callback)

}

  module.exports = Weather;
