var repository = require('../repositories/userRepository');

exports.findAll = function(req, res, callback) {
    repository.findAll({}, function(err, users) {
        res.json(users);
    });
}


exports.findById = function(req, res, callback) {
    repository.findById(req.query.id, function(err, user) {
        res.json(user);
    });
}


exports.save = function(req, res, callback) {
    repository.save(req.body, function(err, user) {
        res.json(user);
    });
}

exports.remove = function(req, res, callback) {
    repository.remove(req.query.id, function(err, user) {
        if(!user) res.json({"message": "User Removed"});
    });
}
