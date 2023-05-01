const mongoose = require('mongoose');

const circleSchema = new mongoose.Schema({
    facilityId: {
        type:String,
        unique:true
    },
    name: String,
    hindiName: String,
    region: Array
})
const Circle = new mongoose.model('Circle', circleSchema)

const regionSchema = new mongoose.Schema({
    facilityId: String,
    name: String,
    hindiName: String,
    division:Array

})

const Region = new mongoose.model('Region', regionSchema)

const divisionSchema = new mongoose.Schema({
    facilityId: String,
    name: String,
    hindiName: String,
    division:Array
})

const Division = new mongoose.model('Division', divisionSchema)

const subDivisionSchema = new mongoose.Schema({
    facilityId: String,
    name: String,
    hindiName: String
})

const SubDivision = new mongoose.model('SubDivision', subDivisionSchema)

module.exports = { Circle, Region, Division, SubDivision };