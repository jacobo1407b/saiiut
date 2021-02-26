const Grupo = require('../models/Grupos');
const Role = require('../models/Role');
const Periodo = require('../models/Periodo');
async function grupos(){
    return await Grupo.find();
}

async function idGrupo(id){
    return await Grupo.findById(id);
}

async function getRoles(){
    const rols =  await Role.find();
    return rols
}
async function getPeriodo(){
    return await Periodo.find();
}
module.exports = {
    grupos,
    idGrupo,
    getRoles,
    getPeriodo
}