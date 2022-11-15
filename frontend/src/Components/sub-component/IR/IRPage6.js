import React from 'react'
import TextField from '@mui/material/TextField';
const IRPage6 = () => {
  return (
    <div style={{width:'70%'}}>
    <table className='table'>
            <tr>
                <td>Signal Strength</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>Solar Panel Available</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>Solar Panel Installation Report</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>Solar Panel And UPS Working</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>Article in deposit</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>Article Beyond prescribed period</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>Missent Article</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>VP Article since DLI if any</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>Number of Letterboxes</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            
            
        </table>
        <table className='table'>
        <tr>
                <td>Articles in bag on Inspection day</td>
                <td><TextField id="standard-basic" label='SP' variant="standard" /></td>
                <td><TextField id="standard-basic" label='RL' variant="standard" /></td>
                <td><TextField id="standard-basic" label='PARCEL' variant="standard" /></td>
                <td><TextField id="standard-basic" label='EMO' variant="standard" /></td>
                <td><TextField id="standard-basic" label='ORD'  variant="standard" /></td>
                <td><TextField id="standard-basic" label='VP/COD'  variant="standard" /></td>
            </tr>
        </table>
        </div>
  )
}

export default IRPage6