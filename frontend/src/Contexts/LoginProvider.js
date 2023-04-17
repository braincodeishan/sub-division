import React, { useState } from 'react'
import { createContext, useContext } from "react";
import LoginContext from './LoginContext';

const Misc = createContext();
export { Misc };

const useMisc=()=>{
    return useContext(Misc)
  }
  export {useMisc }

const LoginProvider = (props) => {

    const [isLoggedin, setisLoggedin] = useState(false);
    const [isFirstLogIn, setisFirstLogIn] = useState(false);
    const [name, setName] = useState("");
    const [post, setPost] = useState("");
    
    const [circle, setCircle] = useState("");
    const [region, setRegion] = useState("");
    const [division, setDivision] = useState("");
    const [subDivision, setSubDivision] = useState("");


    const changelogin = async (val) => {

        setisLoggedin(val);

    }
    return (
        <LoginContext.Provider value={{ isLoggedin, changelogin,name, setName,post, setPost, circle,setCircle,region,setRegion,division,setDivision,subDivision,setSubDivision, isFirstLogIn, setisFirstLogIn }}>
            {props.children}
        </LoginContext.Provider>

    )
}

export default LoginProvider

const MiscProvider = (props) => {
    const [alert, setAlert] = useState({
        show: false,
        message: "",
        severity: ""
    });
    const [loading, setLoading] = useState(false);
    const alertSuccess = (message) => {

        if (!alert.show) {
            setAlert({
                show: true,
                message: message,
                severity: 'success'
            })
            setTimeout(() => {
                setAlert({
                    show: false,
                    message: "",
                    severity: ""
                })
            }, 2000);
        }
    }
    const alertDanger = (message) => {

        if (!alert.show) {
            setAlert({
                show: true,
                message: message,
                severity: 'error'
            })
            setTimeout(() => {
                setAlert({
                    show: false,
                    message: "",
                    severity: ""
                })
            }, 2000);
        }
    }

    return (
        <Misc.Provider value={{
            alert,
            setAlert,
            alertSuccess,
            alertDanger,
            loading,
            setLoading,
        }}>
            {props.children}
        </Misc.Provider>
    );
};

export { MiscProvider };