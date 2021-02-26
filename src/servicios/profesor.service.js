const Profesor = require('../models/Profesor');
const User = require('../models/User');
const _roleIdProfesor = "602880041caefd07ec239f3a";
const Role = require('../models/Role');

async function buscarProfesor(matricula) {
    return await User.findOne({matricula:matricula})
}

async function addProfesor(nombre,matricula,email,password) {
    if(await buscarProfesor(matricula)){
        return {
            error:true,
            msg:`El profesor ${nombre} ya existe`
        }
    }else{
        const newProfe = new Profesor({
            nombre,
            role:_roleIdProfesor
        });
        const saveProf = await newProfe.save();

        const newUser = new User({
            matricula,
            email,
            prof: saveProf._id
        })
        newUser.password = await newUser.encryptPassword(password)
        return await newUser.save();
    }
}

async function profesorId(id) {
    return await Profesor.findById(id).populate(
        {path:"role",model:Role}
    )
}

async function allProfesor(){
    const profe = await Profesor.find().populate(
        {path:"role",model:Role}
    );
    return profe
}

async function putProfesor(id, data){
    const response = await Profesor.findByIdAndUpdate(
        id,
        data,
        {new:true}
    );
    if(!response){
        return{
          error:true,
          msg:"No pudo ser actualizado este alumno"
        }
      }else{
        return response
      }
}

module.exports={
    addProfesor,
    profesorId,
    allProfesor,
    putProfesor
    
}