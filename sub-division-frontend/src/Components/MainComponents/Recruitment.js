import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CandidateCopy from '../sub-component/Recruitment/CandidateCopy'
const Recruitment = () => {
    const [data,setData]=useState({
        post:'',
        name:'',
        dob:'',
        address:'',
        district:'',
        sscAdd:'',
        sscCertNo:'',
        sscDivision:'',
        sscRoll:'',
        sscMarks:'',
        sscSchool:'',
        casteCertNo:'',
        casteCertAdd:'',
        casteSubDivision:'',
        compCertNo:'',
        compCertAdd:'',
        compCertSubAdd:'',
        phoneNo:'',
        aadhar:'',
    });
    const [showData,setShowData]=useState(false);

    const change=(e)=>{
        const name=e.target.name;
        const val=e.target.value
            setData((prev)=>{
                return {...prev,[name]:val}
            })
        }
    
    
    return (
        <>
        <div className='container'>
            {!showData?<div className='container'>
                <table className='table1'>
                    <tr>
                        <td>
                            <tr>
                            <TextField id="standard-basic" label='Name of Candidate' variant="standard" name='name'
                            onChange={(e)=>{change(e)}}
                            value={data.name}
                            />
                            </tr>
                            <tr>
                            <TextField id="standard-basic" label='Address of Candidate' variant="standard" name='address'
                            onChange={(e)=>{change(e)}}
                            value={data.address}
                            />
                            </tr>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <tr>
                            <TextField id="standard-basic" label='SSC Board Address' variant="standard" name='sscAdd'
                            onChange={(e)=>{change(e)}}
                            value={data.sscAdd}
                            />
                            </tr>
                            <tr>
                            <TextField id="standard-basic" label='SSC Certificate Number' variant="standard" name='sscCertNo'
                            onChange={(e)=>{change(e)}}
                            value={data.sscCertNo}
                            />
                            <TextField id="standard-basic" label='SSC Roll Number' variant="standard" name='sscRoll'
                            onChange={(e)=>{change(e)}}
                            value={data.sscRoll}
                            />
                            <TextField id="standard-basic" label='Marks Obtained/Total Marks' variant="standard" name='sscMarks'
                            onChange={(e)=>{change(e)}}
                            value={data.sscMarks}
                            />
                            </tr>
                            <tr>
                            <TextField id="standard-basic" label='SSC School Name' variant="standard" name='sscSchool'
                            onChange={(e)=>{change(e)}}
                            value={data.sscSchool}
                            />

                            </tr>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <tr>
                            <TextField id="standard-basic" label='Caste Certificate Number' variant="standard" name='casteCertNo'
                            onChange={(e)=>{change(e)}}
                            value={data.casteCertNo}
                            />
                            </tr>
                            <tr>
                            <TextField id="standard-basic" label='Caste Certificate Verification Office' variant="standard" name='casteCertAdd'
                            onChange={(e)=>{change(e)}}
                            value={data.casteCertAdd}
                            />
                            </tr>
                            <tr>
                            <TextField id="standard-basic" label='Copy to Sub Division' variant="standard" name='casteSubDivision'
                            onChange={(e)=>{change(e)}}
                            value={data.casteSubDivision}
                            />
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <tr>
                            <TextField id="standard-basic" label='Computer Certificate Number' variant="standard" name='compCertNo'
                            onChange={(e)=>{change(e)}}
                            value={data.compCertNo}
                            />
                            </tr>
                            <tr>
                            
                            <TextField id="standard-basic" label='Computer Certificate Verification address' variant="standard" name='compCertAdd'
                            onChange={(e)=>{change(e)}}
                            value={data.compCertAdd}
                            />
                            </tr><tr>
                            <TextField id="standard-basic" label='Copy to Sub Division' variant="standard" name='compCertSubAdd'
                            onChange={(e)=>{change(e)}}
                            value={data.compCertSubAdd}
                            />
                            </tr>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <TextField id="standard-basic" label='Phone Number' variant="standard" name='phoneNo'
                            onChange={(e)=>{change(e)}}
                            value={data.phoneNo}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TextField id="standard-basic" label='Aadhar Card Number' variant="standard" name='aadhar'
                            onChange={(e)=>{change(e)}}
                            value={data.aadhar}
                            />
                        </td>
                    </tr>
                    
                    
                </table>
            </div>:<CandidateCopy data={data} setShowData={setShowData}/>}
            {!showData?
            
            <Button variant="contained" 
                style={{margin:'10px'}}
                onClick={()=>{
                    setShowData(true)
                }}
                >Generate Report</Button>:
                
                <Button variant="contained" 
                style={{margin:'10px', position:'sticky', left:'0', bottom:'10px'}}
                onClick={()=>{
                    window.print()
                }}
                >P</Button>}
                </div>

        </>
    )
}

export default Recruitment