import React, {useEffect} from 'react'
import Classes from "../../../Assets/CSS/RegisterSetting.css"
const RegisterSettingLeft = () => {
  useEffect(() => {
    console.log(Classes);
  
    
  }, [])
  

  return (
    <div className='RS_leftpane d-flex-column'>
      <div className="RS_options d-flex-row-center align-items-center " >Setting</div>
      <div className="RS_options d-flex-row-center align-items-center cursorPointer" ><p>Personal Info</p></div>
      <div className="RS_options d-flex-row-center align-items-center cursorPointer"><p>Professional Info</p></div>
      <div className="RS_options d-flex-row-center align-items-center cursorPointer"><p>Office</p></div>
      <div className="RS_options d-flex-row-center align-items-center cursorPointer"><p>Leave</p></div>
      <div className="RS_options d-flex-row-center align-items-center cursorPointer"><p>Miscelleneous</p></div>
    </div>
  )
}

export default RegisterSettingLeft