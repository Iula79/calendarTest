meanApp.directive('todos', TodosView);

function TodosView() {
  var directive = {}
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl = '/js/todos/todo.html'
  directive.scope = {
    text: '@'
  }
  return directive;
}
