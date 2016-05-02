var repository = require('../repositories/userRepository');

exports.findAll = function(query, callback) {
    repository.UserRepository.findAll(query, function(err, users) {
        if(err) return callback(err);
        callback(null, users);
    });
}