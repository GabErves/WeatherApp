const request = require('request-promise');
const Cities = require('./cities');
const API_KEY = ` b35ff6710b09ea0d9ed069e5ee0faa74`; // where the api key would go
require('dotenv').config();


class Weather extends Cities {

    static retrieveByCity (city, callback) {
    retrieveByCity(city,callback)
      request({
        uri: `http://api.openweathermap.org/data/2.5/weather?id=${city}&APPID=b35ff6710b09ea0d9ed069e5ee0faa74`,
        json: true,
        data: { id: city }
      }).then((res) => {

        callback(res);
      }).catch((err) => {
        console.log(err);
        callback({ error: 'Could not reach OpenWeatherMap API.' });
      });
      
    }
    // retrieveByCity(cityid,callback)

}

  module.exports = Weather;
