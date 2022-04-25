const express = require('express')
const helmet = require("helmet");
const fs = require('fs')
const port = 3060
const https = require('https')
var sslOptions = {
key: fs.readFileSync('key.pem'),
cert: fs.readFileSync('cert.pem'),
passphrase: 'trial'
};
var app = express();

// This sets custom options for the `referrerPolicy` middleware.
app.use(
    helmet({
        contentSecurityPolicy: false,
        referrerPolicy: { policy: "no-referrer" },
    })
);

// This sets custom options for the `referrerPolicy` middleware.
app.use(
    helmet({
        contentSecurityPolicy: false,
        referrerPolicy: { policy: "no-referrer" },
    })
);

app.get('/', (req, res) => {
    res.send('hello world');
    });
var server = https.createServer(sslOptions, app).listen(port, function(){
console.log("Express server listening on port " + port);
});

const base = `${__dirname}/public`;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(`${base}/home.html`);
});

app.get('/login', (req, res) => {
    res.sendFile(`${base}/login.html`);
});

app.get('/home', (req, res) => {
    res.sendFile(`${base}/home.html`);
});

app.get('/passenger', (req, res) => {
    res.sendFile(`${base}/passenger.html`);
});

app.get('/driver', (req, res) => {
    res.sendFile(`${base}/driver.html`);
});

app.get('/comingsoon', (req, res) => {
    res.sendFile(`${base}/comingsoon.html`);
});

app.get('/*', (req, res) => {
    res.sendFile(`${base}/404.html`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});