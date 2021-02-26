const {carreraTipe,allCarrera,idCarrera} = require('../servicios/carrera.service');

async function carreras(req,res){
    try{
        const carrer = await allCarrera();
        if(carrer){
            res.status(200).json(carrer)
        }else{
            res.status(400).json({
                error:true,
                msg:"no encontrado"
            });
        }
    }catch(err){
        res.status(500).json(err)
    }
}

async function byId(req,res){
    try {
        const response = await idCarrera(req.params.id);
        if(response){
            res.status(200).json(response)
        }else{
            res.status(400).json({
                error:true,
                msg:"no encontrado"
            });
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

async function getTipe(req,res){
    try {
        const response = await carreraTipe(req.params.tipe);
        if(response){
            res.status(200).json(response)
        }else{
            res.status(400).json({
                error:true,
                msg:"no encontrado"
            });
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {
    getTipe,
    carreras,
    byId
}