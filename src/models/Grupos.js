const mongoose = require("mongoose");
const { Schema } = mongoose;


const GrupoSchema = new Schema({
    grupo:{type:String, required: true},    
});

module.exports = mongoose.model('Grupo',GrupoSchema);