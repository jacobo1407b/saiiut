const express = require('express');
const router = express.Router();

const {hola,newAdministrador,updateAdmin} = require('../controllers/admin.controller');

router.get('/',hola)
router.post('/',newAdministrador);
router.put('/:id',updateAdmin);


module.exports = router