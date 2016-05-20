var Promise = require('promise')

var UserRepository = (function() {

  var User = require('../models/user.js');

  function save(user) {

    return new Promise(function(fullfill, reject) {

      user.save(function (err, user) {
        if (err) return reject(err);
        fullfill(user);
      });

    });

  };

  function remove(id) {

    return new Promise(function(fullfill, reject){

      User.remove({id: id}, function (err) {
        if (err) return rejectd(err);
        fullfill(null, null);
      });

    });

  };

  function findAll(query) {

    return new Promise(function(fulfill, reject){

      User.find(query, function(err, users) {
        if(err) return reject(err);
        fulfill(users);
      });

    });

  };

  function findById(id) {

    return new Promise(function(fullfill, reject) {

      User.findById(id, function(err, user) {
        if(err) return reject(err);
        fullfill(user);
      });

    });

  };

  return {
    save: save,
    findAll: findAll,
    findById: findById,
    remove: remove
  };

})();


module.exports.UserRepository = UserRepository;
