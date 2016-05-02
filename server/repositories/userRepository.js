var UserRepository = (function() {

  var User = require('../models/user.js');

  function save(user, callback) {
    user.save(function (err, user) {
      if (err) return callback(err);
      callback(null, user);
    });
  };

  function remove(user, callback) {
    user.remove(function (err, user) {
      if (err) return callback(err);
      callback(null, user);
    });
  };

  function findAll(query, callback) {
    User.find(query, function(err, users) {
      if(err) return callback(err);
      callback(null, users);
    });
  };

  return {
    save: save,
    findAll: findAll,
    remove: remove
  };

})();


module.exports.UserRepository = UserRepository;
