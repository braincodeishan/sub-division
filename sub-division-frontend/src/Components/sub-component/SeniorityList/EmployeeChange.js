import React, { useState } from 'react';
import Alert from "../Alert"

const EmployeeChange = (props) => {
    const heading = ["Employee ID", "Name of the Employee", "Cadre", "Office Name", "Category", "Date Of Birth", "Date of Joining", "Date of Retirement"]
    const [doB, setdoB] = useState(props.data[6])
    const [doJ, setdoJ] = useState(props.data[7])
    const [doR, setdoR] = useState(props.data[8])
    const [alert, setalert] = useState({ status: 400, message: "" })

    const EmployeeEditbtn = async () => {
        const res = await fetch("http://localhost:3001/senioritylist/edit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                employeeID: props.data[0],
                dateOfBirth: doB,
                dateOfJoining: doJ,
                dateOfRetirement: doR
            })
        })
        // const result = await res.json();
        if (res.status === 200) {
            setalert({ status: 200, message: "Your entry has been changed" })
        } else {
            setalert({ status: 400, message: "Something Went wrong" })
        }
        setTimeout(() => {
            setalert({ status: 400, message: "" })
            props.close(false);
        }, 2000);
    }


    const closeBtn=()=>{
        props.close(false);
    }
    return <>
        {
            alert.message !== "" && <Alert alert={alert} />
        }
        <div className='container-fluid position-fixed d-flex justify-content-center align-items-center EmployeeChange'>
            <i class='bx bx-x position-absolute EmployeeChangeClose' onClick={closeBtn}></i>
            <div className='container bg-light rounded'>
                <table className="table text-center">
                    <thead className="thead-dark">
                        <tr>
                            {heading.map((val) => {
                                return <th scope="col">{val}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {props.data.map((val, index) => {
                                return index === 0 ? <></> : index < 6 && <td>{val}</td>
                            })}
                            <td><input type="text" className="form-control" value={doB} onChange={(e) => { setdoB(e.target.value) }} /></td>
                            <td><input type="text" className="form-control" value={doJ} onChange={(e) => { setdoJ(e.target.value) }} /></td>
                            <td><input type="text" className="form-control" value={doR} onChange={(e) => { setdoR(e.target.value) }} /></td>
                        </tr>
                    </tbody>

                </table>
                <button type="button" className="btn btn-success m-3 float-end" onClick={EmployeeEditbtn}>Submit</button>
            </div>

        </div>
    </>
};

export default EmployeeChange;
