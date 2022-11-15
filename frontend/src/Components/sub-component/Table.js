import React from 'react';
import Tablebody from './Tablebody';

const Table = (props) => {
    return <>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    {props.heading.map((val) => {
                        return <th scope="col">{val}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {props.body.map((val,index)=>{
                   return <Tablebody body={val} key={index}/>
                })
                }
            </tbody>
        </table>
    </>;
};

export default Table;
