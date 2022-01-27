import React from 'react'

const Alert = (props) => {
    const classes="alert "+ props.msgtype+ " alert-dismissible position-absolute mx-auto fade show";
    return (
        <>
         <div className={classes} role="alert">
                {props.msg}
            </div>   
        </>
    )
}

export default Alert
