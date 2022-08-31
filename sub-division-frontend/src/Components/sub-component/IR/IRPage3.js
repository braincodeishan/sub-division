import React from 'react'
import TextField from '@mui/material/TextField';
const IRPage3 = () => {
    return (
        <table className='table'>
            <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Community</th>
                <th>Employee Id</th>
                <th>TRCA</th>
                <th>Date of Birth</th>
                <th>Date of Joining</th>

            </tr>
            <tr>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" placeholder='GDSBPM' variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" placeholder='GDSMD' variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" placeholder='GDSMC' variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
        </table>
    )
}

export default IRPage3