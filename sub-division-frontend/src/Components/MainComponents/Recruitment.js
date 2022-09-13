import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CandidateCopy from '../sub-component/Recruitment/CandidateCopy'
const Recruitment = () => {
    const [data, setData] = useState({
        post: '',
        name: '',
        dob: '',
        address: '',
        district: '',
        sscAdd: '',
        sscCertNo: '',
        sscDivision: '',
        sscRoll: '',
        sscMarks: '',
        sscSchool: '',
        casteCertNo: '',
        casteCertAdd: '',
        casteSubDivision: '',
        compCertNo: '',
        compCertAdd: '',
        compCertSubAdd: '',
        phoneNo: '',
        aadhar: '',
    });
    const [showData, setShowData] = useState(false);

    const change = (e) => {
        const name = e.target.name;
        const val = e.target.value.toUpperCase();
        setData((prev) => {
            return { ...prev, [name]: val }
        })
    }


    return (
        <>
            <div className='container pageCenter'>
                {!showData ? <div>
                    <table className='table1'>
                        <tr>
                            <td>
                            <tr>
                                    <TextField id="standard-basic" label='Post' variant="standard" name='post'
                                        onChange={(e) => { change(e) }}
                                        value={data.post}
                                    />
                                </tr>
                                <tr>
                                    <TextField id="standard-basic" label='Name of Candidate' variant="standard" name='name'
                                        onChange={(e) => { change(e) }}
                                        value={data.name}
                                    />
                                    <TextField id="standard-basic" label='DOB' variant="standard" name='dob'
                                        onChange={(e) => { change(e) }}
                                        value={data.dob}
                                    />
                                </tr>
                                <tr>
                                    <TextField
                                        id="standard-multiline-static"
                                        label="Address of Candidate"
                                        multiline
                                        name='address'
                                        rows={4}
                                        variant="standard"
                                        onChange={(e) => { change(e) }}
                                        value={data.address}
                                    />
                                    <TextField id="standard-basic" label='District' variant="standard" name='district'
                                        onChange={(e) => { change(e) }}
                                        value={data.district}
                                    />
                                </tr>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <tr>
                                <TextField
                                        id="standard-multiline-static"
                                        label="SSC Board Address"
                                        multiline
                                        name='sscAdd'
                                        rows={4}
                                        variant="standard"
                                        onChange={(e) => { change(e) }}
                                        value={data.sscAdd}
                                    />
                                    
                                </tr>
                                <tr>
                                <TextField
                                        id="standard-multiline-static"
                                        label="Copy to Division"
                                        multiline
                                        name='sscDivision'
                                        rows={4}
                                        variant="standard"
                                        onChange={(e) => { change(e) }}
                                        value={data.sscDivision}
                                    />
                                    
                                </tr>
                                <tr>
                                    <TextField id="standard-basic" label='SSC Certificate Number' variant="standard" name='sscCertNo'
                                        onChange={(e) => { change(e) }}
                                        value={data.sscCertNo}
                                    />
                                    <TextField id="standard-basic" label='SSC Roll Number' variant="standard" name='sscRoll'
                                        onChange={(e) => { change(e) }}
                                        value={data.sscRoll}
                                    />
                                    <TextField id="standard-basic" label='Marks Obtained/Total Marks' variant="standard" name='sscMarks'
                                        onChange={(e) => { change(e) }}
                                        value={data.sscMarks}
                                    />
                                </tr>
                                <tr>
                                    <TextField id="standard-basic" label='SSC School Name' variant="standard" name='sscSchool'
                                        onChange={(e) => { change(e) }}
                                        value={data.sscSchool}
                                    />

                                </tr>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <tr>
                                    <TextField id="standard-basic" label='Caste Certificate Number' variant="standard" name='casteCertNo'
                                        onChange={(e) => { change(e) }}
                                        value={data.casteCertNo}
                                    />
                                </tr>
                                <tr>
                                <TextField
                                        id="standard-multiline-static"
                                        label="Caste Certificate Verification Office"
                                        multiline
                                        name='casteCertAdd'
                                        rows={4}
                                        variant="standard"
                                        onChange={(e) => { change(e) }}
                                        value={data.casteCertAdd}
                                    />
                                    
                                </tr>
                                <tr>
                                <TextField
                                        id="standard-multiline-static"
                                        label="Copy to Division/ Sub Division"
                                        multiline
                                        name='casteSubDivision'
                                        rows={4}
                                        variant="standard"
                                        onChange={(e) => { change(e) }}
                                        value={data.casteSubDivision}
                                    />
                                    
                                </tr>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <tr>
                                    <TextField id="standard-basic" label='Computer Certificate Number' variant="standard" name='compCertNo'
                                        onChange={(e) => { change(e) }}
                                        value={data.compCertNo}
                                    />
                                </tr>
                                <tr>
                                <TextField
                                        id="standard-multiline-static"
                                        label="Computer Cert Vfn address"
                                        multiline
                                        name='compCertAdd'
                                        rows={4}
                                        variant="standard"
                                        onChange={(e) => { change(e) }}
                                        value={data.compCertAdd}
                                    />
                                    
                                </tr><tr>
                                <TextField
                                        id="standard-multiline-static"
                                        label="Copy to Division/ Sub Division"
                                        multiline
                                        name='compCertSubAdd'
                                        rows={4}
                                        variant="standard"
                                        onChange={(e) => { change(e) }}
                                        value={data.compCertSubAdd}
                                    />
                                    
                                </tr>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <TextField id="standard-basic" label='Phone Number' variant="standard" name='phoneNo'
                                    onChange={(e) => { change(e) }}
                                    value={data.phoneNo}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <TextField id="standard-basic" label='Aadhar Card Number' variant="standard" name='aadhar'
                                    onChange={(e) => { change(e) }}
                                    value={data.aadhar}
                                />
                            </td>
                        </tr>


                    </table>
                </div> : <CandidateCopy data={data} setShowData={setShowData} />}
                {!showData ?

                    <Button variant="contained"
                        style={{ margin: '10px' }}
                        onClick={() => {
                            setShowData(true)
                        }}
                    >Generate Report</Button> :

                    <Button variant="contained"
                        style={{ margin: '10px', position: 'sticky', left: '0', bottom: '10px' }}
                        onClick={() => {
                            window.print()
                        }}
                    >Print</Button>}
            </div>

        </>
    )
}

export default Recruitment