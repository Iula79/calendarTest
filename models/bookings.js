var mongoose = require('mongoose');

var BookingSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  arrivalDate: { type: Date},
  departureDate: { type: Date},
  insertionDate: {type: Date, default: Date.now},
  notes:String,
  archived: Boolean
});

var Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
