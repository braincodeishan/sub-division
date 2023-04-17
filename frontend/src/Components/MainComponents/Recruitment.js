import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CandidateCopy from '../sub-component/Recruitment/CandidateCopy'
import { BoardData } from '../../Assets/Data/BoardData';
const Recruitment = () => {
    // const [sscSelect, setSSCSelect]=useState({});
    const [data, setData] = useState({
        post: '',
        name: '',
        fathersName: '',
        dob: '',
        address: '',
        district: '',
        po: '',
        ps: '',
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
 
    const changeSSC= (val)=>{
        const abc={
            target:{
                name:"sscAdd",
                value:BoardData[val].Name+"\n"+BoardData[val].Address1+"\n"+BoardData[val].Address2+"\n"+BoardData[val].Address3,
            }
        }
        change(abc);
        const abc1={
            target:{
                name:"sscDivision",
                value:BoardData[val].copyOffice1+"\n"+BoardData[val].copyOffice2+"\n"+BoardData[val].copyOffice3,
            }
        }
        change(abc1);
    }

    return (
        <>
            <div className='container pageCenter'>
                {!showData ? <div>
                    <div style={{ border: '1px solid #000', padding: '20px', margin: '5px' }}>
                        <h3 style={{ textAlign: 'center' }}>GENERATION OF VERIFICATION LETTER</h3>
                        <p style={{ color: 'red', fontSize: '10px' }}>Fill up the form and click on Generate report to get the printout.</p>
                        <div className="flex">
                            <TextField id="standard-basic" label='Post' variant="standard" name='post'
                                onChange={(e) => { change(e) }}
                                value={data.post}
                                style={{ margin: '5px', width: '300px' }}
                            />
                        </div>
                        <div className="flex">
                            <TextField id="standard-basic" label='Name of Candidate' variant="standard" name='name'
                                onChange={(e) => { change(e) }}
                                value={data.name}
                                style={{ margin: '5px', width: '300px' }}
                            />
                            <TextField id="standard-basic" label='Fathers Name' variant="standard" name='fathersName'
                                onChange={(e) => { change(e) }}
                                value={data.fathersName}
                                style={{ margin: '5px', width: '300px' }}
                            />
                            <TextField id="standard-basic" label='DOB' variant="standard" name='dob'
                                onChange={(e) => { change(e) }}
                                value={data.dob}
                                style={{ margin: '5px', width: '300px' }}
                            />
                        </div>

                        <div className="flex">

                            <TextField
                                id="standard-multiline-static"
                                label="Address of Candidate"
                                multiline
                                name='address'
                                rows={4}
                                variant="standard"
                                onChange={(e) => { change(e) }}
                                value={data.address}
                                style={{ margin: '5px', width: '300px' }}
                            />
                            <TextField id="standard-basic" label='District' variant="standard" name='district'
                                onChange={(e) => { change(e) }}
                                value={data.district}
                                style={{ margin: '5px', width: '200px' }}
                            />
                            <TextField id="standard-basic" label='Post Office' variant="standard" name='po'
                                onChange={(e) => { change(e) }}
                                value={data.po}
                                style={{ margin: '5px', width: '200px' }}
                            />
                            <TextField id="standard-basic" label='Police Station' variant="standard" name='ps'
                                onChange={(e) => { change(e) }}
                                value={data.ps}
                                style={{ margin: '5px', width: '200px' }}
                            />

                        </div>
                        <div className="flex">
                            <TextField id="standard-basic" label='Phone Number' variant="standard" name='phoneNo'
                                onChange={(e) => { change(e) }}
                                value={data.phoneNo}
                                style={{ margin: '5px', width: '300px' }}
                            />

                            <TextField id="standard-basic" label='Aadhar Card Number' variant="standard" name='aadhar'
                                onChange={(e) => { change(e) }}
                                value={data.aadhar}
                                style={{ margin: '5px', width: '300px' }}
                            />
                        </div>
                    </div>




                    <div style={{ border: '1px solid #000', padding: '20px', margin: '5px' }}>

                        <div className="flex">
                            <select class="form-control form-control-lg" onChange={(e) => { changeSSC(e.target.value-1) }} >
                                <option>Select...</option>
                                {
                                    BoardData.map((val) => {
                                        return <option key={val.id} value={val.id}>{val.Name}</option>
                                    })
                                }


                            </select>
                        </div>
                        <div className="flex">

                            <TextField
                                id="standard-multiline-static"
                                label="SSC Board Address"
                                multiline
                                name='sscAdd'
                                rows={6}
                                variant="standard"
                                onChange={(e) => { change(e) }}
                                value={data.sscAdd}
                                style={{ margin: '5px', width: '500px' }}
                            />


                            <TextField
                                id="standard-multiline-static"
                                label="Copy to Division"
                                multiline
                                name='sscDivision'
                                rows={6}
                                variant="standard"
                                onChange={(e) => { change(e) }}
                                value={data.sscDivision}
                                style={{ margin: '5px', width: '500px' }}
                            />
                        </div>

                        <TextField id="standard-basic" label='SSC Certificate Number' variant="standard" name='sscCertNo'
                            onChange={(e) => { change(e) }}
                            value={data.sscCertNo}
                            style={{ margin: '5px', width: '200px' }}
                        />
                        <TextField id="standard-basic" label='SSC Roll Number' variant="standard" name='sscRoll'
                            onChange={(e) => { change(e) }}
                            value={data.sscRoll}
                            style={{ margin: '5px', width: '200px' }}
                        />
                        <TextField id="standard-basic" label='Marks Obtained/Total Marks' variant="standard" name='sscMarks'
                            onChange={(e) => { change(e) }}
                            value={data.sscMarks}
                            style={{ margin: '5px', width: '200px' }}
                        />

                        <TextField id="standard-basic" label='SSC School Name' variant="standard" name='sscSchool'
                            onChange={(e) => { change(e) }}
                            value={data.sscSchool}
                            style={{ margin: '5px', width: '200px' }}
                        />

                    </div>
                    <div style={{ border: '1px solid #000', padding: '20px', margin: '5px' }}>
                        <p style={{ color: 'red', fontSize: '10px' }}>If the candidate hasnt submitted the Caste Certificate, it may be left blank</p>
                        <TextField id="standard-basic" label='Caste Certificate Number' variant="standard" name='casteCertNo'
                            onChange={(e) => { change(e) }}
                            value={data.casteCertNo}
                            style={{ margin: '5px', width: '300px' }}
                        />
                        <div className="flex">
                            <TextField
                                id="standard-multiline-static"
                                label="Caste Certificate Verification Office"
                                multiline
                                name='casteCertAdd'
                                rows={4}
                                variant="standard"
                                onChange={(e) => { change(e) }}
                                value={data.casteCertAdd}
                                style={{ margin: '5px', width: '300px' }}
                            />


                            <TextField
                                id="standard-multiline-static"
                                label="Copy to Division/ Sub Division"
                                multiline
                                name='casteSubDivision'
                                rows={4}
                                variant="standard"
                                onChange={(e) => { change(e) }}
                                value={data.casteSubDivision}
                                style={{ margin: '5px', width: '300px' }}
                            />

                        </div>
                    </div>
                    <div style={{ border: '1px solid #000', padding: '20px', margin: '5px' }}>

                        <TextField id="standard-basic" label='Computer Certificate Number' variant="standard" name='compCertNo'
                            onChange={(e) => { change(e) }}
                            value={data.compCertNo}
                            style={{ margin: '5px', width: '300px' }}
                        />
                        <div className="flex">
                            <TextField
                                id="standard-multiline-static"
                                label="Computer Cert Vfn address"
                                multiline
                                name='compCertAdd'
                                rows={4}
                                variant="standard"
                                onChange={(e) => { change(e) }}
                                value={data.compCertAdd}
                                style={{ margin: '5px', width: '300px' }}
                            />


                            <TextField
                                id="standard-multiline-static"
                                label="Copy to Division/ Sub Division"
                                multiline
                                name='compCertSubAdd'
                                rows={4}
                                variant="standard"
                                onChange={(e) => { change(e) }}
                                value={data.compCertSubAdd}
                                style={{ margin: '5px', width: '300px' }}
                            />

                        </div>
                    </div>




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