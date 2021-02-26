require('../mongo')
const Role = require('../models/Role');
const arrayRole = ["admin", "alumno", "profesor"];

 function eject(){
    arrayRole.map(x=>{
        const createRoles = new Role({
            tipe:x
        });
        createRoles.save();
    })
 }

 setTimeout(eject,7000);


