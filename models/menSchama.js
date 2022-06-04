const mongoose = require('mongoose');
const validate = require('validate');

const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
         
        unique:true,
        required:true
    },
    name:{
        type:String,
        required: true,
        unique:true,
         
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required: true,

    },
    
    score:{
        type:Number,
        required: true,
        trim:true
    },
    
    event:{
        type:String,
        default:"100m"

    },

})

const MensRanking = new mongoose.model('MenRanking',menSchema);

module.exports = MensRanking;