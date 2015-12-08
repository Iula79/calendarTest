var mongoose = require('mongoose'),
    User = require('../models/user.js');

// GET
function getAll(request, response) {
    User.find(function(error, users) {
        if (error) response.json({
            message: 'Could not find any user'
        });
        response.json({
            users: users
        });
    });
}

// POST
function createUser(request, response) {
    console.log('in POST');
    console.log('body:', request.body);

    var user = new User(request.body);

    user.save(function(error) {
        if (error) response.json({
            message: 'Could not ceate user b/c:' + error
        });

        response.json({
            user: user
        });
    });
}
