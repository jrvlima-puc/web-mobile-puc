var userService = require('../services/userService');

exports.findAll = function(req, res, callback) {
    userService.findAll({}, function(err, users) {
        if(err) return callback(err);
        callback(null, users);
    });
}