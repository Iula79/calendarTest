var mongoose = require('mongoose');

var BookingSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  arrivalDate: { type: Date},
  departureDate: { type: Date},
  insertionDate: {type: Date, default: Date.now},
  guests: Number,
  notes:String,
  archived:  {type: Boolean, default: false}
});

var Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
