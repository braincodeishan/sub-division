import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TextField from '@mui/material/TextField';
const IRPage7 = () => {
    const [itr, setItr] = useState([])
    const SB26addtional = () => {
        
            
        
    }
    return (
        <div style={{ width: '100%' }}>
            <div className='pageCenter'>
            <RemoveCircleIcon 
                    onClick={()=>{setItr((prev)=>{
                        return prev.filter((data,index)=>{
                            if(index!=prev.length){
                                return data;
                            }
                        })
                    })}}
                    className='cursorPointer'
                        />
                        </div>
            <table className='table'>
                <tr>
                    <td>SB26</td>
                    <td><TextField id="standard-basic" label='BOOK NUMBER' variant="standard" /></td>
                    <td><TextField id="standard-basic" label='from RECEIPT NO' variant="standard" /></td>
                    <td><TextField id="standard-basic" label='DATE' variant="standard" /></td>
                    <td><TextField id="standard-basic" label='AMOUNT' variant="standard" /></td>
                    <td><TextField id="standard-basic" label='to RECEIPT NO' variant="standard" /></td>
                    <td><TextField id="standard-basic" label='DATE' variant="standard" /></td>
                    <td><TextField id="standard-basic" label='AMOUNT' variant="standard" /></td>

                </tr>
                {
                    itr.map((data,index)=>{
                        return (<tr key={index}>

                            <td>SB26</td>
                            <td><TextField id="standard-basic" label='BOOK NUMBER' variant="standard" /></td>
                            <td><TextField id="standard-basic" label='from RECEIPT NO' variant="standard" /></td>
                            <td><TextField id="standard-basic" label='DATE' variant="standard" /></td>
                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" /></td>
                            <td><TextField id="standard-basic" label='to RECEIPT NO' variant="standard" /></td>
                            <td><TextField id="standard-basic" label='DATE' variant="standard" /></td>
                            <td><TextField id="standard-basic" label='AMOUNT' variant="standard" /></td>
                        </tr>)

                    })
                }
                
            </table>
            <div className='pageCenter'>
            <AddCircleIcon 
                    onClick={()=>{setItr([...itr,0])}}
                    className='cursorPointer'
                        />
                        </div>
        </div>
    )
}

export default IRPage7