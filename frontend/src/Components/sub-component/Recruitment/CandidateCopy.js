import React, { useContext, useEffect } from 'react'
import { Header, Signatory } from '../MiniComponent/MiniComponent';
import CloseIcon from '@mui/icons-material/Close';
import LoginContext from '../../../Contexts/LoginContext';
const CandidateCopy = ({ data, setShowData }) => {
  const Login=useContext(LoginContext);
  var currentTime = new Date()
  var month = currentTime.getMonth() + 1
  var day = currentTime.getDate()
  var year = currentTime.getFullYear()
  var date = day + '/' + month + '/' + year;
  useEffect(() => {
    window.print();
  }, [])






  const caseMark = () => {
    return (
      <p style={{ fontWeight: '600' }} className='text_center'>NO: IP/{Login.subDivision}/{data.post}/Cycle - dated at {Login.subDivision} the {date} </p>

    )
  }

  return (
    <div className='popup'>
      <div className='printNone' style={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-end', cursor: 'pointer' }}>
        <CloseIcon onClick={() => { setShowData(false) }} />
      </div>
      <div className='container'>
        <div className='printBreak'>
          {<Header />}
          <div style={{ marginTop: '40px' }} className='salutation'>
            <p style={{ margin: '0' }}>To</p>
            <p style={{ margin: '0' }}>{data.name}</p>
            <p style={{ margin: '0', whiteSpace: 'pre-line' }}>{data.address}</p>
            <p style={{ margin: '0' }}>{data.phoneNo}</p>
          </div>
          <div style={{ marginTop: '40px' }}>
            {caseMark()}
            <p style={{ fontWeight: '600' }} className='text_center'>Sub: Submission of Original Documents for verification in connection with GDS Recruitment.</p>
          </div>
          <div style={{ marginTop: '40px' }}>
            <p>The Following documents are hereby submitted to Office of Inspector Post, Phoolpur Sub Division, Phoolpur 276202 for verification of the documents from the original source for further processing of the candidature.</p>
            <table className='table'>
              <tr>
                <th>Name Of the Certificate</th>
                <th>Serial Number/Roll Number</th>
              </tr>
              <tr>
                <th>SSC Certificate</th>
                <td>{data.sscCertNo}, RollNumber - {data.sscRoll}</td>

              </tr>
              <tr>
                <th>Caste Certificate</th>
                <td>{data.casteCertNo ? data.casteCertNo : "Not Submitted"}</td>
              </tr>
              <tr>
                <th>Computer Certificate</th>
                <td>{data.compCertNo}</td>
              </tr>
              <tr>
                <th>Aadhar Xerox</th>
                <td>{data.aadhar}</td>
              </tr>
            </table>
          </div>
          {<Signatory />}

        </div>


        {/* MARKSHEET */}
        <div className='printBreak'>
          {<Header />}
          <div style={{ marginTop: '40px' }} className='salutation'>
            <p style={{ margin: '0' }}>To</p>
            <p style={{ margin: '0' }}>The Secretary</p>
            <p style={{ margin: '0', whiteSpace: 'pre-line' }}>{data.sscAdd}</p>
          </div>
          <div style={{ marginTop: '40px' }}>
            {caseMark()}
            <p style={{ fontWeight: '600' }} className='text_center'>Sub: Regarding  Verification of Marks statement certificate/mark sheet.</p>
          </div>
          <div style={{ marginTop: '40px' }}>
            <p>It is to bring to your kind notice that the following candidate mentioned below has applied for the GDS post mentioned below in the Department of Posts. The copy of the marksheet is enclosed herewith for verification of genuineness of the same and early return with your kind reply.</p>
            <table className='table'>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Certificate No</th>
                <th>Roll No</th>
                <th>Total Obtained/Total Marks</th>




              </tr>
              <tr>
                <th>{data.name}</th>
                <th>{data.dob}</th>
                <th>{data.sscCertNo}</th>
                <th>{data.sscRoll}</th>
                <th>{data.sscMarks}</th>


              </tr>

            </table>
            <p>Name of the Post: {data.post}</p>
            <p>School Name: {data.sscSchool}</p>
            <p>It is therefore requested to kindly get the above marksheet verified from Board Records at the earliest. A kind reply is solicited at an early date.</p>
            <p>DA :-  Xerox memorandum of marks(1) of {data.name}</p>


          </div>


          {<Signatory />}

        </div>


        <div className='printBreak'>
          {<Header />}
          <div style={{ marginTop: '40px' }} className='salutation'>
            <p style={{ margin: '0' }}>To</p>
            {/* <p style={{ margin: '0' }}>The SSPOs/SPOs</p> */}
            <p style={{ margin: '0', whiteSpace: 'pre-line' }}>{data.sscDivision}</p>
          </div>
          <div style={{ marginTop: '40px' }}>
            {caseMark()}
            <p style={{ fontWeight: '600' }} className='text_center'>Regarding  Verification of Marks statement certificate/mark sheet.</p>
          </div>
          <div style={{ marginTop: '40px' }}>
            <p>It is to bring to your kind notice that the following candidate mentioned below has applied for the GDS post mentioned below in the Department of Posts. The copy of the marksheet is enclosed herewith for verification of genuineness of the same and early return with your kind reply.</p>
            <table className='table'>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Certificate No</th>
                <th>Roll No</th>
                <th>Total Obtained/Total Marks</th>



              </tr>
              <tr>
                <th>{data.name}</th>
                <th>{data.dob}</th>
                <th>{data.sscCertNo}</th>
                <th>{data.sscRoll}</th>
                <th>{data.sscMarks}</th>

              </tr>

            </table>
            <p>Name of the Post: {data.post}</p>
            <p>School Name: {data.sscSchool}</p>
            <p>It is therefore requested to kindly get the above marksheet verified from Board Records at the earliest. A kind reply is solicited at an early date.</p>
            <p>DA :-  Xerox memorandum of marks(1) of {data.name}</p>


          </div>
          {<Signatory />}
        </div>

        {/* CASTE CERTIFICATE */}
        <div className='printBreak'>




          {data.casteCertNo &&

            < Header />}
          < div style={{ marginTop: '40px' }} className='salutation'>
            <p style={{ margin: '0' }}>To</p>
            {/* <p style={{ margin: '0' }}>The Tehsildar</p> */}
            <p style={{ margin: '0', whiteSpace: 'pre-line' }}>{data.casteCertAdd}</p>

          </div>
          <div style={{ marginTop: '40px' }}>
            {caseMark()}
            <p style={{ fontWeight: '600' }} className='text_center'>Sub: Regarding  Verification of Caste Certificate.</p>
          </div>
          <div style={{ marginTop: '40px' }}>
            <p>It is to bring to your kind notice that the following candidate mentioned below has applied for the GDS post mentioned below in the Department of Posts. The copy of the Caste Certificate is enclosed herewith for verification of genuineness of the same and early return with your kind reply.</p>
            <table className='table'>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Certificate No</th>

                <th>Name of the Post</th>

              </tr>
              <tr>
                <th>{data.name}</th>
                <th>{data.dob}</th>
                <th>{data.casteCertNo}</th>
                <th>{data.post}</th>

              </tr>

            </table>
            <p>It is therefore requested to kindly get the above Caste Certificate verified at the earliest. A kind reply is solicited at an early date.</p>
            <p>DA :-  Xerox Caste Certificate of {data.name}</p>


          </div>
          {<Signatory />}


        </div>


        <div className='printBreak'>



          {<Header />}
          <div style={{ marginTop: '40px' }} className='salutation'>
            <p style={{ margin: '0' }}>To</p>
            {/* <p style={{ margin: '0' }}>SSPOs/SPOs/ASPOs/IPOs</p> */}
            <p style={{ margin: '0', whiteSpace: 'pre-line' }}>{data.casteSubDivision}</p>

          </div>
          <div style={{ marginTop: '40px' }}>
            {caseMark()}
            <p style={{ fontWeight: '600' }} className='text_center'>Sub: Regarding  Verification of Caste Certificate.</p>
          </div>
          <div style={{ marginTop: '40px' }}>
            <p>It is to bring to your kind notice that the following candidate mentioned below has applied for the GDS post mentioned below in the Department of Posts. The copy of the Caste Certificate is enclosed herewith for verification of genuineness of the same and early return with your kind reply.</p>
            <table className='table'>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Certificate No</th>
                <th>Name of the Post</th>

              </tr>
              <tr>
                <th>{data.name}</th>
                <th>{data.dob}</th>
                <th>{data.casteCertNo}</th>
                <th>{data.post}</th>

              </tr>

            </table>
            <p>It is therefore requested to kindly get the above Caste Certificate verified at the earliest. A kind reply is solicited at an early date.</p>
            <p>DA :-  Xerox Caste Certificate of {data.name}</p>


          </div>
          {<Signatory />}


        </div>

        {/* COMPUTER CERTIFICATE */}
        <div className='printBreak'>



          {<Header />}
          <div style={{ marginTop: '40px' }} className='salutation'>
            <p style={{ margin: '0' }}>To</p>
            {/* <p style={{ margin: '0' }}>Manager</p> */}
            <p style={{ margin: '0', whiteSpace: 'pre-line' }}>{data.compCertAdd}</p>

          </div>
          <div style={{ marginTop: '40px' }}>
            {caseMark()}
            <p style={{ fontWeight: '600' }} className='text_center'>Sub: Regarding  Verification of Computer Certificate.</p>
          </div>
          <div style={{ marginTop: '40px' }}>
            <p>It is to bring to your kind notice that the following candidate mentioned below has applied for the GDS post mentioned below in the Department of Posts. The copy of the Computer Certificate is enclosed herewith for verification of genuineness of the same and early return with your kind reply.</p>
            <table className='table'>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Computer Certificate No</th>
                <th>Name of the Post</th>

              </tr>
              <tr>
                <th>{data.name}</th>
                <th>{data.dob}</th>
                <th>{data.compCertNo}</th>
                <th>{data.post}</th>

              </tr>

            </table>
            <p>It is therefore requested to kindly get the above Computer Certificate verified at the earliest. A kind reply is solicited at an early date.</p>
            <p>DA :-  Xerox Computer Certificate of {data.name}</p>


          </div>
          {<Signatory />}

        </div>

        <div className='printBreak'>
          {<Header />}
          <div style={{ marginTop: '40px' }} className='salutation'>
            <p style={{ margin: '0' }}>To</p>
            {/* <p style={{ margin: '0' }}>The SSPOs/SPOs/ASPOs/IPOs</p> */}
            <p style={{ margin: '0', whiteSpace: 'pre-line' }}>{data.compCertSubAdd}</p>

          </div>
          <div style={{ marginTop: '40px' }}>
            {caseMark()}
            <p style={{ fontWeight: '600' }} className='text_center'>Sub: Regarding  Verification of Computer Certificate.</p>
          </div>
          <div style={{ marginTop: '40px' }}>
            <p>It is to bring to your kind notice that the following candidate mentioned below has applied for the GDS post mentioned below in the Department of Posts. The copy of the Computer Certificate is enclosed herewith for verification of genuineness of the same and early return with your kind reply.</p>
            <table className='table'>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Computer Certificate No</th>
                <th>Name of the Post</th>

              </tr>
              <tr>
                <th>{data.name}</th>
                <th>{data.dob}</th>
                <th>{data.compCertNo}</th>
                <th>{data.post}</th>

              </tr>

            </table>
            <p>It is therefore requested to kindly get the above Computer Certificate verified at the earliest. A kind reply is solicited at an early date.</p>
            <p>DA :-  Xerox Computer Certificate of {data.name}</p>


          </div>
          {<Signatory />}
        </div>

        {/* CHARACTER AND ANTECEDENT */}
        <div className=''>

          {<Header />}
          <div style={{ marginTop: '40px' }} className='salutation'>
            <p style={{ margin: '0' }}>To</p>
            <p style={{ margin: '0' }}>The District Magistrate</p>
            <p style={{ margin: '0' }}>{data.district}</p>

          </div>
          <div style={{ marginTop: '40px' }}>
            {caseMark()}
            <p style={{ fontWeight: '600' }} className='text_center'>Sub: Regarding  Verification of Character and Antecedent of Sri {data.name}.</p>
          </div>
          <div style={{ marginTop: '40px' }}>
            <p>It is to bring to your kind notice that the following candidate mentioned below has applied for the GDS post mentioned below in the Department of Posts. </p>
            <table className='table'>
              <tr>
                <th>Name</th>
                <th>{data.name}</th>
              </tr>
              <tr>
                <th>Son Of</th>
                <th>{data.fathersName}</th>
              </tr>
              <tr>
                <th>Address</th>
                <th>{data.address}</th>
              </tr>
              <tr>
                <th>Post Office</th>
                <th>{data.po}</th>
              </tr>
              <tr>
                <th>Police Station</th>
                <th>{data.ps}</th>
              </tr>
              <tr>
                <th>District, State</th>
                <th>{data.district}</th>
              </tr>
              <tr>
                <th>Phone Number</th>
                <th>{data.phoneNo}</th>
              </tr>
              <tr>
                <th>Selected For</th>
                <th>{data.post}</th>
              </tr>


            </table>
            <p>It is therefore requested that his character and Antecedent may kindly be verified and results may be intimated at the earliest. I shall be obliged for your early action in this direction.</p>



          </div>
          {<Signatory />}
        </div>


      </div>
    </div >
  )
}

export default CandidateCopy