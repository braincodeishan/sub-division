import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
import LoginContext from '../../Contexts/LoginContext';
import Alert from '../sub-component/Alert';
import Loading from "../sub-component/Loading"

const Login = () => {


    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [alert, setalert] = useState({status:400,message:""});
    const [isLoading,setisLoading]=useState(false)


    const Login = useContext(LoginContext)
    const navigate = useNavigate();

    useEffect(() => {
        if(!Login.isLoggedin){
            tokenver();
        }
    },[Login.isLoggedin])

    useEffect(() => {
        if (Login.isLoggedin) {
            setTimeout(() => {
                setisLoading(false)
                navigate('/Dashboard')
            }, 2000);
        }
    }, [Login.isLoggedin])

    const tokenver = async () => {
        setisLoading(true)
        const result = await fetch("http://localhost:3001/tokenverify", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",

            },
            credentials: "include",

        });
        const res = await result.json();
        if (res.status === 200) {
            Login.changelogin(true)
        }else{
            setisLoading(false)
        }
    }


    const logmein = async () => {
        setisLoading(true);
        const result = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",



            },
            credentials: "include",

            body: JSON.stringify({
                username,
                password

            })
        })

        const res = await result.json();

        if (result.status === 200) {
            setalert({status:200,message:'Welcome ' + res.name.toUpperCase()+" !"});
            Login.changelogin(true)

        } else {
            setalert({status:400,message:res.Error});
            setTimeout(() => {
                setalert({status:400,message:""})
                setisLoading(false)
            }, 2000);
        }

    }


    return (
        <div>
            {isLoading && <Loading/>}
            {alert.message !== "" && <Alert alert={alert}/> }
            <section className="csbvdb pt-5 pb-5" >
                <div className="container h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" name="Username" className="form-control" onChange={(e) => { setusername(e.target.value) }} value={username} />
                                                        <label className="form-label" htmlFor="form3Example1c" >User Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" onChange={(e) => { setpassword(e.target.value) }} value={password} />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={logmein}>Sign in</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login