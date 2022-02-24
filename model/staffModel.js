const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },

    email:{
        type:String,
        required:true,
        trim:true
    },

    role:{
        type:Number,
        default: 0
    },

    dob:{
        type:Date
    },
    password:{
        type: String,
        required: true
    }

    

},{timestamps:true})

module.exports = mongoose.model("Staff", staffSchema)