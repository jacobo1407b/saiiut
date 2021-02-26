const mongoose = require("mongoose");
const { Schema } = mongoose;

const TokenSchema = new Schema({
    user:{type:String, required: true},
    matricula:{type:String, required: true},
    refresh:{type:String, default:""},
    token:{type:String, required: true},
    role:{type:String, required: true}
});


module.exports = mongoose.model('Token',TokenSchema);