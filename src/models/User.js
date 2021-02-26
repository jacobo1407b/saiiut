const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    matricula:{type:String, required: true},
    email:{type:String, required: true},
    password: { type: String, required: true },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Admin",
    },
    prof:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Profesor",
    },
    alum:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Alumno",
    }
});

UserSchema.methods.encryptPassword  = async (password)=>{
    const salt = await bcrypt.genSalt(15);
  const hash = bcrypt.hash(password, salt);
  return hash;
}

UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User',UserSchema);