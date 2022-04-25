/**
* @api {get} /api/users AllUsers An array of all users
* @apiGroup Device
* @apiSuccessExample {json} Success-Response:
*  [
*    {
*      "_id": "dsohsdohsdofhsofhosfhsofh",
*      "email": "vanshkhanna416@gmail.com",
*      "password": "12345678",
*    }
*  ]
* @apiErrorExample {json} Error-Response:
*  {
*    "User does not exist"
*  }
*/
const port = 5000;

const Device = require('../models/users');
const express = require('express');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(`${__dirname}/public/generated-docs`));

app.get('/docs', (req, res) => {
    res.sendFile(`${__dirname}/public/generated-docs/index.html`);
});

const app = express();

app.get('/api/test', (req, res) => {
    res.send('The API is working!');
});

app.get('/api/users', (req, res) => {
    Device.find({}, (err, devices) => {
        if (err == true) {
            return res.send(err);
        } else {
            return res.send(devices);
        }
    });
});

app.post('/api/users', (req, res) => {
    console.log(req.body);
});

app.post('/api/users', (req, res) => {
    const { name, user, sensorData } = req.body;
    const newDevice = new Device({
        email,
        password
    });
    newDevice.save(err => {
        return err
            ? res.send(err)
            : res.send('successfully added user and password');
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});