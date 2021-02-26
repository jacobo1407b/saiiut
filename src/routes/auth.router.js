const express = require('express');
const router = express.Router();

const {authAdmin} = require('../controllers/auth.controller');

router.post('/auth',authAdmin);
router.get('/logout',(req,res)=>{
    res.clearCookie("token");
    res.clearCookie('role')
    res.clearCookie('user');
    res.json({logout:true})
})

module.exports = router