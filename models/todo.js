var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
  text: String,
  done: Boolean
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
