import React, { useState } from 'react'
import axios from 'axios'
import { useMisc } from '../../Contexts/LoginProvider'
import { useNavigate } from 'react-router'


const Register = () => {

    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [name, setName] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [post, setPost] = useState("");
    const [circle, setCircle] = useState([]);
    const [region, setRegion] = useState("");
    const [division, setDivision] = useState("");
    const [subDivision, setSubDivision] = useState("");
    const [confirmpass, setconfirmpass] = useState("");
    const { setLoading, alertSuccess, alertDanger } = useMisc();

    const registerUser = async () => {

        const result = await axios({
            method: "POST",
            url: process.env.REACT_APP_SERVER + "/register",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            data: {
                username,
                name,
                email,
                post,
                circle,
                region,
                division,
                subDivision,
                password

            }
        })

        console.log(result)
        if (result.status === 201) {

            alertSuccess('Welcome, Redirecting you to the login page');
            setTimeout(() => {
                navigate('/Login')
            }, 2000);
        }
        else if (result.Error.code === 11000) {

            alertDanger('User is already registered, Please use a different Username');

        } else {

            alertDanger('Something Went Wrong...');

        }






    }


    return (
        <>


            <section className="csbvdb pt-5 pb-5" >
                <div className="container mx-auto col-12">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11 col-12">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" name="Username" className="form-control" onChange={(e) => { setusername(e.target.value) }} value={username} />
                                                        <label className="form-label" htmlFor="form3Example1c" >Employee ID</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" name="Username" className="form-control" onChange={(e) => { setName(e.target.value) }} value={name} />
                                                        <label className="form-label" htmlFor="form3Example1c" >Name</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" onChange={(e) => { setemail(e.target.value) }} value={email} />
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-pencil fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <select class="form-control form-control-lg" onChange={(e) => { setPost(e.target.value) }} >
                                                            <option selected>Select...</option>
                                                            <option value={'INSPECTOR POST'}>Inspector</option>
                                                            <option value={'ASSISTANT SUPERTINDENT OF POST OFFICES'}>ASPOs</option>
                                                            <option value={'SUPERTINDENT OF POST OFFICES'}>SPOs</option>
                                                            <option value={'SENIOR SUPERTINDENT OF POST OFFICES'}>SSPOs</option>

                                                        </select>
                                                        <label className="form-label" htmlFor="form3Example3c">Post</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-pencil fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <select class="form-control form-control-lg"
                                                            onChange={async (e) => {
                                                                setLoading(true);
                                                                setCircle(e.target.value)
                                                                // const circle = e.target.value;
                                                                // const result = await axios({
                                                                //     method: "POST",
                                                                //     url: process.env.REACT_APP_SERVER + "/getRegion",
                                                                //     headers: {
                                                                //         "Content-Type": "application/json"
                                                                //     },
                                                                //     data: {
                                                                //         circle,
                                                                //     }

                                                                // })
                                                                // if (result) {
                                                                    // setRegion(result.data);
                                                                //     console.log(result.data);
                                                                // }
                                                                setLoading(false);
                                                            }}>
                                                            <option>Select...</option>
                                                            <option value={'Andhra Pradesh'}>Andhra Pradesh</option>
                                                            <option>Assam</option>
                                                            <option>Bihar</option>
                                                            <option>Chattisgarh</option>
                                                            <option>Delhi</option>
                                                            <option>Gujrat</option>
                                                            <option>Haryana</option>
                                                            <option>Himanchal Pradesh</option>
                                                            <option>Jammu Kashmir</option>
                                                            <option>Jharkhand</option>
                                                            <option>Karnataka</option>
                                                            <option>Kerala</option>
                                                            <option>Madhya Pradesh</option>
                                                            <option>Maharastra</option>
                                                            <option>North East</option>
                                                            <option>Odhisa</option>
                                                            <option>Punjab</option>
                                                            <option>Rajasthan</option>
                                                            <option>Tamil Nadu</option>
                                                            <option>Telangana</option>
                                                            <option>Uttar Pradesh</option>
                                                            <option>Uttarakhand</option>
                                                            <option>West Bengal</option>
                                                        </select>
                                                        <label className="form-label" htmlFor="form3Example3c">Circle</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-pencil fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" name="Region" className="form-control" onChange={(e) => { setRegion(e.target.value) }} value={region} />
                                                        <label className="form-label" htmlFor="form3Example1c" >Region</label>
                                                    </div>
                                                    {/* <div className="form-outline flex-fill mb-0">
                                                        <select class="form-control form-control-lg">
                                                            <option>Select...</option>
                                                            {region.map((val,index)=>{
                                                                return <option key={index}>{val.region}</option>
                                                            })}

                                                        </select>
                                                        <label className="form-label" htmlFor="form3Example3c">Region</label>
                                                    </div> */}
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-pencil fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" name="Division" className="form-control" onChange={(e) => { setDivision(e.target.value) }} value={division} />
                                                        <label className="form-label" htmlFor="form3Example1c" >Division</label>
                                                    </div>
                                                    {/* <div className="form-outline flex-fill mb-0">
                                                        <select class="form-control form-control-lg">
                                                            <option>Select...</option>

                                                        </select>
                                                        <label className="form-label" htmlFor="form3Example3c">Division</label>
                                                    </div> */}
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-pencil fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" name="Subdivision" className="form-control" onChange={(e) => { setSubDivision(e.target.value) }} value={subDivision} />
                                                        <label className="form-label" htmlFor="form3Example1c" >Sub Division</label>
                                                    </div>
                                                    {/* <div className="form-outline flex-fill mb-0">
                                                        <select class="form-control form-control-lg">
                                                            <option>Select...</option>

                                                        </select>
                                                        <label className="form-label" htmlFor="form3Example3c">Sub Division</label>
                                                    </div> */}
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" onChange={(e) => { setpassword(e.target.value) }} value={password} />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4cd" className="form-control" onChange={(e) => { setconfirmpass(e.target.value) }} value={confirmpass} />
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
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={registerUser}>Register</button>
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
        </>
    )
}

export default Register
