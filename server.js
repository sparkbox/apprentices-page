var express = require('express');
var enforceSSL = require('express-enforces-ssl');
var app = express();
require('dotenv').config();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('dist', { extensions: ['html'] }));

if (process.env.ENFORCE_SSL) {
  app.enable('trust proxy');
  app.use(enforceSSL());
}

var server = app.listen(app.get('port'), () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
