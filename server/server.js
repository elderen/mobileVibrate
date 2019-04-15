var express = require('express');
var bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

// Creating the express application
var app = express();

// Using middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

//routes
const routes = require('./router/router.js');
app.use('/home', routes);

app.get('/', function(req, res) {
  res.json({message: "Welcome"});
})

var port = 3000;
app.listen(port, function () {
  console.log('Listening on localhost: ' + port);
});