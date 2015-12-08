var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
  text: String
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
