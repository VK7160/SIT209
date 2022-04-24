let request = require('request');

let apiKey = 'd642bf7185f9e196e86c8dd2ee1319f7';
let location = 'Rajpura, Punjab 140401, India';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
request(url, function(err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        console.log('body:', body);
    }
});
