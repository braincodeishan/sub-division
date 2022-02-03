const mongoose=require('mongoose');


const Myschema=new mongoose.Schema({
    Circle: String,
    Region: String,
    Division: String,
    SubDivison: String,
    FacilityId: String,
    CircleName: String,
    RegionName: String,
    DivisionName: String,
    SubDivisonName: String,
    OfficeName: String,
    OfficeType: String,
    Delivery: String,
    Pincode: Number,
    SOName: String,
    HOName: String,
    SOLID: Number,
    BOCode: String,
    Latitude: String,
    Longitude: String
})

const Office=new mongoose.model('Office',Myschema)

module.exports=Office;
