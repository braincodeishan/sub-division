import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TextField from '@mui/material/TextField';
const IRPage7 = () => {
    const [sb26f, setsb26f] = useState([0])
    const [ms87f, setms87f] = useState([0])
    const [sb28f, setsb28f] = useState([0])
    const [plif, setplif] = useState([0])
    return (
        <div style={{ width: '100%' }}>

            {/* ------------------------------sb26 data----------------------------- */}
            <div> 
                <div className='pageCenter'>
                    <RemoveCircleIcon
                        onClick={() => {
                            setsb26f((prev) =>
                                prev.filter((data, index) => { return index !== prev.length - 1 })
                            )
                        }}
                        className='cursorPointer'
                    />
                </div>
                <table className='table'>

                    {
                        sb26f.map((data, index) => {
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
                        onClick={() => { setsb26f([...sb26f, 0]) }}
                        className='cursorPointer'
                    />
                </div>
            </div>

            {/* ------------------------------sb28 data----------------------------- */}
            <div>
                <div className='pageCenter'>
                    <RemoveCircleIcon
                        onClick={() => {
                            setsb28f((prev) =>
                                prev.filter((data, index) => { return index !== prev.length - 1 })
                            )
                        }}
                        className='cursorPointer'
                    />
                </div>
                <table className='table'>

                    {
                        sb28f.map((data, index) => {
                            return (<tr key={index}>

                                <td>SB28</td>
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
                        onClick={() => { setsb28f([...sb28f, 0]) }}
                        className='cursorPointer'
                    />
                </div>
            </div>

            {/* ------------------------------pli/rpli data----------------------------- */}
            <div>
                <div className='pageCenter'>
                    <RemoveCircleIcon
                        onClick={() => {
                            setplif((prev) =>
                                prev.filter((data, index) => { return index !== prev.length - 1 })
                            )
                        }}
                        className='cursorPointer'
                    />
                </div>
                <table className='table'>

                    {
                        plif.map((data, index) => {
                            return (<tr key={index}>

                                <td>PLI/RPLI</td>
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
                        onClick={() => { setplif([...plif, 0]) }}
                        className='cursorPointer'
                    />
                </div>
            </div>

            {/* ------------------------------ms87 data----------------------------- */}
            <div>
                <div className='pageCenter'>
                    <RemoveCircleIcon
                        onClick={() => {
                            setms87f((prev) =>
                                prev.filter((data, index) => { return index !== prev.length - 1 })
                            )
                        }}
                        className='cursorPointer'
                    />
                </div>
                <table className='table'>

                    {
                        ms87f.map((data, index) => {
                            return (<tr key={index}>

                                <td>MS87</td>
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
                        onClick={() => { setms87f([...ms87f, 0]) }}
                        className='cursorPointer'
                    />
                </div>
            </div>
        </div>
    )
}

export default IRPage7