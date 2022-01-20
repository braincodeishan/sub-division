const mongoose=require('mongoose');


const Myschema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:String,
    password:String
})

const User=new mongoose.model('User',Myschema)

module.exports=User;
