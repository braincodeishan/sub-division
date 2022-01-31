import React,{useState} from 'react'
import Alert from '../sub-component/Alert';
import { useNavigate } from 'react-router'
const Register = () => {
    
    const navigate=useNavigate();
const [username, setusername] = useState("");
const [password, setpassword] = useState("");
const [email, setemail] = useState("");
const [confirmpass, setconfirmpass] = useState("");
const [message,setmessage]=useState("");
const [msgtype,setmsgtype]=useState("");

const register= async ()=>{
// console.log(username,password,email)
const change=() => {
    setmsgtype("");
    setmessage("");
    
}

const result= await fetch("http://localhost:3001/register",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    credentials:"include",
    body:JSON.stringify({
        username,
        email,
        password

    })
})
const res=await result.json();

if(res.status===201){
    setmsgtype("alert-success");
    setmessage('Welcome, Redirecting you to the login page');
    setTimeout(()=>{
        navigate('/Login')
    }, 2000);    
    }
else if(res.Error.code===11000){
    setmsgtype("alert-danger");
    setmessage('User is already registered, Please use a different Username');
    setTimeout(change,2000)
}else{
    setmsgtype("alert-danger");
    setmessage('Something Went Wrong...');
    setTimeout(change,2000)
}






}


    return (
        <>
            {message!==""?<Alert msg={message} msgtype={msgtype}/>:<></>}
            
            <section className="csbvdb pt-5 pb-5" >
                <div className="container mx-auto col-12">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11 col-12">
                            <div className="card text-black" style={{borderRadius: "25px"}}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" name="Username" className="form-control" onChange={(e)=>{setusername(e.target.value)}} value={username}/>
                                                        <label className="form-label" htmlFor="form3Example1c" >Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" onChange={(e)=>{setemail(e.target.value)}} value={email}/>
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" onChange={(e)=>{setpassword(e.target.value)}} value={password}/>
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4cd" className="form-control" onChange={(e)=>{setconfirmpass(e.target.value)}} value={confirmpass}/>
                                                        <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input
                                                        className="form-check-input me-2"
                                                        type="checkbox"
                                                        value=""
                                                        id="form2Example3c"
                                                    />
                                                    <label className="form-check-label" htmlFor="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={register}>Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample"/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
