const db = require('../database');

class Cities {
    static retrieveAll (callback) {
      db.query('SELECT city_name from cities', (err, res) => {
        if (err.error)
          return callback(err);
        callback(res);
      });
    }
  
    static insert (cityid, callback) {
      db.query('INSERT INTO cities (city_name) VALUES ($1)', [cityid], (err, res) => {
        if (err.error)
          return callback(err);
        callback(res);
      });
    }
  }
  
  module.exports = Cities;