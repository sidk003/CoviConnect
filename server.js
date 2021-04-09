const http = require('http')
const express = require("express");
const connecToDB = require("./config/db");
const router = require("./api/user/app.router");
var bodyParser = require('body-parser')

connecToDB();
const app = express();
const port = process.env.PORT || 4000
const server = http.createServer(app)

app.use(express.json());
app.use(function (req, res, next) {
    // Mentioning content types
    res.setHeader('Content-Type', 'application/json; charset=UTF-8');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'content-type,Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions) 
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use("/api/user", router);

server.listen(port,(
    console.log(`Server running on port ${port}`)
))