const mongoose = require("mongoose");
const { Schema } = mongoose;


const CalificacionSchema = new Schema({
  calf: { type: Number, required: true },
  parcial:{type:String,required:true},
  alumno: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Alumno",
  },
  profesor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profesor",
  },
  periodo:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Periodo",
  },
  cuatri:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cuatrimestre",
  }
});

module.exports = mongoose.model("Calificacion", CalificacionSchema);
