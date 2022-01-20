import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LoginContext from '../../Contexts/LoginContext';

const Navbar = () => {
    const login = useContext(LoginContext);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <img src="/Assets/logo/smart_min.png"  alt="Indiapost" srcSet="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item ml-1">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    GDS Management
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/Paidleave">Paid Leave Orders</Link></li>
                                    <li><Link className="dropdown-item" to="/LWAorders">LWA Orders</Link></li>
                                    <li><Link className="dropdown-item" to="/Senioritylist">Seniority List</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/Putoff">Putt Off Memo</Link></li>
                                </ul>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SDN Management
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/Diary">Fortnightly Diary</Link></li>
                                    <li><Link className="dropdown-item" to="/TABills">TA Bills</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/IRS">Inspection Reports</Link></li>
                                    <li><Link className="dropdown-item" to="#">Visit Report</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="#" onClick={()=>{login.changelogin(false)}}>Log Out</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar