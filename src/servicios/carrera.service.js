const Carrera = require('../models/Carrera');

async function allCarrera(){
    return await Carrera.find();
}

async function idCarrera(id){
    return await Carrera.findById(id);
}

async function carreraTipe(param){
    return await Carrera.find({tipe:param})
}

module.exports = {
    allCarrera,
    idCarrera,
    carreraTipe
}