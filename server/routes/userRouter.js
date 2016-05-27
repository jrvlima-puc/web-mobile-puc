var express = require('express');
var router = express.Router();

var controller = require('../controllers/userController');

router.route('/')
    .get(controller.findAll());

router.route('/')
    .post(controller.create());

router.route('/:id')
    .get(controller.findById())

router.route('/')
    .put(controller.save());

router.route('/:id')
    .delete(controller.remove());

module.exports = router;
