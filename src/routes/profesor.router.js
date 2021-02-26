const express = require('express');
const router = express.Router();
const {newProfesor,getAllProfesor,getIdprofe,updateProfesor} = require('../controllers/profesor.controller');

router.post('/',newProfesor);
router.get('/',getAllProfesor);
router.get('/:id',getIdprofe);
router.put('/:id',updateProfesor);


module.exports = router