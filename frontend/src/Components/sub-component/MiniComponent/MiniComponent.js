import React, { useContext } from 'react'
import LoginContext from '../../../Contexts/LoginContext'
const Header = () => {
const Login=useContext(LoginContext);
  return (
    <div className='headings'>
      <h5 className='text_center'>Department of Post :: Government of India </h5>
      <h6 className='text_center'>Office of {Login.post}, {Login.subDivision} Sub Division, {Login.subDivision} </h6>
    </div>
  )
}

const Signatory = () => {
  const Login=useContext(LoginContext);
  return (
    <div style={{ marginTop: '40px' }} >
      <p className='text_right' style={{ margin: '0px' }}>Inspector Post</p>
      <p className='text_right' style={{ margin: '0px' }}>{Login.subDivision} Sub Division</p>
      <p className='text_right' style={{ margin: '0px' }}>{Login.subDivision} - 276304</p>
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
  const Login=useContext(LoginContext);
  return(
    <span> The SSPOs/SPOs, {Login.division} Division,</span>
  )
}
const CopyToPM=()=>{
  const Login=useContext(LoginContext);
  return(
    <span>The Senior PM/HPM, {Login.division} HO, </span>
  )
}

export { Header, Signatory, IndiapostHeader, CopyToSPOs, CopyToPM }