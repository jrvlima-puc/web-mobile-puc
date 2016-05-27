var Promise = require('promise');
var User = require('../models/user.js');

var UserRepository = (function() {

  function bindBody(body, user) {
    user.name = body.name;
    user.email = body.email;
    user.gender = body.gender;
  };

  function save(body) {
    return new Promise(function(fullfill, reject) {
      if(body.id) {
        User.findById(body.id, function(err, data) {
          bindBody(body, data);
          data.save(function (err, user) {
            if (err) return reject(err);
            fullfill(user);
          });
        });
      }
    });
  };

  function create(body) {
    return new Promise(function(fullfill, reject) {
      var user = new User();
      bindBody(body, user);
      user.save(function (err, user) {
        if (err) return reject(err);
        fullfill(user);
      });
    });

  }

  function remove(id) {
    return new Promise(function(fullfill, reject){
      User.remove({_id: id}, function (err) {
        if (err) return reject(err);
        fullfill({"message": "Record Removed"});
      });
    });
  };

  function findAll(query) {
    return new Promise(function(fulfill, reject){
      User.find(query, {"name" : true, "email": true, "gender": true}, function(err, users) {
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
    remove: remove,
    create: create
  };

})();


module.exports.UserRepository = UserRepository;
