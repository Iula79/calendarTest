var Booking = require('../models/bookings.js')
var express = require('express'),
    app = express();

    app.get('/bookings', function(req, res) {
        //getting the bookings from the db and sending a response back with all the data
        Booking.find().exec(function(err, bookings) {
            res.send(bookings);
        });
    });
    
    app.post('/bookings', function(req, res) {
        //creating a new booking in the database with the data thet i got from the controller
        var booking = new Booking(req.body);
        console.log(req.body)
        booking.save(function(err) {
            if (err) {
                console.log(err);
            } else {
                //sending a response back to the controller with the booking that I created
                res.send(booking);
            }
        });
    })

module.exports = app;