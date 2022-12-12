import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IconButton } from '@mui/material';
const AdditionalCharge = () => {
    const [attach, setAttach] = useState(['0', '99', '99'])
    const [discharge, setDischarge] = React.useState('');
    const [post, setPost] = React.useState('');
    const handleChange = (e) => {
        setDischarge(e.target.value);
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <Box
                        sx={{
                            border: '1px solid rgba(0,0,0,0.5)',
                            padding: '5px'
                        }}
                    >
                        <div className="row">

                            <div className="col-3">
                                <p>Enter the name of the Employee if he is Discharged from service and vacancy is created for the post.</p>

                            </div>
                            <div className="col-3">
                                <TextField id="standard-basic" label="Post Vacant" variant="standard" />
                            </div>
                            <div className="col-3">
                                <TextField id="standard-basic" label="Name of the Employee" variant="standard" />
                            </div>
                            <div className="col-3">
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Reason for Vacancy</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={discharge}
                                        label="Reason for Vacancy"
                                        onChange={handleChange}
                                        sx={{ minWidth: 120 }}
                                    >
                                        <MenuItem value={1}>Superannuation</MenuItem>
                                        <MenuItem value={2}>Disciplinary Discharge</MenuItem>
                                        <MenuItem value={3}>Transfer</MenuItem>
                                        <MenuItem value={4}>Promotion</MenuItem>

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </Box>
                    <Box className='mt-5'
                        sx={{
                            border: '1px solid rgba(0,0,0,0.5)',
                            padding: '5px'
                        }}
                    >
                        <div className="row">
                            <div>
                                <p>Kindly assign the details as asked below to assign the combined duty or attach to another post </p>
                            </div>
                            <div className="col d-flex-column-center">
                                <IconButton onClick={()=>{
                                    setAttach((prev)=>{
                                        return [...prev, 0]
                                    })
                                }}>
                                    <RemoveCircleIcon />
                                </IconButton>
                                {attach.map((val, index) => {
                                    return (
                                        <div className="row justify-content-center">
                                            <div className='col justify-content-center align-items-center'>
                                                <TextField id="standard-basic" label="Name of the Employee" variant="standard" />
                                            </div>
                                            <div className='col justify-content-center'>
                                                <TextField id="standard-basic" label="Post attached" variant="standard" />
                                            </div>
                                            <div className='col justify-content-center'>
                                                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                                    <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-standard-label"
                                                        id="demo-simple-select-standard"
                                                        value={post}
                                                        label="Reason for Vacancy"
                                                        onChange={handleChange}
                                                        sx={{ minWidth: 120 }}
                                                    >
                                                        <MenuItem value={1}>Attachment</MenuItem>
                                                        <MenuItem value={2}>Combined Duty</MenuItem>


                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>

                                    )


                                })}
                                <AddCircleIcon />
                            </div>
                        </div>
                    </Box>
                </div>

            </div>
        </>
    )
}

export default AdditionalCharge