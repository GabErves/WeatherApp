const request = require('request-promise');
const API_KEY = ' b35ff6710b09ea0d9ed069e5ee0faa74';
require('dotenv').config();


class Weather {

    static retrieveByCity (city, callback) {
      request({
        uri: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.API_KEY}`,
        json: true
      }).then((res) => {
        callback(res);
      }).catch((err) => {
        console.log(err);
        callback({ error: 'Could not reach OpenWeatherMap API.' });
      });
    }
  }