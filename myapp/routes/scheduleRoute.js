var express = require('express');
var router = express.Router();
const ScheduleService = require('../service/scheduleService');
const UsersService = require('../service/usersService');
const TimetableService = require('../service/timetableService')
const scheduleController = require('../controller/scheduleController')


router.post('/create',scheduleController.create);
router.post('/insert',scheduleController.insert);

module.exports = router;