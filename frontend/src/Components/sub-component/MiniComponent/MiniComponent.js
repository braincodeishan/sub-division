import React from 'react'

const Header = () => {
  return (
    <div className='headings'>
      <h5 className='text_center'>Department of Post :: Government of India </h5>
      <h6 className='text_center'>Office of Inspector Post, Lalganj Sub Division, Lalganj - 276202</h6>
    </div>
  )
}

const Signatory = () => {
  return (
    <div style={{ marginTop: '40px' }} >
      <p className='text_right' style={{ margin: '0px' }}>Inspector Post</p>
      <p className='text_right' style={{ margin: '0px' }}>Lalganj Sub Division</p>
      <p className='text_right' style={{ margin: '0px' }}>Lalganj - 276202</p>
    </div>
  )
}

const IndiapostHeader = () => {
  return (
  <div className='headings'>
    <h5 className='text_center'>Department of Post :: Government of India </h5>

  </div>
  )
}

const CopyToSPOs=()=>{
  return(
    <span> The SSPOs, Azamgarh Division, 276001</span>
  )
}
const CopyToPM=()=>{
  return(
    <span>The Senior PM, Azamgarh HO, 276001</span>
  )
}

export { Header, Signatory, IndiapostHeader, CopyToSPOs, CopyToPM }