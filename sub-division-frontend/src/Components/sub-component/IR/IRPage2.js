import React from 'react'
import TextField from '@mui/material/TextField';
const IRPage2 = () => {
  return (
    <div style={{width:'70%'}}>
    <table className='table'>
                        <tr>
                            <th>Information</th>
                            <th colspan="2">Details</th>
                        </tr>
                        <tr>
                            <td><p className='Details'>Receipt of Mail</p></td>
                            <td colspan="2"><TextField id="standard-basic" label="ROM" variant="standard" /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Delivery of Mail</p></td>
                            <td colspan="2"><TextField id="standard-basic" label="DOM" variant="standard" /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>LB Clearance</p></td>
                            <td colspan="2"><TextField id="standard-basic" label="LB Clearance" variant="standard" /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Despatch of Mails</p></td>
                            <td colspan="2"><TextField id="standard-basic" label="Dispatch" variant="standard" /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Authorised Balance</p></td>
                            <td><TextField id="standard-basic" label="Minimum" variant="standard" /></td>
                            <td><TextField id="standard-basic" label="Maximum" variant="standard" /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Location Of BO</p></td>
                            <td colspan="2"><TextField id="standard-basic" label="BO Location" variant="standard" /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Villages Served</p></td>
                            <td colspan="2"><TextField id="standard-basic" label="Villages Details" variant="standard" /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Panchayat Headquarters</p></td>
                            <td colspan="2"><TextField id="standard-basic" label="Panchayat HQ" variant="standard" /></td>
                        </tr>
                        <tr>
                            <td><p className='Details'>Mail Arrangement</p></td>
                            <td colspan="2"><TextField id="standard-basic" label="Mail Arrangement" variant="standard" /></td>
                        </tr>
                    </table>
                    </div>
  )
}

export default IRPage2