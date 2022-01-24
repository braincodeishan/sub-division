import React from 'react';
import Tablebody from './Tablebody';

const Table = (props) => {
    return <>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    {props.heading.map((val) => {
                        return <th scope="col">{val}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {props.body.map((val)=>{
                   return <Tablebody body={val}/>
                })
                }
            </tbody>
        </table>
    </>;
};

export default Table;
