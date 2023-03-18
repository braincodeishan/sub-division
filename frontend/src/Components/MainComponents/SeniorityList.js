import React, { useState, useEffect } from 'react'
import Table from '../sub-component/SeniorityList/Table';
import HorizontalLine from '../sub-component/HorizontalLine'
import EmployeeChange from '../sub-component/SeniorityList/EmployeeChange';
const SeniorityList = () => {
    const [data, setdata] = useState([]);
    const [cadre, setCadre] = useState("");
    const [showEmployeeEdit, setshowEmployeeEdit]=useState(false);
    const [employeeID, setemployeeID]=useState([]);
    const heading = ["Serial No", "Employee ID","Name of the Employee", "Cadre", "Office Name", "Category", "Date Of Birth", "Date of Joining", "Date of Retirement","Modify","Delete"]
    useEffect(() => {
        seniorityData();
    },[cadre]);

    const seniorityData = async () => {
        const res = await fetch(process.env.REACT_APP_SERVER+"/senioritylist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                cadre
            })
        })
        const result = await res.json();
        console.log(result);
        if (result) {
            setdata(result.data);
        }

    }
    
    const employeeEdit=(empID)=>{
        console.log(empID)
        setemployeeID(empID)
        setshowEmployeeEdit(true);


    }
    const employeeDel=(empID)=>{
        console.log("Employee Delete Hit"+ empID)
        setemployeeID(empID)

    }

    return (
        <>
            {showEmployeeEdit && <EmployeeChange data={employeeID} close={setshowEmployeeEdit}/>}
            <section className='d-flex flex-column'  >
                <div className='Seniority-bg d-flex justify-content-center align-items-center'>
                    <h1 className='text-light'>Seniority List</h1>
                </div>

                <div className='container-fluid p-5 bg-light d-flex justify-content-center align-items-center'>
                    <div className='col-4'>
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => {setCadre(e.target.value)}} value={cadre}>
                            <option value="" selected>Please select the Cadre</option>
                            <option value="GDSBPM">GDS - BPM</option>
                            <option value="GDSABPM">GDS - ABPM</option>
                            <option value="Postman">Postman Overseer</option>
                            <option value="MO">Mail Overseer</option>
                            <option value="PA">Postal Assistant</option>
                            <option value="SA">Sorting Assistant</option>
                            <option value="IP">Inspector Post</option>
                            <option value="ASP">Assistant Superintendent of Post</option>
                            <option value="SP">Superintendent of Post</option>
                        </select>
                    </div>
                </div>
                <div className='container-fluid col-8 minh-40vh'>
                    {
                        (data.length > 0) && <Table heading={heading} body={data} employeeEdit={employeeEdit} employeeDel={employeeDel}/>
                    }
                </div>
                <HorizontalLine lineno={3} />

            </section>
        </>
    )
}

export default SeniorityList
