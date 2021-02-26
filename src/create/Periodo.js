require('../mongo')
const Periodo = require('../models/Periodo');

const arrayPeriodo = [
    "Enero - Abril",
    "Mayo - Agosto",
    "Septiembre - Diciembre"
];

function eject(){
    arrayPeriodo.map(x=>{
        const cretePeriodo = new Periodo({
            periodo:x
        });
        cretePeriodo.save();
    })
}
setTimeout(eject,7000);