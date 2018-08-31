const request = require('request');

var getWeather = (lat, long, callback) => {

  request({
    url: `https://api.darksky.net/forecast/51ad7dc83a0cfddd4ce38f1458fb92bf/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Error');
    }
  })

}


module.exports.getWeather = getWeather;
