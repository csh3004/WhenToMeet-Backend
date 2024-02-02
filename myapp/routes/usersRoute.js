var express = require('express');
var router = express.Router();
const usersController = require('../controller/usersController')

router.post('/signup', usersController.signup);
router.post('/signin', usersController.signin);

module.exports = router;