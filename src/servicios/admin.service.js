const Admin = require("../models/Admin");
const User  = require('../models/User');
const Administrador = require("../models/Admin");
const _roleIdAdmin = "602880041caefd07ec239f38";

async function buscarAdmin(matricula) {
    return  await User.findOne({matricula:matricula});
}


async function addAdmin(nombre, matricula, email, password){
    if(await buscarAdmin(matricula)){
        return {
            error:true,
            msg:"El usuario ya existe"
        }
    }else{
        const newAddmin = new Administrador({
            nombre,
            role: _roleIdAdmin,
          });
          const saveAdmin = await newAddmin.save();
          const newUser = new User({
            matricula,
            email,
            admin:saveAdmin._id
          });
          newUser.password = await newAddmin.encryptPassword(password);
          return await newUser.save();
        
    }
}

async function putAdmin(id,data){
    const response = await Admin.findByIdAndUpdate(id,data,{new:true});
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
  addAdmin,
  putAdmin
};
