require('../mongo')
const Cuatri = require('../models/Cuatrimestre');
const arrayCuatri = [
    {cuatri:"1", tipe:"TSU"},
    {cuatri:"2", tipe:"TSU"},
    {cuatri:"3", tipe:"TSU"},
    {cuatri:"4", tipe:"TSU"},
    {cuatri:"5", tipe:"TSU"},
    {cuatri:"6", tipe:"Estadias"},
    {cuatri:"1", tipe:"Ingenieria"},
    {cuatri:"2", tipe:"Ingenieria"},
    {cuatri:"3", tipe:"Ingenieria"},
    {cuatri:"4", tipe:"Ingenieria"},
    {cuatri:"6", tipe:"Estadias"},
];

function eject(){
    arrayCuatri.map(x=>{
        const createCuatri = new Cuatri({
            cuatri: x.cuatri,
            tipe:x.tipe
        });
        createCuatri.save();
    })
}
setTimeout(eject,7000);