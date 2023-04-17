import React, { useContext } from 'react'
import LoginContext from '../../../Contexts/LoginContext';
import CloseIcon from '@mui/icons-material/Close';
import { Header, Signatory } from '../MiniComponent/MiniComponent';

const ShowAdditionalChargeOrder = ({ data, setShowData }) => {
  const Login = useContext(LoginContext);
  var currentTime = new Date()
  var month = currentTime.getMonth() + 1
  var day = currentTime.getDate()
  var year = currentTime.getFullYear()
  var date = day + '/' + month + '/' + year;
  const caseMark = () => {
    return (
      <p style={{ fontWeight: '600' }} className='text_left mt-2'>MEMO NO: IP/{Login.subDivision}/{data.post}/Combined Duty - dated at {Login.subDivision} the {date} </p>

    )
  }
  return (
    <>
      <div className='popup'>
        <div className='printNone' style={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-end', cursor: 'pointer' }}>
          <CloseIcon onClick={() => { setShowData(true) }} />
        </div>
        {<Header />}
        {caseMark()}
        <p>निम्नलिखित कर्मचारियों को लिखे पदों पे कार्य करने के लिए आदेशित किया जाता है |</p>

        <table className='table'>
          <tr>
            <th>नाम</th>
            <th>मूल पद</th>
            <th>आदेश</th>
          </tr>
          {data.xyz.map((data)=>{
            
          })}
        </table>


        <p>उपरोक्त कर्मचारी की नियुक्ति विशुद्ध रूप से अस्थायी आधार पर है और पद पर कोई अधिकार प्रदान नहीं करती है। उपरोक्त कोई भी रिक्त पद के लिए नियमित व्यवस्था किए जाने पर उपर्युक्त लिखे कर्मचारी अपने नियमित पद पर वापस आ जायेंगे ।</p>
        <p>यह व्यवस्था अत्यंत अस्थायी है और कभी भी समाप्त की जा सकती है। अधोहस्ताक्षरी के पास बिना किसी सूचना और बिना कोई कारण बताए किसी भी समय नियुक्ति समाप्त करने का अधिकार सुरक्षित है।</p>
        <p>उपरोक्त ग्रामीण डाक सेवक कर्मचारी, समय-समय पर संशोधित ग्रामीण डाक सेवक (आचरण और व्यवसाय) नियम-2020 और जीडीएस सेवकों पर लागू अन्य सभी नियमों और आदेशों द्वारा शासित होंगे</p>
        <p>चार्ज रिपोर्ट सभी सम्बन्धित को प्रेषित करेंI</p>

        {<Signatory />}

        <p>प्रतिलिपि-</p>
        <p>•	उपडाकपाल दीदारगंज</p>
        <p>•	डाक सर्वेक्षक 1  फूलपुर उपमंडल आजमगढ़ </p>
        <p>•	प्रवर पोस्टमॉस्टर आजमगढ़ को सूचनार्थ</p>
        <p>•	प्रवर अधीक्षक डाकघर आजमगढ़ को सूचनार्थ</p>
        <p>•	कार्यालय प्रति</p>
        <p>•	उपरोक्त सभी कर्मचारी </p>
      </div>
    </>
  )
}

export default ShowAdditionalChargeOrder