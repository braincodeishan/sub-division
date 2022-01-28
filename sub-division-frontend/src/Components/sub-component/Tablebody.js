import React from 'react';

const Tablebody = (props) => {
    return <>
        <tr>
            {props.body.map((val,index) => {
                return <td key={index.toString()}>{val}</td>
            })}

        </tr>

    </>;
};

export default Tablebody;
