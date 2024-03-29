import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginProvider from './Contexts/LoginProvider';
import { useMisc } from "../src/Contexts/LoginProvider";


import Header from "./Components/Headers/Header";
import Login from "./Components/MainComponents/Login";
import Register from "./Components/MainComponents/Register";
import Dashboard from "./Components/Dashboard";
import Diary from './Components/MainComponents/Diary';
import Footer from "./Components/Footers/Footer";
import IRS from "./Components/MainComponents/IRS";
import LeaveOrders from "./Components/MainComponents/LeaveOrders";
import PaidlLeave from "./Components/MainComponents/PaidLeave"
import PutOff from './Components/MainComponents/PutOff';
import SeniorityList from "./Components/MainComponents/SeniorityList"
import TABills from "./Components/MainComponents/TABills"
import Notfound from "./Components/MainComponents/Notfound";
import EMOPrep from "./Components/EditingComponents/EMOPrep";
import TourProgram from "./Components/MainComponents/TourProgram";
import Notices from "./Components/MainComponents/Notices";
import Settings from "./Components/EditingComponents/Settings";
import Contact from "./Components/EditingComponents/Contact";
import AdditionalCharge from "./Components/sub-component/AdditionalCharge/AdditionalCharge";
import ChargeReport from "./Components/sub-component/ChargeReport/ChargeReport";
import ProtectedRoutes from "./Contexts/ProtectedRoutes";
import Navbar from "./Components/Navbars/Navbar";
import Recruitment from "./Components/MainComponents/Recruitment";
import UpdateData from "./Components/sub-component/Data Upload/UpdateData";
import PostData from "./Components/sub-component/PostData/PostData";
import RegisterSetting from "./Components/sub-component/RegisterSetting/RegisterSetting";
import Loading from "./Components/sub-component/Loading";
import { SnackbarAlert } from "./Components/sub-component/Alert";

// PLI cmponents
import PLIRPLICommissionCalculator from "./PliComponents/PLIRPLICommissionCalculator";

function MainApp() {
  const {alert, setAlert, loading}= useMisc();

  return (
    <>
      <div className="sdhjksd">
        {alert.show && <SnackbarAlert {...alert} setopenSnack={setAlert} />}
        {
          loading && <Loading />
        }
        <LoginProvider>
          <Header />
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/PLICommissions" element={<PLIRPLICommissionCalculator />} />
            <Route exact path="/ChargeReport" element={<ChargeReport />} />
            <Route element={<ProtectedRoutes />}>
              <Route exact path="/Dashboard" element={<Dashboard />} />
              <Route exact path="/Diary" element={<Diary />} />
              <Route exact path="/IRS" element={<IRS />} />
              <Route exact path="/Recruitment" element={<Recruitment />} />
              <Route exact path="/LeaveOrders" element={<LeaveOrders />} />
              <Route exact path="/Paidleave" element={<PaidlLeave />} />
              <Route exact path="/PutOff" element={<PutOff />} />
              <Route exact path="/Senioritylist" element={<SeniorityList />} />
              <Route exact path="/TABills" element={<TABills />} />
              <Route exact path="/EMOPrep" element={<EMOPrep />} />
              <Route exact path="/TourProgram" element={<TourProgram />} />
              <Route exact path="/Notices" element={<Notices />} />
              <Route exact path="/Settings" element={<Settings />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/Loading" element={<Loading />} />
              <Route exact path="/UpdateData" element={<UpdateData />} />
              <Route exact path="/AdditionalCharge" element={<AdditionalCharge />} />
              
              <Route exact path="/PostData" element={<PostData />} />
              <Route exact path="/RegisterSetting" element={<RegisterSetting />} />
              

              <Route path="*" element={<Notfound />} />
            </Route>
          </Routes>
          <Footer />


        </LoginProvider>
      </div>
    </>
  );
}

export default MainApp;
