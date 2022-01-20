import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginProvider from './Contexts/LoginProvider';


import Header from "./Components/Headers/Header";
import Login from "./Components/MainComponents/Login";
import Register from "./Components/MainComponents/Register";
import Dashboard from "./Components/Dashboard";
import Diary from './Components/MainComponents/Diary';
import Footer from "./Components/Footers/Footer";
import IRS from "./Components/MainComponents/IRS";
import LWAorders from "./Components/MainComponents/LWAorders";
import Paidleave from "./Components/MainComponents/Paidleave"
import Putoff from './Components/MainComponents/Putoff';
import Senioritylist from "./Components/MainComponents/Senioritylist"
import TABills from "./Components/MainComponents/TABills"
import Hamburger from "./Components/sub-component/Hamburger";




function MainApp() {
  

  return (
    <>
    <div class="sdhjksd">
    <LoginProvider>
    
    <Hamburger/>
    <Header/>
    
    
    <Routes>
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Register" element={<Register/>} />
        <Route exact path="/Dashboard" element={<Dashboard/>} />
        <Route exact path="/Diary" element={<Diary/>} />
        <Route exact path="/IRS" element={<IRS/>} />
        <Route exact path="/LWAorders" element={<LWAorders/>} />
        <Route exact path="/Paidleave" element={<Paidleave/>} />
        <Route exact path="/Putoff" element={<Putoff/>} />
        <Route exact path="/Senioritylist" element={<Senioritylist/>} />
        <Route exact path="/TABills" element={<TABills/>} />
        
    </Routes>
    <Footer/>
    
    
    </LoginProvider>
    </div>
    </>
  );
}

export default MainApp;
