import React from 'react'

const Alert = (props) => {
    const classes="alert "+ props.alertClass+ " alert-dismissible position-fixed fade show alert-main ";
    return (
        <>
        <div className='Alert-bg'>
         <div className={classes} role="alert">
                {props.msg}
            </div>   
            </div>
        </>
    )
}

export default Alert
