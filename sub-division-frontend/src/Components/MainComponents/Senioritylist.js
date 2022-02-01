import React, { useState, useEffect } from 'react'
import Table from '../sub-component/Table';
import HorizontalLine from '../sub-component/HorizontalLine'

const SeniorityList = () => {
    const [data, setdata] = useState();
    const [cadre, setCadre] = useState("GDSBPM");
    const heading = ["Serial No", "Name of the Employee", "Cadre", "Office Name", "Category", "Date Of Birth", "Date of Joining", "Date of Retirement"]
    // useEffect(() => {
    //     seniorityData();
    // },[]);

    const seniorityData = async () => {
        const res = await fetch("http://localhost:3001/senioritylist", {
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
            setdata(result);
        }

    }
    const cadreChange = (e) => {
        setCadre(e.target.value);
        seniorityData();

    }

    return (
        <>
            <section className='d-flex flex-column'  >
                <div className='Seniority-bg d-flex justify-content-center align-items-center'>
                    <h1 className='text-light'>Seniority List</h1>
                </div>

                <div className='container p-5 bg-light d-flex justify-content-center align-items-center'>
                    <div className='col-4'>
                        <select className="form-select form-select-lg mb-3 col-4" aria-label=".form-select-lg example" onChange={(e) => { cadreChange(e) }} >
                            <option value="">Please select the Cadre</option>
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
                <div className='container'>
                    {
                        data && <Table heading={heading} body={data.data} />
                    }
                </div>
                <HorizontalLine lineno={3} />

            </section>
        </>
    )
}

export default SeniorityList
