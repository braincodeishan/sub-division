import React from 'react'
import Cards from './sub-component/Cards';
// import { Link } from 'react-router-dom'
// import Blobs from './sub-component/Blobs'
import EmoVerify from './sub-component/EmoVerify';
import Inspectionpending from './sub-component/Inspectionpending';


const Dashboard = () => {
    const tableHeading = ['Name of Office', 'DLI', 'Inspection Due'];
    const tableBody = [['KGKuntla BO', '28.01.2021', 'Jan-2022'],
                        ['Chityala BO','25.02.2021','Feb-2022'],
                    ['Pamulapadu SO','26.03.2021','Mar-2022'],
                    ['Pamulapadu SO','26.03.2021','Mar-2022'],
                    ['Pamulapadu SO','26.03.2021','Mar-2022']];
    return (
        <>
        <div className='fdjkf'>
            <section className=" col-12 d-flex flex-lg-row flex-column">
                <Inspectionpending alloted={78} allotedtillmonth={46} pending={12} irIssued={10} irPending={5} tableHeading={tableHeading} tableBody={tableBody}/>
                <EmoVerify/> 
                
                
                {/* {<Blobs />} */}

            </section>
            <section className='dashboard-2 col-12 d-flex flex-sm-column flex-lg-row'>
            <div className='col-8 d-flex flex-sm-column'>
            <Cards classes={'col-12 col-md-8 col-lg-10 mx-auto m-3 mt-5'} header={"Paid Leaves"} title={""} text={"Paid Leave in respect of the GDS staff"} button={"/Paidleaves"} buttontext={"Lets Prepare"}/>
            <Cards classes={'col-12 col-md-8 col-lg-10 mx-auto m-3'} header={"Leave without Allowance"} title={""} text={"Leave orders in respect of the GDS staff/Postman"} button={"/LeavesOrder"} buttontext={"Lets Prepare"}/>
            <Cards classes={'col-12 col-md-8 col-lg-10 mx-auto m-3'} header={"Seniority List"} title={""} text={"Seniority List for GDS staff"} button={"/Seniority List"} buttontext={"View Seniority List"}/>
            </div>
            <div className='col-4 d-flex flex-sm-column'>
            <Cards classes={'col-12 col-md-8 col-lg-10 h-75 mx-auto m-3 mt-5'} header={"Paid Leaves"} title={""} text={"Paid Leave in respect of the GDS staff"} button={"/Paidleaves"} buttontext={"Lets Prepare"}/>
            
            </div>
            </section>
            </div>
        </>
    )
}

export default Dashboard
