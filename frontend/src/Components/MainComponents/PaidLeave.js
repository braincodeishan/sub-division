import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import LoginContext from "../../Contexts/LoginProvider";
import { useMisc } from "../../Contexts/LoginProvider";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
const PaidLeave = () => {
  const [gdsData, setGDSDATA] = useState([]);
  const Login = useContext(LoginContext);
  const { alertDanger, setLoading } = useMisc();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await axios({
      method: "POST",
      url: process.env.REACT_APP_SERVER + "/leave",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",

      data: {
        username: "Login.postId",
      },
    });
    if (data.status === 200) {
      console.log("hello world paid leave");
      setGDSDATA(data.data);
    } else {
      alertDanger("Something Went Wrong..");
      setLoading(false);
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            
            <th>SO Name</th>
            <th>BO Name</th>
            <th>Name Of the Official</th>
           
            <th>Type of Leave</th>
            <th>From</th>
            <th>To</th>
            <th>Remarks</th>
            <th>Submit</th>
          </tr>
        </thead>

        <tbody>
          {gdsData.map((data, index) => {
            return (
              <tr>
                
                <td>{data.SO}</td>
                <td>{data.BO}</td>
                <td>{data.name}</td>
                
                <td>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={}
                    label="Age"
                    onChange={()=>{

                    }}
                  >
                    <MenuItem value={"LWA"}>Leave Without Allowance</MenuItem>
                    <MenuItem value={"PAID LEAVE"}>Paid Leave(10Days)</MenuItem>
                    <MenuItem value={"Emergency Leave"}>Emergency Leave(5Days)</MenuItem>
                  </Select>
                </td>
                <td>
                  <input type="date" />
                </td>
                <td>
                  <input type="date" />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <button>Submit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PaidLeave;
