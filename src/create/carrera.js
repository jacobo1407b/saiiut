require('../mongo')
const Carrera = require('../models/Carrera');
const arrayCarrera = [
    {nombre:"Procesos industriales area plasticos",abr:"PIAP", on:"TSU"},
    {nombre:"Procesos industriales area manufactura", abr:"PIAM", on :"TSU"},
    {nombre:"Procesos industriales area automotriz", abr:"PIAA", on:"TSU"},
    {nombre:"Mecatronica area automotris", abr:"MAU", on:"TSU"},

    {nombre:"Mantenimiento area industrial", abr:"MAI", on:"TSU"},
    {nombre:"Diseño y moda industrial area produccion", abr:"DMIAP",on:"TSU"},
    {nombre:"Desarrollo de negocios area mercadotecnia", abr:"DNAM",on:"TSU"},
    {nombre:"Administracion area capital humano", abr:"AACPH", on:"TSU"},
    {nombre:"Tecnologias de la informacion area software multiplataforma", abr:"TIADSM", on:"TSU"},
    {nombre:"Tecnologias de la informacion area infraestructura de redes", abr:"TIAIR", on:"TSU"},
    {nombre:"procesos y operaciones industriales", abr:"IPOI", on:"Ingenieria"},
    {nombre:"Tecnotronica", abr:"IT", on:"Ingenieria"},
    {nombre:"Mantenimiento industrial", abr:"IMI", on:"Ingenieria"},
    {nombre:"Diseño textil y moda", abr:"IDTM",on:"Ingenieria"},
    {nombre:"Gestion y desarrollo de software", abr:"IDGS", on:"Ingenieria"},
    {nombre:"Redes y ciberseguridad",abr:"IRIC",on:"Ingenieria"}, 
    {nombre:"Inovacion de negocios y mercadotecnia", abr:"LINM",on:"Licenciatura"},
    {nombre:"Gestion del capital humano",abr:"LGCH",on:"Licenciatura"}

];

 function eject(){
    arrayCarrera.map(x=>{
        const car = new Carrera({
            carrera:x.nombre,
            abr:x.abr,
            tipe:x.on
        });
        car.save();
    })
 }

 setTimeout(eject,7000);


