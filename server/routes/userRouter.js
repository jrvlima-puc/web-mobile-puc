var express = require('express');
var router = express.Router();

var controller = require('../controllers/userController');

/* GET users listing. */
router.route('/').get(controller.findAll());

router.route('/:id').get(controller.findById());

router.route('/:id').delete(controller.remove());

router.route('/').put(controller.save());

router.route('/').post(controller.save());

module.exports = router;
