const mongoose = require("mongoose");
const { Schema } = mongoose;



const CarreraSchema = new Schema({
    carrera:{type:String},
    abr:{type:String},
    tipe:{type:String}
});

module.exports = mongoose.model('Carrera',CarreraSchema);