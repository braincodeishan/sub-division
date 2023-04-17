import React ,{useState} from 'react'
import RegisterSettingLeft from './RegisterSettingLeft'
import RegisterSettingRight from './RegisterSettingRight'

const RegisterSetting = () => {
  const [pane,setPane]=useState(0)
  return (
    <div className=''>
      <div className="d-flex-row">
        <RegisterSettingLeft/>
        <RegisterSettingRight/>
      </div>
    </div>
  )
}

export default RegisterSetting