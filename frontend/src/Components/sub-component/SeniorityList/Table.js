import React from 'react';
import Tablebody from './Tablebody';

const Table = (props) => {
    // console.log("entered table")
    return <>
        <table className="table text-center">
            <thead className="thead-dark">
                <tr>
                    {props.heading.map((val) => {
                        return <th scope="col">{val}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {props.body.map((val,index)=>{
                   return <Tablebody body={val} key={index} employeeEdit={props.employeeEdit} employeeDel={props.employeeDel}/>
                })
                }
            </tbody>
        </table>
    </>;
};

export default Table;
