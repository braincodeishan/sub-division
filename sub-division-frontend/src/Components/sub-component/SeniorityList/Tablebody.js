import React from 'react';

const Tablebody = (props) => {
    return <>
        <tr>
            {props.body.map((val, index) => {
                return <td key={index.toString()}>{val}</td>
            })}
            <td ><i class='bx bxs-edit-alt text-success'></i></td>
            <td ><i class='bx bx-x text-danger' ></i></td>
        </tr>

    </>;
};

export default Tablebody;
