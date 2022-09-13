import React, { useState } from 'react'
// import TextField from '@mui/material/TextField';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import IRPage1 from '../sub-component/IR/IRPage1'
import IRPage2 from '../sub-component/IR/IRPage2'
import IRPage3 from '../sub-component/IR/IRPage3'
import IRPage4 from '../sub-component/IR/IRPage4'
import IRPage5 from '../sub-component/IR/IRPage5'
import IRPage6 from '../sub-component/IR/IRPage6'
import IRPage7 from '../sub-component/IR/IRPage7'

const IRS = () => {
    const [page, setPage] = useState(1);
    return (
        <div className='container pageCenter'>
            <>
                <IRPage1 />

                <IRPage2 />

                <IRPage3 />

                <IRPage4 />

                <IRPage5 />

                <IRPage6 />
                <IRPage7 />
            </>
        </div>
    )
}

export default IRS
