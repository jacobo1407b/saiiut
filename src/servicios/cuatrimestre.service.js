const Cuatrimestre = require('../models/Cuatrimestre');

async function cuatris(){
    return await Cuatrimestre.find();
}

async function cuatriId(id){
    return await Cuatrimestre.findById(id);
}

module.exports = {
    cuatris,
    cuatriId
}