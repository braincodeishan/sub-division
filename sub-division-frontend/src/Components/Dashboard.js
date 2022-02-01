import React,{useEffect} from 'react'


import Cards from './sub-component/Cards';


// import { Link } from 'react-router-dom'
// import Blobs from './sub-component/Blobs'
import OtherWorks from './sub-component/OtherWorks';
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
        <div className='p-5 Dashboard'>
            <section className=" col-12 d-flex flex-lg-row flex-column">
                <Inspectionpending alloted={78} allotedtillmonth={46} pending={12} irIssued={10} irPending={5} tableHeading={tableHeading} tableBody={tableBody} />
                <OtherWorks/> 
                
                
                {/* {<Blobs />} */}

            </section>
            <section className='dashboard-2 col-12 d-flex flex-column flex-lg-row mt-5'>
            <div className='col-12 col-lg-8 d-flex flex-column'>
            <Cards key={0} classes={'col-12 col-sm-10 col-lg-10 mx-auto m-3'} header={"Paid Leaves"} title={[""]} text={["Paid Leave in respect of the GDS staff"]} button={["/PaidLeave"]} buttontext={["Lets Prepare"]}/>
            <Cards key={1} classes={'col-12 col-sm-10 col-lg-10 mx-auto m-3'} header={"Leave without Allowance"} title={[""]} text={["Leave orders in respect of the GDS staff/Postman"]} button={["/LeaveOrders"]} buttontext={["Lets Prepare"]}/>
            <Cards key={2} classes={'col-12 col-sm-10 col-lg-10 mx-auto m-3'} header={"Seniority List"} title={[""]} text={["Seniority List for GDS staff"]} button={["/SeniorityList"]} buttontext={["View Seniority List"]}/>
            </div>
            <div className='col-12 col-lg-4 d-flex flex-column '>
            <Cards key={3} classes={'col-12 col-sm-10 col-lg-10 mx-auto minh-62P maxh-96P m-3 overflow-auto '} header={"Notices"} title={["",""]} text={["New recruitment rules with respect to GDS are applicable since 21.02.2022","Transfer Results for GDS"]} button={["/Notices"]} buttontext={["Lets Explore","View Transfer Results"]}/>
            
            </div>
            </section>
            </div>
        </>
    )
}

export default Dashboard
