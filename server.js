// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var os = require('os');

app.use(express.static('public'));



app.get("/", function (request, response) {
  var ip=request.headers['x-forwarded-for'];
  var res = ip.split(',');
  var language=request.headers["accept-language"].split(',')[0];
  var OST = os.type();
  var OSA = os.arch();
  var OSP = os.platform();
  var result = {
    ipaddress: res[0],
    "language":language, 
    "software":""+OST+"; " +OSP+"; "+OSA+";"
  }
  response.send(result);
  
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
