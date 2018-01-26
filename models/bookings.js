var mongoose = require('mongoose');

var BookingsSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  arrivalDate: { type: Date, default: Date.now },
  departureDate: { type: Date, default: Date.now },
  insertionDate: Date.now,
  notes:String,
  archived: Boolean
});

var Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
