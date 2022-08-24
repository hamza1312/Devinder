const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    gender: {
        required: true,
        enum: ['Male', 'Female'],
        type: String,
    },
    password:{
        required:true,
        type:String,
    },
    phonenum: {
        required:true,
        type: String,
        unique:true,
    },
    code:{
        required: true,
        type: String,
    }
});
const UserModel =  mongoose.model("user",UserSchema);
module.exports =UserModel;
