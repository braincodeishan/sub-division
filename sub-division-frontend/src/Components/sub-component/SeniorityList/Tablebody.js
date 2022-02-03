import React from 'react';

const Tablebody = (props) => {
    return <>
        <tr>
            {props.body.map((val, index) => {
                return <td key={index.toString()}>{val}</td>
            })}
            <td ><i class='bx bxs-edit-alt text-success cursor-pointer font-30px' onClick={()=>{props.employeeEdit(props.body)}}></i></td>
            <td ><i class='bx bx-x text-danger cursor-pointer font-30px' onClick={()=>{props.employeeDel(props.body)}}></i></td>
        </tr>

    </>;
};

export default Tablebody;
