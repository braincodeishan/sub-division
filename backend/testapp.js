const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const app = express();
const Office = require('./Models/Office')
const { Circle, Region, Division, SubDivision } = require('./Models/Dependency')
const Offices = require('./json')
const SO = require('./Models/SO')
const cookieParser = require("cookie-parser");
const uri = process.env.URIL;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({
  origin: '*',
  credentials: true,
}));

mongoose.connect(uri)
  .then((res) => {
    console.log('db connected successfully');
  })
  .catch((error) => {
    console.log("Something wrong happened" + error);
  })



const circle = "Uttar Pradesh"
const region = "Gorakhpur"
const division = "Azamgarh"
const subDivision = "Phoolpur"
const facilityID="CS000000001"
const HindiCircle="उत्तर प्रदेश"

const mycircle = new Circle({
  facilityId: facilityID,
  name: circle,
  hindiName: HindiCircle,
  region:[]
})
mycircle.save()
.then((res)=>{
  console.log(res)
})
.catch((err)=>{
  console.log(err);
})




