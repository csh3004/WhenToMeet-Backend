var express = require('express');
var router = express.Router();
const timetableController = require('../controller/timetableController')

router.get('/getList', timetableController.getList);
router.post('/create',timetableController.create);
router.post('/delete',timetableController.delete);

module.exports = router;