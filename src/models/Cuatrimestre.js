const mongoose = require("mongoose");
const { Schema } = mongoose;


const CuatrimestreSchema = new Schema({
    cuatri:{type:String, required: true},  
    tipe:{type:String}  
});

module.exports = mongoose.model('Cuatrimestre',CuatrimestreSchema);