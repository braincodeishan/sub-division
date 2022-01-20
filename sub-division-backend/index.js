const express=require('express');
const cors=require('cors');
const mongodb=require('mongodb');
const mongoose=require('mongoose');
const env=require('dotenv').config();
const app= express();
const bcrypt=require('bcrypt');
const JWT=require('jsonwebtoken')
const User=require('./Models/Users')
// const bodyparser=require('body-parser');
var port=process.env.PORT;
const uri=process.env.URI;
const enckey=process.env.ENCKEY;
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: '*'
  }));

    mongoose.connect(uri)
    .then((res)=>{
      console.log('db connected successfully');
    })
    .catch((error)=>{
    console.log(error);
  })

  


app.post('/login', async (req, res) => {
  const {username,password}=req.body;

  const result=await User.findOne({username:username});
  const compare= await bcrypt.compare(password,result.password);
  if(compare){
    const token=JWT.sign(result.username,enckey)
    console.log(token);
    res.send({status:200, Error:'Login Successful', token:token, username:result.username})

  }else{
    res.send({status:400, Error:'Login unsuccessful, Invalid Username/Password'})
  }





  })
app.post('/register', async(req, res) => {
    const {username,email,password}=req.body;
    console.log(req.body);

    if(!username){
      res.send({status:204, Error:"Something went wrong"})
    }
    else if(username.length<5){
      res.send({status:400, Error:"Username is small"})
    }
    else{
    try{
      const hash=await bcrypt.hash(password,10);
      console.log(hash);
      const newUser= new User({
        username:username,
        email:email,
        password:hash
      })

      newUser.save()
      .then((result)=>{
        
        res.send({status:201, Error:"User is registered"})
      })
      .catch((err)=>{
        res.send({status:400, Error:err})
        
      })




    }catch(err){
      res.send({status:404, Error:"Something went wrong"})
    }
  }
    



  })

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})