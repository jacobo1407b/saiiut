const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");


const ProfesorSchema = new Schema({
    nombre:{type:String, required: true},
    url:{type: String, default:""},
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
    }
});

module.exports = mongoose.model('Profesor',ProfesorSchema);