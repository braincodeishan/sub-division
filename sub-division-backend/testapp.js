const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const app = express();
const Office = require('./Models/Office')
const Offices = require('./json')
const SO = require('./Models/SO')
const cookieParser = require("cookie-parser");
const uri = process.env.URIL;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

mongoose.connect(uri)
  .then((res) => {
    console.log('db connected successfully');
  })
  .catch((error) => {
    console.log("Something wrong happened" + error);
  })


// const myOffice = new Office({
//   name:"Kurnool HO",
//   FinacleCode:"51800101"
// })
// myOffice.save()
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err);
// })

Office.insertMany(Offices)
  .then((res) => {
    console.log(res);
    
  })
  .catch((err) => {
    console.log(err);
  })