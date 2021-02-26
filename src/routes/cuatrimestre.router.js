const express = require('express');
const router = express.Router();

const {getAllCuatri,getId} = require('../controllers/cuatrimestre.controller');

router.get('/',getAllCuatri);
router.get('/:id',getId)

module.exports = router