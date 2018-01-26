var Todo = require('../models/todo.js')
var express = require('express'),
    app = express();

app.get('/todos', function(req, res) {
    //getting the todos from the db and sending a response back with all the data
    Todo.find().exec(function(err, todos) {
        res.send(todos);
    });
});

app.post('/todos', function(req, res) {
    //creating a new todo in the database with the data thet i got from the controller
    var todo = new Todo(req.body);
    console.log(req.body)
    todo.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            //sending a response back to the controller with the todo that I created
            res.send(todo);
        }
    });
})

app.delete('/todos/:id', function(req, res) {
    Todo.remove({
        //checking if the id of the route is the same of the id of the todo
        _id: req.params.id
    }, function(err, todo) {
        if (err) {
            res.send(err)
        } else {
            //send the todo back to the controller
            res.send(todo)
        }
    });
});

app.put('/todos/:id', function(req, res) {
    console.log("here")
    console.log(req.body)
   Todo.findOneAndUpdate({
     _id: req.params.id
   }, {
    text: req.body.text
 }, function(err, todo) {
     res.send(todo);
   });
 })

 module.exports = app;