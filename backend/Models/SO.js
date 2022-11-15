const mongoose=require('mongoose');


const Myschema=new mongoose.Schema({
    name:String,
    FinacleCode:String,
    
})

const SO=new mongoose.model('SO',Myschema)

module.exports=SO;
