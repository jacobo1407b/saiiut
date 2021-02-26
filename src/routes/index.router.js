const express = require("express");
const router = express.Router();
const {authPage} = require('../helpers/auth');

//Admin viw
router.get("/index/admin/*", authPage,(req, res) => {
  //res.cookie("data" , "hola mundo cokkie").render("pages/admin")
  //aqui req.cookies
  const {cookies} = req
  const data = {
    cookies,
    role:"admin"
  }
  res.render("pages/admin",{data:JSON.stringify(data)})
});
//Alumnos view
router.get("/index/alumnos/*", (req, res) => {
  const {cookies} = req
  const data = {
    cookies,
    role:"admin"
  }
  res.render("pages/alumno",{data:JSON.stringify(data)});
});

//Maestros view
router.get("/index/profesor/*", (req, res) => {
  const {cookies} = req
  const data = {
    cookies,
    role:"admin"
  }
  res.render("pages/profe",{data:JSON.stringify(data)});
});

module.exports = router;
