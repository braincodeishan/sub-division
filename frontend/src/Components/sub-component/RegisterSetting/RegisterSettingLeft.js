import React, { useEffect } from "react";
import Classes from "../../../Assets/CSS/RegisterSetting.css";
const RegisterSettingLeft = () => {
  useEffect(() => {
    console.log(Classes);
  }, []);

  return (
    <div className="RS_leftpane d-flex-column">
      <div>Settings</div>
      <div className="settingBundle">
        <div>
          <p>Personal Info</p>
        </div>
        <div>
          <p>Professional Info</p>
        </div>
        <div>
          <p>Office</p>
        </div>
        <div>
          <p>Leave</p>
        </div>
        <div>
          <p>Miscelleneous</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterSettingLeft;
