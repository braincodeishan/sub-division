const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const app = express();
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const User = require("./Models/Users");
const Gds = require("./Models/Gds");
const SHG = require("./Models/Shg");
var multer = require("multer");
var path = require("path");
var bodyParser = require("body-parser");
const https = require("https");
// var csvModel    = require('./models/csv');
const fs = require("fs");
var csv = require("csvtojson");
const cookieParser = require("cookie-parser");
const { Region, Division, SubDivision } = require("./Models/Dependency");
var port = process.env.PORT;
const uri = process.env.URIL;
const enckey = process.env.ENCKEY;

// app starting
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var uploads = multer({ storage: storage });
app.use(
  cors({
    origin: "*",
    // origin: "https://nrlm.gov.in/",
    // origin: process.env.ORIGIN,
    // origin: 'https://worksnap.ml',
    // credentials: true,
  })
);

var key = fs.readFileSync(__dirname + "/ssl/code.key");
var cert = fs.readFileSync(__dirname + "/ssl/code.crt");
var options = {
  key: key,
  cert: cert,
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(uri)
  .then((res) => {
    console.log("db connected successfully");
  })
  .catch((error) => {
    console.log("Something wrong happened" + error);
  });

  app.get("/shgData", async (req, res) => {
    try {
      console.log("SHG HIT")
      const data = req.query;
      // console.log(req.query);
      const shg = new SHG({
        blockName: data.blockName,
        gramPanchayatName: data.gramPanchayatName,
        villageName: data.villageName,
        groupName: data.groupName,
        memberCode: data.memberCode,
        memberName: data.memberName,
        fatherName: data.fatherName,
        gender: data.gender,
        socialCategory: data.socialCategory,
      });
      const result = await shg.save();
      console.log(result);
      if (result) {
        res.status(200).json({ data: "Saved" });
        console.log("saved");
      }
    } catch (err) {
      res.status(400).json({ data: "Something went while saving date" });
    }
  });


app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const result = await User.findOne({ username: username });
    // console.log(result);
    if (result != null) {
      const compare = await bcrypt.compare(password, result.password);
      console.log(compare);
      if (compare) {
        const token = JWT.sign(result.username, enckey);

        res.cookie("login-token", token, {
          maxAge: 86400000,
          httpOnly: true,
        });
        res
          .status(200)
          .json({
            data: "Login Successful",
            token: token,
            userData: result,
            status: 200,
          });
      } else {
        res
          .status(400)
          .json({ error: "Login unsuccessful, Invalid Username/Password" });
      }
    } else {
      res
        .status(400)
        .json({ error: "Login unsuccessful, The user is not registered" });
    }
  } catch (err) {
    res.status(400).json({ error: "Something Went wrong in " + err });
  }
});

app.get("/tokenverify", async (req, res) => {
  try {
    const token = req.headers.cookie.slice(12);
    const restoken = JWT.verify(token, enckey);
    if (restoken) {
      res.send({ status: 200, Error: "Login Successful" });
    } else {
      res.send({
        status: 400,
        Error: "Login unsuccessful, Invalid Username/Password",
      });
    }
  } catch (err) {
    res.send({ status: 400, error: err });
  }
});

app.get("/logout", async (req, res) => {
  try {
    console.log("hit");
    res.clearCookie("login-token");
    res.status(200).json({ data: "Logged out" });
  } catch (err) {
    res.status(200).json({ data: "Something went wrong in Logout" + err });
  }
});

app.post("/contact", async (req, res) => {
  try {
    res.status(200).json({ data: "Data Saved" });
  } catch (err) {
    res.status(400).json({ data: "Something went while saving date" });
  }
});

app.post("/leave", async (req, res) => {
  try {
    res.status(200).json([
      {
        SO: "Ahiraula",
        BO: "Baraipur",
        name: "Ishan Dev",
      },
      {
        SO: "Ahiraula",
        BO: "Bhimalpatti",
        name: "Raj Kunwar",
      },
      {
        SO: "Ahiraula",
        BO: "Samsabad",
        name: "Shashank",
      },
      {
        SO: "Ahiraula",
        BO: "",
        name: "Maya Kumari",
      },
    ]);
  } catch (err) {
    res.status(400).json({ data: "Something went while saving date" });
  }
});



app.post("/senioritylist", async (req, res) => {
  try {
    const cadre = req.body.cadre;
    let abc;
    if (cadre === "GDSBPM") {
      abc = [
        [
          "1",
          "10253160",
          "ishan",
          "Inspector",
          "PMG Kurnool",
          "OBC",
          "26.01.1993",
          "21.06.2018",
          "21.06.2023",
        ],
        [
          "2",
          "10253160",
          "saurabh",
          "Inspector",
          "PMG Kurnool",
          "OBC",
          "26.01.1993",
          "21.06.2018",
          "21.06.2023",
        ],
      ];
    } else if (cadre === "GDSABPM") {
      abc = [
        [
          "1",
          "10253160",
          "hsajhska",
          "Inspector",
          "PMG Kurnool",
          "OBC",
          "26.01.1993",
          "21.06.2018",
          "21.06.2023",
        ],
        [
          "2",
          "10253160",
          "soyab",
          "Inspector",
          "PMG Kurnool",
          "OBC",
          "26.01.1993",
          "21.06.2018",
          "21.06.2023",
        ],
      ];
    } else if (cadre === "Postman") {
      abc = [
        [
          "1",
          "10253160",
          "isagdsgfdhan",
          "Inspector",
          "PMG Kurnool",
          "OBC",
          "26.01.1993",
          "21.06.2018",
          "21.06.2023",
        ],
        [
          "2",
          "10253160",
          "asadgfdgdfg",
          "Inspector",
          "PMG Kurnool",
          "OBC",
          "26.01.1993",
          "21.06.2018",
          "21.06.2023",
        ],
      ];
    } else if (cadre === "MO") {
      abc = [
        [
          "1",
          "10253160",
          "idsfsfdsshan",
          "Inspector",
          "PMG Kurnool",
          "OBC",
          "26.01.1993",
          "21.06.2018",
          "21.06.2023",
        ],
        [
          "2",
          "10253160",
          "fdsfdsfdsf",
          "Inspector",
          "PMG Kurnool",
          "OBC",
          "26.01.1993",
          "21.06.2018",
          "21.06.2023",
        ],
      ];
    } else if (cadre === "PA") {
      abc = [
        [
          "1",
          "10253160",
          "ishrtetan",
          "Inspector",
          "PMG Kurnool",
          "OBC",
          "26.01.1993",
          "21.06.2018",
          "21.06.2023",
        ],
        [
          "2",
          "10253160",
          "oiuoiiuiu",
          "Inspector",
          "PMG Kurnool",
          "OBC",
          "26.01.1993",
          "21.06.2018",
          "21.06.2023",
        ],
      ];
    } else if (cadre === "SA") {
      abc = [
        [
          "1",
          "10253160",
          "ishxvvcxvcan",
          "Inspector",
          "PMG Kurnool",
          "OBC",
          "26.01.1993",
          "21.06.2018",
          "21.06.2023",
        ],
        [
          "2",
          "10253160",
          "bvcvcbvcbc",
          "Inspector",
          "PMG Kurnool",
          "OBC",
          "26.01.1993",
          "21.06.2018",
          "21.06.2023",
        ],
      ];
    } else {
      abc = [];
    }
    res.status(200).json({ data: abc });
  } catch (err) {
    res.status(400).json({ data: "Something went while fetching date" });
  }
});

app.post("/gdsCsv", uploads.single("csv"), async (req, res) => {
  try {
    console.log("entered");
    csv()
      .fromFile(req.file.path)
      .then((jsonObj) => {
        console.log(jsonObj);
      });
  } catch (e) {}
});

app.post("/senioritylist/edit", async (req, res) => {
  try {
    res.status(200).json({ data: "Saved the data" });
  } catch (err) {
    res.status(400).json({ data: "Something went while saving date" });
  }
});

app.post("/register", async (req, res) => {
  const dataReceived = req.body;

  if (!dataReceived.username) {
    res.status(204).json({ data: "Something went wrong" });
  } else if (dataReceived.username.length < 5) {
    res.status(400).json({ data: "Username is small" });
  } else {
    try {
      const hash = await bcrypt.hash(dataReceived.password, 10);

      const newUser = new User({
        username: dataReceived.username,
        personalInfo: {
          name: dataReceived.name,
          post: dataReceived.post,
          email: dataReceived.email,
        },
        office: {
          circle: dataReceived.circle,
          region: dataReceived.region,
          division: dataReceived.division,
          subDivision: dataReceived.subDivision,
        },
        password: hash,
      });
      const regresult = newUser.save();
      if (regresult) {
        res.status(201).json({ data: "User is registered" });
      } else {
        res.status(400).json({ data: "Something Went Wrong/Please try again" });
      }
    } catch (err) {
      res.status(404).json({ data: "Something went wrong" });
    }
  }
});

app.post("/registerSetting", async (req, res) => {});

app.get("/", (req, res) => {
  res.send("Hello world, let's go Cloud");
});

app.post("/getRegion", async (req, res) => {
  try {
    const result = await Region.find({ circle: req.body.circle });
    res.status(200).send(result);
  } catch (e) {
    res.status(404).send("Something Went Wrong");
  }
});

app.post("/getDivision", async (req, res) => {
  try {
    const result = await Division.find({ region: req.body.region });
    res.status(200).send(result);
  } catch (e) {
    res.status(404).send("Something Went Wrong");
  }
});
app.post("/getSubDivision", async (req, res) => {
  try {
    const result = await SubDivision.find({ division: req.body.division });
    res.status(200).send(result);
  } catch (e) {
    res.status(404).send("Something Went Wrong");
  }
});
// var server = https.createServer(options, app);

// server.listen(port, () => {
// console.log("server starting on port : " + port)
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
