const {addProfesor,allProfesor,profesorId,putProfesor} = require('../servicios/profesor.service');

function newProfesor(req,res) {
    const {nombre,matricula,email,password}=req.body;
    addProfesor(nombre,matricula,email,password).then(response=>{
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


async function getAllProfesor(req,res){
    try {
        const profesores = await allProfesor();
        res.status(200).json(profesores)
    } catch (er) {
        console.log(er)
        res.status(500).json(er)
    }
}

async function getIdprofe(req,res){
    try {
        const profesorOne = await profesorId(req.params.id);
        res.status(200).json(profesorOne)
    } catch (er) {
        console.log(er)
        res.status(500).json(er)
    }
}

async function updateProfesor(req,res){
    try {
        const profesorPut = await putProfesor(req.params.id);
        
        if(profesorPut.error){
            res.status(400).json(profesorPut)
        }else{
            res.status(200).json(profesorPut)
        }
    } catch (er) {
        console.log(er)
        res.status(500).json(er)
    }
}

module.exports={
    newProfesor,
    getAllProfesor,
    getIdprofe,
    updateProfesor
}