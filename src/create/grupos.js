require('../mongo')
const Grupo = require('../models/Grupos');

const arrayGrupo = ["A","B","C","D","E"];

function eject(){
    arrayGrupo.map(x=>{
        const newGr = new Grupo({
            grupo:x
        });
        newGr.save();
    });
};

setTimeout(eject,7000)