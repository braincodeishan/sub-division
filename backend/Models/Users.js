const mongoose=require('mongoose');


const Myschema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    personalInfo:{
        name:String,
        post:String,
        dateOfBirth:Date,
        email:String,
        phoneNumber:Number,
        alternateNumber:Number
    },
    professionalInfo:{
        dateOfJoining:Date,
        dateOfRetirement:Date,
        cadre:String,
        payScale:String,
        basicPay:Number,
        transferTaken:Number
    },
    
    office:{
        circle:String,
        region:String,
        division:String,
        subDivision:String,
        officeID:Number,
    },
    
    leave:{
        casualLeave:Number,
        earnedLeave:Number,
        RH:Number,
        halfPayLeave:Number
    },
    registerSetting:{
        type:Boolean,
        default:false,
    },
    password:String
})

const User=new mongoose.model('User',Myschema)

module.exports=User;
