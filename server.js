// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/api/timestamp/:date_string', function(req, res) {
  let date = new Date(req.params.date_string);
  if (date) {
    res.send({ unix: date.getTime(), utc: date.toUTCString() });
  }
});
app.get('/', function(req, res) {
  res.send('Example Usage: [project url]/api/timestamp/2015-12-25');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Hello Express");
});

