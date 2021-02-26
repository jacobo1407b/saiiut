const { addAdmin,putAdmin } = require("../servicios/admin.service");

function hola(req, res) {
  res.send("Hola mundo");
}

function newAdministrador(req, res) {
  const { nombre, matricula, email, password } = req.body;
  addAdmin(nombre, matricula, email, password).then((response) => {
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

async function updateAdmin (req,res){
  try {
    const response = await putAdmin(req.params.id,req.body);
    if(response.error){
      res.status(200).json(response)
      
    }else{
      res.status(400).json(response)
    }
    
  } catch (er) {
    console.log(er)
    res.status(500).json(er)
  }
}

//function
module.exports = {
  hola,
  newAdministrador,
  updateAdmin
};
