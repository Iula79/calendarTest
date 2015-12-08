'use strict';

var meanApp = angular.module('meanApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', MainRouter]);


function MainRouter(states, router) {
  //ROUTES HERE
  states
    .state( 'index', {
      url:'/',
      templateUrl: 'index.html'
    })
    .state( 'todos',{
      url:'/todos',
      templateUrl:'todo.html'
    });

    router.otherwise('/');

}
