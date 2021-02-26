const Alumno = require("../models/Alumno");
const _roleIdAlumno = "602880041caefd07ec239f39";
const User = require('../models/User');
const Cuatri = require('../models/Cuatrimestre');
const Carrera = require('../models/Carrera');
const Grupo = require('../models/Grupos');
const Role = require('../models/Role');

async function buscarAlumno(matricula) {
  return await User.findOne({ matricula: matricula });
}

async function addAlumno(nombre, matricula, email, password, idAdmin, ides) {
  if (await buscarAlumno(matricula)) {
    return {
      error: true,
      msg: `El alumno ${nombre} ya existe`,
    };
  } else {
    const { carrera, grupo, cuatrimestre } = ides;
    const newAlum = new Alumno({
      nombre,
      admin: idAdmin,
      carrera,
      grupo,
      cuatrimestre,
      role: _roleIdAlumno,
    });
    const saveAlmun = await  newAlum.save();
    const newUser = new User({
      matricula,
      email,
      alum:saveAlmun._id
    })
    newUser.password = await newUser.encryptPassword(password);
    return await newUser.save();
  }
}

async function getAllAlumno(idAdmin) {
  const alumno = await Alumno.find({ admin: idAdmin })
    .populate([
        {path:'cuatrimestre', model:Cuatri},
        { path: "carrera", model: Carrera },
        { path: "grupo", model: Grupo },
        {path:"role",model:Role}
    ])
  return alumno;
}

async function getAlumnoId(id) {
  return await Alumno.findById(id).populate([
    {path:'cuatrimestre', model:Cuatri},
    { path: "carrera", model: Carrera },
    { path: "grupo", model: Grupo },
    {path:"role",model:Role}
]);
}

async function putAlumno(id,data) {
  const response =  await Alumno.findByIdAndUpdate(id,data,{new:true});
  if(!response){
    return{
      error:true,
      msg:"No pudo ser actualizado este alumno"
    }
  }else{
    return response
  }
}


module.exports = {
  addAlumno,
  getAllAlumno,
  getAlumnoId,
  putAlumno
};

