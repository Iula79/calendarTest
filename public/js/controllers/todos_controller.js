meanApp.controller('TodosCtrl', ['$http', '$log', todosCtrl]);

function todosCtrl($http, $log) {
    $log.info("Inside the controller");

    var self = this;

    self.all = [];
    self.newTodo = {};
    self.addTodo = addTodo;
    self.deleteTodo = deleteTodo;
    self.editTodo = editTodo;

    getTodos();

    //function that shows all the todos
    function getTodos() {
        $http({
            //using the method get to show the todos in the view
            //the request then goes to the server
            method: 'GET',
            url: '/todos'
        }).then(function(res) {
            //saving
            self.all = res.data;
        }, function(err) {
            console.log(err);
        });
    }


    //function that allows us to add new todos to our todoList
    function addTodo() {
        $http({
            method: 'POST',
            url: '/todos',
            //takes the data that comes in and saves it in the object newTodo
            data: self.newTodo
        }).then(function(res) {
            getTodos();
            $log.info(res.data);
        }, function(err) {
            console.log(err);
        });
        self.newTodo = {};
    }

    //function that allows us to delete specific todos from our todoList
    function deleteTodo(todo) {
        console.log("indelete")
        $http({
            method: 'DELETE',
            url: '/todos/' + todo._id,
            data: self.newTodo
        }).then(function(res) {
            //running this function to update the list
            getTodos();
            $log.log(self);
        }, function(err) {
            console.log(err);

        });
        self.newTodo = {};
    }

    function editTodo(todo) {
        console.log("inedit")
        console.log(todo.text)
        $http({
            method: 'PUT',
            url: '/todos/' + todo._id,
            data: todo
        }).then(function(res) {
            console.log(res)
            getTodos();
        }, function(err) {
            console.log(err);
        });

    }

    //returns a count of the tasks that have been marked as done
    function completedTodos() {

    }

    //returns a count of the tasks that have not been marked as done
    function remainingTodos() {

    }

}
