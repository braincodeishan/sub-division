import React from 'react'
import TextField from '@mui/material/TextField';
const IRPage1 = () => {
  return (
    <table className='table'>
                        <tr>
                            <th>Information</th>
                            <th>Details</th>
                        </tr>
                        <tr>
                            <td><p className='Details'>Name of The BO</p></td>
                            <td><TextField id="standard-basic" label="BO Name" variant="standard" /></td>
                        </tr><tr>
                            <td><p className='Details'>Name of The AO</p></td>
                            <td><TextField id="standard-basic" label="AO Name" variant="standard" /></td>
                        </tr><tr>
                            <td><p className='Details'>Name of The HO</p></td>
                            <td><TextField id="standard-basic" label="HO Name" variant="standard" /></td>
                        </tr><tr>
                            <td><p className='Details'>Facility ID</p></td>
                            <td><TextField id="standard-basic" label="Facility ID" variant="standard" /></td>
                        </tr><tr>
                            <td><p className='Details'>Profit/Cost Center</p></td>
                            <td><TextField id="standard-basic" label="Profit Center" variant="standard" /></td>
                        </tr><tr>
                            <td><p className='Details'>Date of Opening of BO</p></td>
                            <td><TextField id="standard-basic" label="BO Opening Date" variant="standard" /></td>
                        </tr><tr>
                            <td><p className='Details'>Date of Last inspection by SSPOs/SPOs</p></td>
                            <td><TextField id="standard-basic" label="DLI of SSPOs" variant="standard" /></td>
                        </tr><tr>
                            <td><p className='Details'>Date of Last Inspection</p></td>
                            <td><TextField id="standard-basic" label="DLI" variant="standard" /></td>
                        </tr><tr>
                        </tr><tr>
                            <td><p className='Details'>Last Inspected By</p></td>
                            <td><TextField id="standard-basic" label="Inspected By" variant="standard" /></td>
                        </tr><tr>
                        </tr><tr>
                            <td><p className='Details'>Date of Subsequential Visits</p></td>
                            <td><TextField id="standard-basic" label="Subsequential Visit" variant="standard" /></td>
                        </tr><tr>
                        </tr><tr>
                            <td><p className='Details'>Date of Visits by Mail Overseer</p></td>
                            <td><TextField id="standard-basic" label="Mail Overseer Visit" variant="standard" /></td>
                        </tr>
                    </table>
  )
}

export default IRPage1