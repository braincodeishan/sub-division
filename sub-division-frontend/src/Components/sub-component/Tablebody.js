import React from 'react';

const Tablebody = (props) => {
    return <>
        <tr>
            {props.body.map((val) => {
                return <td>{val}</td>
            })}

        </tr>

    </>;
};

export default Tablebody;
