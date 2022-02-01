const mongoose=require('mongoose');


const Myschema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    name:String,
    dob:Date,
    dateOfJoining:Date,
    
    email:String,
    password:String
})

const User=new mongoose.model('User',Myschema)

module.exports=User;
