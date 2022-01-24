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
            <section class="fdjkf col-12 d-flex">
                <Inspectionpending alloted={78} allotedtillmonth={46} pending={12} irIssued={10} irPending={5} tableHeading={tableHeading} tableBody={tableBody}/>
                <EmoVerify/> 
                
                
                {/* {<Blobs />} */}

            </section>
            <section className='fdjkf col-12 d-flex'>
            <Cards classes={'col-12 col-md-12 col-lg-11 mx-auto'} header={"Paid Leaves"} title={""} text={"Paid Leave in respect of the GDS staff"} button={"/Paidleaves"} buttontext={"Lets Prepare"}/>
            </section>
        </>
    )
}

export default Dashboard
