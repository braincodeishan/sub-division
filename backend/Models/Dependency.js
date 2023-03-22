const mongoose=require('mongoose');


const regionSchema=new mongoose.Schema({
    circle:String,
    region:String,
    
})

const Region=new mongoose.model('Region',regionSchema)

const divisionSchema=new mongoose.Schema({
    circle:String,
    region:String,
    division:String,
})

const Division=new mongoose.model('Division',divisionSchema)

const subDivisionSchema=new mongoose.Schema({
    circle:String,
    region:String,
    division:String,
    subdivision:String,
})

const SubDivision=new mongoose.model('SubDivision',subDivisionSchema)

module.exports={Region,Division,SubDivision};