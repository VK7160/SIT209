const express = require('express');
const app = express();

const port = 3000;
const base = `${__dirname}/public`;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(`${base}/home.html`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
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