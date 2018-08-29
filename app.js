const request = require('request');
// const yargs = require('yargs');
// const geocode = require('./geocode/geocode.js')
//
// require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();
//
//
//
//
// const argv = yargs
// .options({
//   a:{
//      demand: true,
//      alias: 'address',
//      describe: ' Address to fetch weather for',
//      string: true
//    }
// })
// .help()
// .alias('help', 'h')
// .argv;
//
// geocode.geocodeAddress(argv.address,(errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results,undefined,2));
//   }
// });



// request({
//   url: 'http://api.soofa.io/data/v1/unique_daily_visitors?api_key=330D48F80E169996DB676438924686809FF38AF02862A1D2485ACE63686A9893&amp;timeframe=this_3_days&timezone=US/Eastern',
//
// }, (error, response, body) => {
//   console.log(body);
// })

request({
  url: 'https://api.darksky.net/forecast/51ad7dc83a0cfddd4ce38f1458fb92bf/37.8267,-122.4233',
  json: true
}, (error, response, body) => {
  if (response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('unable to fetch weather')
  }
})
