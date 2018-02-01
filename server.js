var express = require('express'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    fs = require('fs'),
    bcrypt = require('bcrypt'),
    request = require('request'),
    app = express();
    bookingContr = require('./controllers/bookingController');

app.use(logger('dev'));
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/book', bookingContr)
// app.use(session({
//     secret: "string",
//     saveUninitialized: false,
//     resave: false
// }));

var port = process.env.PORT || 3000

app.listen(port, function() {
    console.log('server running on localhost 3000');
});

mongoose.connect('mongodb://localhost/calendartest', function(err) {
    if (err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});


app.get('/', function(req, res) {
    res.send('connected via server.js route');
});



 
