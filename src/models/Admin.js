const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");


const AdminSchema = new Schema({
    nombre:{type:String, required: true},
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required:true
    }
});

AdminSchema.methods.encryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(15);
  const hash = bcrypt.hash(password, salt);
  return hash;
};

AdminSchema.methods.matchPassword= async function(password){
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('Admin',AdminSchema);