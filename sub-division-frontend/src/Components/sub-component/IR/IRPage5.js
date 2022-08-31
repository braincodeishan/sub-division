import React from 'react'
import TextField from '@mui/material/TextField';
const IRPage5 = () => {
  return (
    <table className='table'>
            <tr>
                <th>Name of the Record</th>
                <th>Remarks</th>
            </tr>
            <tr>
                <td>Main Computing Device (MCD)</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>IMEI Number of MCD</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>Kaifya/Sunyard Pin Pad (P-90)</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>Barcode Scanner</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>IPPB Smart phone supplied to the BPM / ABPM</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>Solar UPS</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            <tr>
                <td>Type of the NSP SIM supplied and activated in the Device</td>
                <td><TextField id="standard-basic" variant="standard" /></td>
            </tr>
            
        </table>
    












  )
}

export default IRPage5