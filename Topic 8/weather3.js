let request = require('request');

let APIKEY = '2e0753488689e9c9dd9d28d992c6db07';
let lat = '30.48';
let lon = '76.59';
let url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`
request(url1, function(err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        console.log('body:', body);
    }
});

