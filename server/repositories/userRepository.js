var UserRepository = (function() {

  var User = require('../models/user.js');

  function save(user, callback) {
    user.save(function (err, user) {
      if (err) return callback(err);
      callback(null, user);
    });
  };

  function remove(id, callback) {
    user.remove({id: id}, function (err) {
      if (err) return callback(err);
      callback(null, null);
    });
  };

  function findAll(query, callback) {
    User.find(query, function(err, users) {
      if(err) return callback(err);
      callback(null, users);
    });
  };

  function findById(id, callback) {
    User.findById(id, function(err, user) {
      if(err) return callback(err);
      callback(null, user);
    })
  }

  return {
    save: save,
    findAll: findAll,
    findById: findById,
    remove: remove
  };

})();


module.exports.UserRepository = UserRepository;
