import React, { useState, useEffect, useContext } from 'react'
import LoginContext from '../../Contexts/LoginContext';
import { Link } from 'react-router-dom'
import { useMisc } from '../../Contexts/LoginProvider';

const Navbar = () => {
  const Login = useContext(LoginContext)
  const [sidebarclass, setsidebarclass] = useState("close");
  const [menu, setmenu] = useState("bx-menu");
  const {alertSuccess}=useMisc();
  useEffect(() => {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      });
    }
  

  }, []);

  const logOut = async() => {
    const logout= await fetch("http://localhost:3001/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",

            },
            credentials: "include",

        });
        if(logout.status===200){
            alertSuccess('Logged Out')
        }
    Login.changelogin(false);
  }




  const showLogin = () => {
    if (!Login.isLoggedin) {
      return (<li>
        <div className="iocn-link">
          <Link to="#">
            <i className='bx bxs-key bx-tada' ></i>
            <span className="link_name">Login</span>
          </Link>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sub-menu">
          <li><Link className="link_name" to="#">Login</Link></li>
          <li><Link to="/Register">Register</Link></li>
          <li><Link to="/Login">Login</Link></li>

        </ul>
      </li>);
    }
  }

  const sidebarclose = () => {
    if (sidebarclass === "close") {
      setsidebarclass("");
      setmenu("bx-menu-alt-right")
    } else {
      setsidebarclass("close");
      setmenu("bx-menu")
    }
  }
  return (
    <>
      <div className={"printNone sidebar " + sidebarclass} id='sidebar'>
        <div className="logo-details">
          <i className='bx bxl-magento bx-spin' ></i>
          {/* <i className='bx bxs-brain bx-spin' ></i> */}
          {/* <i className='bx bxl-c-plus-plus'></i> */}
          <span className="logo_name">GoPost</span>
          <i className={'bx ' + menu} id="btn" onClick={sidebarclose}></i>
        </div>
        <ul className="nav-links">
          {showLogin()}
          <li>
            <Link to="/Dashboard">
              <i className='bx bx-grid-alt' ></i>
              <span className="link_name">Dashboard</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/Dashboard">Dashboard</Link></li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <Link to="#">
                <i className='bx bx-collection' ></i>
                <span className="link_name">GDS Management</span>
              </Link>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">
              <li><Link className="link_name" to="#">GDS Management</Link></li>
              <li><Link to="/PaidLeave">Paid Leave</Link></li>
              <li><Link to="/LeaveOrders">LWA Orders</Link></li>
              <li><Link to="/SeniorityList">Seniority List</Link></li>
              <li><Link to="/PutOff">Putt Off Memo</Link></li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <Link to="#">
                <i className='bx bx-book-alt' ></i>
                <span className="link_name">Sub Division Management</span>
              </Link>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">
              <li><Link className="link_name" to="#">Sub Division Management</Link></li>
              <li><Link to="/TABills">TA Bills</Link></li>
              <li><Link to="/Diary">Diary</Link></li>
              <li><Link to="/TourProgram">Tour Program</Link></li>
              <li><Link to="/IRS">Inspection Reports</Link></li>
              <li><Link to="/CPV">Cent % Verification</Link></li>
              <li><Link to="/Recruitment">Recruitment</Link></li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <Link to="#">
                <i className='bx bx-pie-chart-alt-2' ></i>
                <span className="link_name">Mail Overseer</span>
              </Link>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">
              <li><Link className="link_name" to="#">Mail Overseer</Link></li>
              <li><Link to="/MOMVS">MO Visit Statement</Link></li>

            </ul>
          </li>
          {/* <li>
            <Link to="#">
              <i className='bx bx-pie-chart-alt-2' ></i>
              <span className="link_name">Mail Overseer</span>
            </Link>
            <ul className="sub-menu">
              <li><Link className="link_name" to="#">Mail Overseer</Link></li>
              <li><Link to="/MOMVS">MO Monthly Visit Statement</Link></li>
            </ul>
          </li> */}
          <li>
            <Link to="/Targets">
              <i className='bx bx-line-chart' ></i>
              <span className="link_name">Targets And Acheivement</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/Targets">Targets And Acheivement</Link></li>
            </ul>
          </li>

          <li>
            <Link to="#">
              <i className='bx bx-compass' ></i>
              <span className="link_name">Explore</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="#">Explore</Link></li>
              <li><Link to="/AdditionalCharge">Additional Charge Order</Link></li>
              <li><Link to="/ChargeReport">Charge Report</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/Contact">
              <i className='bx bx-history'></i>
              <span className="link_name">Contact Us</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/Contact">Contact Us</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/Settings">
              <i className='bx bx-cog' ></i>
              <span className="link_name">Setting</span>
            </Link>
            <ul className="sub-menu blank">
              <li><Link className="link_name" to="/Settings">Setting</Link></li>
              <li><Link to="/UpdateData">Data Upload</Link></li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <i className='bx bxs-user' ></i>
              </div>
              <div className="name-job">
                <div className="profile_name">Ishan Dev</div>
                <div className="job">Inspector Post</div>
              </div>
              <i className='bx bx-log-out' onClick={() => { logOut() }}></i>
            </div>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Navbar





