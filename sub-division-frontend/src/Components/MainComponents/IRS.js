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

const IRS = () => {
    const [page, setPage] = useState(1);
    return (
        <div className='container'>
            <span className='span'>
                <div>
                <ArrowCircleLeftIcon
                    style={{ cursor: 'pointer' }}
                    onClick={()=>{
                        if(page===1){
                            setPage(10);
                            return;
                        }
                        setPage(page-1);
                    }}
                />
                </div>
                {
                    page === 1 && <IRPage1/>
                    
                }
                {
                    page === 2 && <IRPage2/>
                    
                }
                {
                    page === 3 && <IRPage3/>
                    
                }
                {
                    page === 4 && <IRPage4/>
                    
                }
                {
                    page === 5 && <IRPage5/>
                    
                }
                {
                    page === 6 && <IRPage6/>
                    
                }
                <div>
                <ArrowCircleRightIcon
                    style={{ cursor: 'pointer' }}
                    onClick={()=>{
                        if(page===10){
                            setPage(1);
                            return;
                        }
                        setPage(page+1);
                    }}
                />
                </div>
            </span>

        </div>
    )
}

export default IRS
