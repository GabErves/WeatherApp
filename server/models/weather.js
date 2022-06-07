const request = require('request-promise');
const API_KEY = `857ceab0f857892db337ec2d844d5acb`;
require('dotenv').config();


class Weather {

    static retrieveByCity (cityid, callback) {
        
      request({
        uri: `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${API_KEY}`,
        json: true
      }).then((res) => {

        callback(res);
      }).catch((err) => {
        console.log(err);
        callback({ error: 'Could not reach OpenWeatherMap API.' });
      });
    }
  }
  module.exports = Weather;
