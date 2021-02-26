const { grupos, idGrupo, getRoles,getPeriodo} = require("../servicios/grupos.service");

async function allGrupos(req, res) {
  try {
    const response = await grupos();
    if (!response) {
      res.status(400).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function grupoId(req, res) {
  try {
    const data = await idGrupo(req.params.id);
    if (!data) {
      res.status(400).json(data);
    } else {
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getAllRoles(req, res) {
  try {
    const response = await getRoles();
    if (!response) {
      res.status(400).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}

async function periodos(req,res){
    try {
       const response = await  getPeriodo();
       if (!response) {
        res.status(400).json(response);
      } else {
        res.status(200).json(response);
      }
    } catch (e) {
        res.status(500).json(e);
    }
}
module.exports = {
  allGrupos,
  grupoId,
  getAllRoles,
  periodos
};
