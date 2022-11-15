import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="page-footer container font-small unique-color-dark printNone">



            <div className="container-fluid text-center text-md-left mt-5  text-dark">


                <div className="row mt-3">


                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">


                        <img src="/Assets/logo/logo_min.png" className="m-indiapost-logo" alt="" srcSet="" />
                        <h6 className="text-uppercase font-weight-bold">IndiaPost</h6>

                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />

                        <p><b>GoPost</b> is web based app made for facilatitating DOP routine items to get the information flow easy as well as convinient saving time.</p>

                    </div>



                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">


                        <h6 className="text-uppercase font-weight-bold">Assigned Targets</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                        <p>
                             <Link to="/loading">SB Targets </Link>
                        </p>
                        <p>
                             <Link to="#">Insurance Targets </Link>
                        </p>
                        <p>
                             <Link to="#">Philately Targets </Link>
                        </p>
                        <p>
                             <Link to="#">Non BD Targets </Link>
                        </p>

                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">


                        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                        <p>
                             <Link to="#">Dashboard </Link>
                        </p>
                        <p>
                             <Link to="#">Important Circulars </Link>
                        </p>
                        <p>
                             <Link to="#">Important Memos </Link>
                        </p>
                        <p>
                             <Link to="#">Time-Lines </Link>
                        </p>

                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                        <p>
                            <i className="fas fa-home mr-3"></i> O/o PMG, Kurnool Region, Kurnool
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i> braincodeishan@gmail.com
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> +918882263883
                        </p>
                        <p>
                            <i className="fas fa-print mr-3"></i> 08518-2339XX
                        </p>

                    </div>


                </div>


            </div>



            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <Link to="#"> Indiapost </Link>
            </div>


        </footer>
    )
}

export default Footer