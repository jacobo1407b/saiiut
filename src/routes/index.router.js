const express = require("express");
const router = express.Router();
const {authPage} = require('../helpers/auth');

//Admin viw
router.get('/',(req,res)=>{
  res.redirect('/index/alumnos/')
})
router.get("/index/admin/*", authPage,(req, res) => {
  res.render("pages/admin")
});
//Alumnos view
router.get("/index/alumnos/*", (req, res) => {
  res.render("pages/alumno");
});

//Maestros view
router.get("/index/profesor/*", (req, res) => {
  res.render("pages/profe");
});

module.exports = router;
