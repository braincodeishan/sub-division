const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const app = express();
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken')
const User = require('./Models/Users')
const Gds = require('./Models/Gds');
var multer      = require('multer');  
var path        = require('path');  
var bodyParser  = require('body-parser');  
// var csvModel    = require('./models/csv');  
var csv         = require('csvtojson'); 
const cookieParser = require("cookie-parser");
var port = process.env.PORT;
const uri = process.env.URIL;
const enckey = process.env.ENCKEY;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
var storage = multer.diskStorage({  
  destination:(req,file,cb)=>{  
  cb(null,'./public/uploads');  
  },  
  filename:(req,file,cb)=>{  
  cb(null,file.originalname);  
  }  
  });  
  var uploads = multer({storage:storage});
app.use(cors({
  origin: '*',
  origin: 'http://localhost:3000',
  origin: 'https://worksnap.ml',
  credentials: true,
}));

app.use(bodyParser.urlencoded({extended:false}));  

mongoose.connect(uri)
  .then((res) => {
    console.log('db connected successfully');
  })
  .catch((error) => {
    console.log("Something wrong happened" + error);
  })

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await User.findOne({ username: username });
    console.log(result);
    if (result!=null) {
      const compare = await bcrypt.compare(password, result.password);
      console.log(compare);
      if (compare) {
        const token = JWT.sign(result.username, enckey)

        res.cookie("login-token", token, {
          maxAge: 86400000,
          httpOnly: true
        })
        res.status(200).json({ data: 'Login Successful', token: token, username: result.username, status:200})
      } else {
        res.status(400).json({ error: 'Login unsuccessful, Invalid Username/Password' })
      }
    }else{
      res.status(400).json({ error: 'Login unsuccessful, The user is not registered' })
    }
  } catch (err) {

    res.status(400).json({ error: 'Something Went wrong in ' + err })
  }
})

app.get('/tokenverify', async (req, res) => {
  try {
    const token = req.headers.cookie.slice(12);
    const restoken = JWT.verify(token, enckey)
    if (restoken) {
      res.send({ status: 200, Error: 'Login Successful' })
    } else {
      res.send({ status: 400, Error: 'Login unsuccessful, Invalid Username/Password' })
    }
  } catch (err) {
    res.send({ status: 400, error: err })
  }
})

app.get('/logout', async (req, res) => {
  try {
    console.log("hit");
    res.clearCookie('login-token');
    res.status(200).json({ data: "Logged out" });
  } catch (err) {

    res.status(200).json({ data: "Something went wrong in Logout" + err });
  }
})

app.post('/contact', async (req, res) => {
  try {
    res.status(200).json({ data: "Data Saved" });
  } catch (err) {

    res.status(400).json({ data: "Something went while saving date" });
  }
})

app.post('/senioritylist', async (req, res) => {
  try {
    const cadre = req.body.cadre;
    let abc;
    if (cadre === "GDSBPM") {
      abc = [["1", "10253160", "ishan", "Inspector", "PMG Kurnool", "OBC", "26.01.1993", "21.06.2018", "21.06.2023"], ["2", "10253160", "saurabh", "Inspector", "PMG Kurnool", "OBC", "26.01.1993", "21.06.2018", "21.06.2023"]]
    } else if (cadre === "GDSABPM") {
      abc = [["1", "10253160", "hsajhska", "Inspector", "PMG Kurnool", "OBC", "26.01.1993", "21.06.2018", "21.06.2023"], ["2", "10253160", "soyab", "Inspector", "PMG Kurnool", "OBC", "26.01.1993", "21.06.2018", "21.06.2023"]]
    } else if (cadre === "Postman") {
      abc = [["1", "10253160", "isagdsgfdhan", "Inspector", "PMG Kurnool", "OBC", "26.01.1993", "21.06.2018", "21.06.2023"], ["2", "10253160", "asadgfdgdfg", "Inspector", "PMG Kurnool", "OBC", "26.01.1993", "21.06.2018", "21.06.2023"]]
    } else if (cadre === "MO") {
      abc = [["1", "10253160", "idsfsfdsshan", "Inspector", "PMG Kurnool", "OBC", "26.01.1993", "21.06.2018", "21.06.2023"], ["2", "10253160", "fdsfdsfdsf", "Inspector", "PMG Kurnool", "OBC", "26.01.1993", "21.06.2018", "21.06.2023"]]
    } else if (cadre === "PA") {
      abc = [["1", "10253160", "ishrtetan", "Inspector", "PMG Kurnool", "OBC", "26.01.1993", "21.06.2018", "21.06.2023"], ["2", "10253160", "oiuoiiuiu", "Inspector", "PMG Kurnool", "OBC", "26.01.1993", "21.06.2018", "21.06.2023"]]
    } else if (cadre === "SA") {
      abc = [["1", "10253160", "ishxvvcxvcan", "Inspector", "PMG Kurnool", "OBC", "26.01.1993", "21.06.2018", "21.06.2023"], ["2", "10253160", "bvcvcbvcbc", "Inspector", "PMG Kurnool", "OBC", "26.01.1993", "21.06.2018", "21.06.2023"]]
    } else {
      abc = [];
    }
    res.status(200).json({ data: abc });
  } catch (err) {

    res.status(400).json({ data: "Something went while fetching date" });
  }
})

app.post('/gdsCsv',uploads.single('csv'), async (req,res)=>{
  try{
    console.log("entered");
    csv()  
    .fromFile(req.file.path)  
    .then((jsonObj)=>{  
    console.log(jsonObj);  
    })
  }
  catch(e){

  }
})


app.post('/senioritylist/edit', async (req, res) => {
  try {
    res.status(200).json({ data: "Saved the data" })
  } catch (err) {
    res.status(400).json({ data: "Something went while saving date" })
  }
})

app.post('/register', async (req, res) => {
  const dataReceived = req.body;

  if (!username) {
    res.status(204).json({ data: "Something went wrong" })
  }
  else if (username.length < 5) {
    res.status(400).json({ data: "Username is small" })
  }
  else {
    try {
      const hash = await bcrypt.hash(dataReceived.password, 10);

      const newUser = new User({
        username: dataReceived.username,
        personalInfo:{email: dataReceived.email},
        password: hash
      })
      const regresult = newUser.save()
      if (regresult) {
        res.status(201).json({ data: "User is registered" })
      } else {
        res.status(400).json({ data: "Something Went Wrong/Please try again" })
      }
    } catch (err) {
      res.status(404).json({ data: "Something went wrong" })
    }
  }
})

app.get("/",(req,res)=>{
  res.send("Hello world, let's go Cloud");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
