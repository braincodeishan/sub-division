const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const app = express();
const Office = require("./Models/Office");
const {
  Circle,
  Region,
  Division,
  SubDivision,
} = require("./Models/Dependency");
const Offices = require("./json");
const SO = require("./Models/SO");
const cookieParser = require("cookie-parser");
const uri = process.env.URIL;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
    // credentials: true,
  })
);

mongoose
  .connect(uri)
  .then((res) => {
    console.log("db connected successfully");
  })
  .catch((error) => {
    console.log("Something wrong happened" + error);
  });

const circle = "Uttar Pradesh";
const region = "Gorakhpur";
const division = "Azamgarh";
const subDivision = "Phoolpur";
const facilityID = "CS000000001";
const HindiCircle = "उत्तर प्रदेश";

const mycircle = new Circle({
  facilityId: facilityID,
  name: circle,
  hindiName: HindiCircle,
  region: [],
});
mycircle
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });







async function abc() {
  const villageName = document.querySelector("#villageName").value;

  const gramPanchayatName = document.querySelector("#grampanchayatName").value;

  const blockName = document.querySelector("#blockName").value;
  const groupName = document.querySelector("#groupName").value;
  const tableData = document.querySelector("#example");
  const rowData = tableData.querySelectorAll("td");
  let memberCode, memberName, fatherName, gender, socialCategory;
  var i;
  if (groupName) {
    try {
      for (i = 0; i <(rowData.length/10); i++) {
        memberCode = rowData[i * 10 + 1].innerHTML;
        memberName = rowData[i * 10 + 2].innerHTML;
        fatherName = rowData[i * 10 + 3].innerHTML;
        gender = rowData[i * 10 + 4].innerHTML;
        socialCategory = rowData[i * 10 + 5].innerHTML;

        console.log(
          villageName,
          gramPanchayatName,
          blockName,
          groupName,
          memberCode
        );
        const result = await fetch(
          "http://localhost:3001/shgData?" +
            `blockName=${blockName}&gramPanchayatName=${gramPanchayatName}&villageName=${villageName}&groupName=${groupName}&memberCode=${memberCode}&memberName=${memberName}&fatherName=${fatherName}&gender=${gender}&socialCategory=${socialCategory}`
        );

        const result1 = await result.text();
        console.log(result1);
      }
    } catch (e) {
      console.log(e);
    }
  }
}


abc();