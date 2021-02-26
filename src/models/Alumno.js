const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");


const AlumnoSchema = new Schema({
    nombre:{type:String, required: true},
    url:{type:String, default:""},
    admin:{type:String, required:true},
    carrera:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Carrera",
        required:true
    },
    grupo:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Grupo",
        required:true
    },
    cuatrimestre:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Cuatrimestre",
        required:true
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required:true
    }

});

AlumnoSchema.set("toJSON",{
    virtuals: true,
});


module.exports = mongoose.model('Alumno',AlumnoSchema);