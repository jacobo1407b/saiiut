const express = require('express');
const router = express.Router();
const {newAlumno,getAllAlumnoController,getIdAlumnoController,updateAlumno} = require('../controllers/alumno.controller');

router.post('/',newAlumno);
router.get('/',getAllAlumnoController);
router.get('/:id',getIdAlumnoController);
router.put('/:id',updateAlumno)

module.exports = router