import React from 'react'
import { useState } from "react";
import { css } from "@emotion/react"
import HashLoader from "react-spinners/HashLoader"



const Loading = () => {


    return (
        <>
            <div className='tremtysa2'>
                <HashLoader size={75} color={"#FFFFFF"} />
            </div>

        </>
    )
}

export default Loading
