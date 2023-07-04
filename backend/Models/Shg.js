const mongoose=require('mongoose');


const Myschema=new mongoose.Schema({
    blockName:String,
    gramPanchayatName:String,
    villageName:String,
    groupName:String,
    memberCode:String,
    memberName:String,
    fatherName:String,
    gender:String,
    socialCategory:String,
})

const SHG=new mongoose.model('SHG',Myschema)

module.exports=SHG;
