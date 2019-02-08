var express = require('express');
var https = require('https');
var fs = require('fs');
var enforceSSL = require('express-enforces-ssl');
var app = express();
require('dotenv').config();

if (process.env.ENFORCE_SSL) {
  app.enable('trust proxy');
  app.use(enforceSSL());
}

var options = {};

app.use(express.static('dist', { extensions: ['html'] }));

var server = https.createServer(options, app);

server.listen(process.env.PORT || 8443);
