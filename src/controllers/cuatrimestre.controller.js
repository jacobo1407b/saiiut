const {cuatriId,cuatris} = require('../servicios/cuatrimestre.service');

async function getAllCuatri(req,res){
    try {
       const response = await cuatris();
       if(!response){
        res.status(400).json(response);
       }else{
        res.status(200).json(response);
       }
    } catch (e) {
        res.status(500).json(e)
    }
}

async function getId(req,res){
    try {
        const data = await cuatriId(req.params.id)
        if(!data){
            res.status(400).json(data);
        }else{
            res.status(200).json(data);
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    getAllCuatri,
    getId
}