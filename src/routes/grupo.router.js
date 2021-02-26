const express = require('express');
const router = express.Router();

const {grupoId,allGrupos,getAllRoles,periodos} = require('../controllers/grupo.controller');

router.get('/',allGrupos),
router.get('/:id',grupoId);
router.get('/roles/rule',getAllRoles)
router.get('/periodos/p',periodos)

module.exports = router