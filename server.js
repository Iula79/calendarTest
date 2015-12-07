var express = require('express'),
    session = require('express-session'),
    mogoose = require('mongoose'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    bcrypt = require('bcrypt'),
    request = require('request'),
    app = express();

app.use(logger('dev'));
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(session({
  secret: "string",
  saveUninitialized: false,
  resave: false
}));

app.listen(3000, function () {

    console.log('server running on localhost 3000');

});
