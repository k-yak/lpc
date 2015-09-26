var express = require('express');
var app = express();

app.set('view engine', 'ejs');  
require('./routes/routes')(app);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('LPC app listening at http://%s:%s', host, port);
});