


var UserController = (function() {

  var repository = require('../repositories/userRepository');

  function findAll() {

    return function (req, res) {
      repository.UserRepository.findAll({})
        .then(
            function (data) {
              return res.json(data);
            }
        )
        .catch(
            function (err) {
              return res.json(err);
            }
        )
      }

    };


    function findById() {

      return function(req, res) {
        repository.UserRepository.findById(req.query.id)
          .then(
              function(data) {
                return res.json(data);
              }
          )
          .catch(
              function(err) {
                return res.json(err);
              }
          )
      }

    };


    function save() {

        return function(req, res) {
          repository.UserRepository.save(req.body)
            .then(
                function(data) {
                  return res.json(data);
                }
            )
            .catch(
                function(err) {
                  return res.json(err);
                }
            )
        }

    };

    function remove() {

      return function(req, res) {
        repository.UserRepository.remove(req.query.id)
          .then(
              function(data) {
                return res.json(data);
              }
          )
          .catch(
              function(err) {
                return res.json(err);
              }
          )
      }

    };



  return {
    findAll: findAll,
    findById: findById,
    save: save,
    remove: remove
  }


})();


module.exports = UserController;
