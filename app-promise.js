const request = require('request');
const yargs = require('yargs');
const axios = require('axios')

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

var encodedAddress = encodeURIComponent(argv.address);

var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new ERROR('unable to find that address');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherURL);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
}).catch((e) => {
  if (e.code === 'ENOTFOUND'){
    console.log('Unable to connect to API server')
  } else {
    console.log(e.message);
  }
})
