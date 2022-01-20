import React from 'react'

const Alert = (props) => {
    const classes="alert "+ props.msgtype+ " alert-dismissible position-absolute top-0 end-0 fade show";
    return (
        <>
         <div className={classes} role="alert">
                {props.msg}
            </div>   
        </>
    )
}

export default Alert
