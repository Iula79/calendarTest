meanApp.controller('TodosCtrl', ['$http', todosCtrl]);

function todosCtrl($http) {

    var self = this;

    self.addTodo = addTodo;
    self.deleteTodo = deleteTodo;
    self.completedTodos = completedTodos;
    self.remainingTodos = remainingTodos;

    getTodos();

    function getTodos() {
        $http({
            method: 'GET',
            url: '/todos'
        }).then(function(res) {
            self.all = res.data;
        }, function(err) {
            console.log(err);
        });
    }


    //function that allows us to add new todos to our todoList
    function addTodo() {
        $http({
            method: 'POST',
            url: '/todos'
        }).then(function(res) {
            self.all = res.data;
        }, function(err) {
            console.log(err);
        });
    }

    //function that allows us to delete specific todos from our todoList
    function deleteTodo($index) {

    }

    //returns a count of the tasks that have been marked as done
    function completedTodos() {

    }

    //returns a count of the tasks that have not been marked as done
    function remainingTodos() {

    }

}
