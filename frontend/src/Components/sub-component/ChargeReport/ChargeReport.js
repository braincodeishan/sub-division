import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ShowChargeReport from './ShowChargeReport';


const ChargeReport = () => {
    
    const [showData, setShowData] = useState(true);
    const [data, setData]=useState({
        officeName:'',
        relieved:'',
        reliever:'',
        office:'',
        date:'',
        FnAn:'',
        memo:'',
        memoDate:'',
        cash:'',
        stamp:'',
    });
    
    const change = (e) => {
        const name = e.target.name;
        const val = e.target.value.toUpperCase();
        setData((prev) => {
            return { ...prev, [name]: val }
        })
    }
    
    return (
        <>
            <div className='container'>
               {showData ?  <div className='row'>
                    <h3 className='d-flex-column-center'>Generate Charge Report to Print</h3>
                    <Box
                        sx={{
                            border: '1px solid rgba(0,0,0,0.5)',
                            padding: '5px',
                            margin: '5px'
                        }}
                    >

                        <div className="col">
                            <p style={{color:'red'}}>Enter the name of the Employee if he is Discharged from service and vacancy is created for the post.</p>

                        </div>
                        <div className="row">
                        <div className="col-3">
                                <TextField 
                                id="standard-basic" 
                                name='officeName'
                                label="Post Name" 
                                variant="standard" 
                                sx={{width:'100%'}}
                                onChange={(e) => { change(e) }}
                                value={data.officeName}
                                />
                                
                            </div>
                            <div className="col-3">
                                <TextField 
                                id="standard-basic" 
                                label="Relieved Officer Name" 
                                variant="standard" 
                                sx={{width:'100%'}}
                                name='relieved'
                                onChange={(e) => { change(e) }}
                                value={data.relieved}
                                />
                            </div>
                            <div className="col-3">
                                <TextField 
                                id="standard-basic" 
                                label="Relieving Officer Name" 
                                variant="standard" 
                                sx={{width:'100%'}}
                                name='reliever'
                                onChange={(e) => { change(e) }}
                                value={data.reliever}
                                />
                            </div>
                            <div className="col-3">
                                <TextField 
                                id="standard-basic" 
                                label="Office Name where charge was transferred" 
                                variant="standard" 
                                sx={{width:'100%'}}
                                name='office'
                                onChange={(e) => { change(e) }}
                                value={data.office}
                                />
                            </div>
                            <div className="col-3">
                                <TextField 
                                id="standard-basic" 
                                label="Date" 
                                variant="standard" 
                                sx={{width:'100%'}}
                                name='date'
                                onChange={(e) => { change(e) }}
                                value={data.date}
                                />
                            </div>
                            
                        </div>
                    </Box>
                    <Box
                        sx={{
                            border: '1px solid rgba(0,0,0,0.5)',
                            padding: '5px',
                            margin: '5px'
                        }}
                    >

                        <div className="col">
                            <p style={{color:'red'}}>Enter the memo number by which the employee was relinquished or assumed</p>

                        </div>
                        <div className="row">
                        <div className="col-6">
                                <TextField 
                                id="standard-basic" 
                                label="Memo Number" 
                                variant="standard" 
                                sx={{width:'100%'}}
                                name='memo'
                                onChange={(e) => { change(e) }}
                                value={data.memo}
                                />
                            </div>
                            <div className="col-6">
                                <TextField 
                                id="standard-basic" 
                                label="Date of Memo" 
                                variant="standard" 
                                sx={{width:'100%'}}
                                name='memoDate'
                                onChange={(e) => { change(e) }}
                                value={data.memoDate}
                                />
                            </div>
                            
                            
                        </div>
                    </Box>
                    <Box
                        sx={{
                            border: '1px solid rgba(0,0,0,0.5)',
                            padding: '5px',
                            margin: '5px'
                        }}
                    >

                        <div className="col">
                            <p style={{color:'red'}}>Enter the Cash and Stamp balances if any</p>

                        </div>
                        <div className="row">
                        <div className="col-4">
                                <TextField 
                                id="standard-basic" 
                                label="Cash" 
                                variant="standard" 
                                sx={{width:'100%'}}
                                name='cash'
                                onChange={(e) => { change(e) }}
                                value={data.cash}
                                />
                            </div>
                            <div className="col-4">
                                <TextField 
                                id="standard-basic" 
                                label="Stamp" 
                                variant="standard" 
                                sx={{width:'100%'}}
                                name='stamp'
                                onChange={(e) => { change(e) }}
                                value={data.stamp}
                                />
                            </div>
                            
                            
                        </div>
                    </Box>
                    <div className="d-flex-column-center">
                    <Button variant="contained"
                        style={{ margin: '10px' }}
                        onClick={() => {
                            setShowData(false)
                        }}
                    >Generate Charge Report</Button>

                    </div>
                    

                </div> :<ShowChargeReport data={data}/> }

            </div>
        </>
    )
}

export default ChargeReport