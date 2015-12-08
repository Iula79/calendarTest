'use strict';
meanApp.factory('userData',['$resource',userDataFactory])

function userDataFactory($resource){
  var User = $resource('/users/:id',{id:'@id'});

  return {
    getAll: function(){
      return User.get();
    },
    addUser: function(userData){
      return new User(userData).$save();
    }
    // deletePresident: function(pres){
    //   return President.delete({id:pres._id})
    // }
  };
}
