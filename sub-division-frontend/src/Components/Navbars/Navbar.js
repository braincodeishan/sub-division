import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const  sidebarclass="sidebar"
  const sidebarclose = ()=>{
    
  }
  return (
    <>
      <div className={"sidebar"+sidebarclass}>
        <div className="logo-details">
        {/* <i class='bx bxl-magento bx-flashing' ></i> */}
        {/* <i class='bx bxs-brain bx-spin' ></i> */}
          <i className='bx bxl-c-plus-plus'></i>
          <span className="logo_name">CodingLab</span>
          <i class='bx bx-menu' id="btn" onClick={sidebarclose}></i>
        </div>
        <ul className="nav-links">
        <li>
            <div className="iocn-link">
              <Link to="#">
              <i class='bx bxs-key bx-tada' ></i>
                <span className="link_name">Login</span>
              </Link>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">
              <li><Link className="link_name" to="#">Login</Link></li>
              <li><Link to="/Register">Register</Link></li>
              <li><Link to="/Login">Login</Link></li>
              
            </ul>
          </li>
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
              <li><Link to="/MOMVS">MO Monthly Visit Statement</Link></li>
              
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
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                {/* <!--<img src="image/profile.jpg" alt="profileImg">--> */}
              </div>
              <div className="name-job">
                <div className="profile_name">Prem Shahi</div>
                <div className="job">Web Desginer</div>
              </div>
              <i className='bx bx-log-out' ></i>
            </div>
          </li>
        </ul>
      </div>
      
    </>
  )
}

export default Navbar





