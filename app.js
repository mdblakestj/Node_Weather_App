const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')

require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();




const argv = yargs
.options({
  a:{
     demand: true,
     alias: 'address',
     describe: ' Address to fetch weather for',
     string: true
   }
})
.help()
.alias('help', 'h')
.argv;



geocode.geocodeAddress(argv.address,(errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It is currently ${weatherResults.temperature} degrees, but it feels like ${weatherResults.apparentTemperature} degrees!`)
      }
    });

  }
});


// //lat lon, callback,
// weather.getWeather(37.8267,-122.4233,(errorMessage,weatherResults) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(weatherResults)
//   }
// });

// request({
//   url: 'http://api.soofa.io/data/v1/unique_daily_visitors?api_key=330D48F80E169996DB676438924686809FF38AF02862A1D2485ACE63686A9893&amp;timeframe=this_3_days&timezone=US/Eastern',
//
// }, (error, response, body) => {
//   console.log(body);
// })
