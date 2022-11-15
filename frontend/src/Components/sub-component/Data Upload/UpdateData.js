import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const UpdateData = () => {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='container-fluid'>
        <div className='spacer5 offWhite mb-4'></div>
        <p className=''>Please select the type of data to be uploaded</p>
        <Box sx={{ minWidth: 120 }} style={{width:'250px'}}>
      <FormControl fullWidth>
      
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>GDS SENIORITY DATA</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
          

        <div className='spacer1 offWhite mt-4'></div>
          


        <div className='spacer1 offWhite mt-4'></div>
    </div>
  )
}

export default UpdateData