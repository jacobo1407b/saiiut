const express = require('express');
const router = express.Router();

const {getTipe,byId,carreras} = require('../controllers/carrera.controller');

router.get('/',carreras);
router.get('/:id', byId);
router.get('/tipe/:tipe',getTipe)

module.exports = router