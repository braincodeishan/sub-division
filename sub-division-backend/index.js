const express=require('express');
const cors=require('cors');
const mongodb=require('mongodb');
const mongoose=require('mongoose');
const env=require('dotenv').config();
const app= express();
const bodyparser=require('body-parser');
var port=process.env.PORT

app.use(bodyparser.json());

app.use(cors({
  origin: '*'
  }));



app.post('/login', (req, res) => {
    
  })
app.post('/register', async (req, res) => {
    const {username,email,password}=req.body;
    console.log(req.body);

    if(!username){
      res.send({status:404, Error:"Data not received"})
    }




  })





app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})