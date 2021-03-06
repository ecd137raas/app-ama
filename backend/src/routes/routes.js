var express = require('express');
const helmet = require('helmet');

const authController = require('../controller/authController');
const employeeController = require('../controller/employeeController');
const patientsController = require('../controller/patientsController');
const schedulleController = require('../controller/schedulleController');
const notesController = require('../controller/notesController');
const filterController = require('../controller/filterController');

var router = express.Router()
router.use(helmet());

/* GET home page. */
router.get('/', authController.index);
router.post('/authenticate', authController.Auth);

/*EMPLOYEE */
router.get('/employee', employeeController.index);
router.get('/employee/:id', employeeController.indexId);
router.post('/employee', employeeController.create);
//put
//delete

/*PATIENTS */
router.get('/patients', patientsController.index);
router.post('/patients', patientsController.create);
router.put('/patients', patientsController.update);
//delete

/*SCHEDULLE */
router.get('/schedulle', schedulleController.index);
router.post('/schedulle', schedulleController.create);
//put
//delete

/*Notes */
router.get('/notes', notesController.index);
router.post('/notes', notesController.create);
//put
//delete

/*Filter */
router.get('/filter', filterController.index);

module.exports = router;
