const {addAlumno,getAllAlumno,getAlumnoId,putAlumno} = require('../servicios/alumno.service');

function newAlumno(req,res) {
    const {nombre,matricula,email,password,ides}=req.body;
    const idAdmin = "602f542d8d119505887c045c";
    addAlumno(nombre,matricula,email,password,idAdmin,ides).then(response=>{
        if(response.error){
            res.status(400).json(response);
        }else{
            res.status(200).json(response)
        }
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
}

async function getAllAlumnoController(req,res){
    const id = "602f542d8d119505887c045c"
    try {
        const alemun = await getAllAlumno(id);
        res.status(200).json(alemun)
    } catch (er) {
        console.log(er)
        res.status(500).json(er)
    }
}

async function getIdAlumnoController(req,res){
    try {
        const alumnoId = await getAlumnoId(req.params.id);
        res.status(200).json(alumnoId)
    } catch (er) {
        console.log(er)
        res.status(500).json(er)
    }
}

async function updateAlumno(req,res) {
    try {
        const response = await putAlumno(req.params.id,req.body);
        
        if(response.error){
            res.status(400).json(response)
        }else{
            res.status(200).json(response)
        }
    } catch (er) {
        console.log(er)
        res.status(500).json(er)
    }
};
module.exports = {
    newAlumno,
    getAllAlumnoController,
    getIdAlumnoController,
    updateAlumno
}