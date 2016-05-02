var express = require('express');
var router = express.Router();

var controller = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res) {
  controller.findAll(req, res, function(err, users) {
    res.json(users);
  });
});

router.post('/', function(req, res) {
  controller.save(req, res, function(err, user) {
    res.json(user);
  });
});

module.exports = router;
