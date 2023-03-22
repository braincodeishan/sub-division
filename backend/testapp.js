const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const app = express();
const Office = require('./Models/Office')
const {Region} = require('./Models/Dependency')
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


// const myRegion = new Region({
//   circle:"Andhra Pradesh",
//     region:"Visakhapatnam",
// })
// myOffice.save()
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err);
// })

// myRegion.save()
//   .then((res) => {
//     console.log(res);
    
//   })
//   .catch((err) => {
//     console.log(err);
//   })

app.get("/",(req,res)=>{
  const {circle,region,division,subdivision}=req.body;
  console.log(circle,region,division,subdivision);
})


app.listen(3002, () => {
  console.log(`Example app listening at http://localhost:3002`)
})