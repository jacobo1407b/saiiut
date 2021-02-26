const mongoose = require("mongoose");
const { Schema } = mongoose;


const PeriodoSchema = new Schema({
    periodo:{type:String, required: true},    
});

module.exports = mongoose.model('Periodo',PeriodoSchema);