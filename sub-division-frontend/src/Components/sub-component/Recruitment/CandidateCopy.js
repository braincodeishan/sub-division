import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
const CandidateCopy = ({ data, setShowData }) => {
  return (
    <div className='popup'>
      <div  className='printNone' style={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-end', cursor:'pointer' }}>
        <CloseIcon onClick={()=>{setShowData(false)}}/>
      </div>
      <div className='container'>
        <div className='headings'>
          <h5 className='text_center'>Department of Post :: Government of India </h5>
          <h6 className='text_center'>Office of Inspector Post, Phoolpur Sub Division, Phoolpur - 276304</h6>
        </div>
        <div style={{ marginTop: '40px' }} className='salutation'>
          <p style={{ margin: '0' }}>To</p>
          <p style={{ margin: '0' }}>{data.name}</p>
          <p style={{ margin: '0' }}>{data.address}</p>
          <p style={{ margin: '0' }}>{data.phoneNo}</p>
        </div>
        <div style={{ marginTop: '40px' }}>
          <p style={{ fontWeight: '600' }} className='text_center'>NO: IP/Phoolpur/{data.BOname}/Cycle - dated at Phoolpur the {Date.now()}</p>
          <p style={{ fontWeight: '600' }} className='text_center'>Sub: Submission of Original Documents for verification in connection with GDS Recruitment.</p>
        </div>
        <div style={{ marginTop: '40px' }}>
          <p>The Following documents are hereby submitted to Office of Inspector Post, Phoolpur Sub Division, Phoolpur 276304 for verification of the documents from the original source for further processing of the candidature.</p>
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
              <td>{data.casteCertNo}</td>
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
        <div style={{ marginTop: '40px' }}>
          <p className='text_right'>Inspector Post</p>
          <p className='text_right'>Phoolpur Sub Division</p>
          <p className='text_right'>Phoolpur - 276304</p>
        </div>




{/* MARKSHEET */}

        <div className='headingBreak'>
          <h5 className='text_center'>Department of Post :: Government of India </h5>
          <h6 className='text_center'>Office of Inspector Post, Phoolpur Sub Division, Phoolpur - 276304</h6>
        </div>
        <div style={{ marginTop: '40px' }} className='salutation'>
          <p style={{ margin: '0' }}>To</p>
          <p style={{ margin: '0' }}>The Secretary</p>
          <p style={{ margin: '0' }}>{data.sscAdd}</p>
        </div>
        <div style={{ marginTop: '40px' }}>
          <p style={{ fontWeight: '600' }} className='text_center'>NO: IP/Phoolpur/{data.BOname}/Cycle - dated at Phoolpur the {Date.now()}</p>
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
              <th>Name of the Post</th>
              <th>School Name</th>
              
             
            </tr>
            <tr>
              <th>{data.name}</th>
              <th>{data.dob}</th>
              <th>{data.sscCertNo}</th>
              <th>{data.sscRoll}</th>
              <th>{data.sscMarks}</th>
              <th>{data.post}</th>
              <th>{data.sscSchool}</th>
            </tr>
            
          </table>
          <p>It is therefore requested to kindly get the above marksheet verified from Board Records at the earliest. A kind reply is solicited at an early date.</p>
            <p>DA :-  Xerox memorandum of marks(1) of {data.name}</p>


        </div>


        <div style={{ marginTop: '40px' }}>
          <p className='text_right'>Inspector Post</p>
          <p className='text_right'>Phoolpur Sub Division</p>
          <p className='text_right'>Phoolpur - 276304</p>
        </div>





        <div className='headingBreak'>
          <h5 className='text_center'>Department of Post :: Government of India </h5>
          <h6 className='text_center'>Office of Inspector Post, Phoolpur Sub Division, Phoolpur - 276304</h6>
        </div>
        <div style={{ marginTop: '40px' }} className='salutation'>
          <p style={{ margin: '0' }}>To</p>
          <p style={{ margin: '0' }}>The SSPOs/SPOs</p>
          <p style={{ margin: '0' }}>{data.sscDivision}</p>
        </div>
        <div style={{ marginTop: '40px' }}>
          <p style={{ fontWeight: '600' }} className='text_center'>NO: IP/Phoolpur/{data.BOname}/Cycle - dated at Phoolpur the {Date.now()}</p>
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
              <th>Name of the Post</th>
              <th>School Name</th>
              
             
            </tr>
            <tr>
              <th>{data.name}</th>
              <th>{data.dob}</th>
              <th>{data.sscCertNo}</th>
              <th>{data.sscRoll}</th>
              <th>{data.sscMarks}</th>
              <th>{data.post}</th>
              <th>{data.sscSchool}</th>
            </tr>
            
          </table>
          <p>It is therefore requested to kindly get the above marksheet verified from Board Records at the earliest. A kind reply is solicited at an early date.</p>
            <p>DA :-  Xerox memorandum of marks(1) of {data.name}</p>


        </div>
        <div style={{ marginTop: '40px' }}>
          <p className='text_right'>Inspector Post</p>
          <p className='text_right'>Phoolpur Sub Division</p>
          <p className='text_right'>Phoolpur - 276304</p>
        </div>


{/* CASTE CERTIFICATE */}



        <div className='headingBreak'>
          <h5 className='text_center'>Department of Post :: Government of India </h5>
          <h6 className='text_center'>Office of Inspector Post, Phoolpur Sub Division, Phoolpur - 276304</h6>
        </div>
        <div style={{ marginTop: '40px' }} className='salutation'>
          <p style={{ margin: '0' }}>To</p>
          <p style={{ margin: '0' }}>The Tehsildar</p>
          <p style={{ margin: '0' }}>{data.casteCertAdd}</p>
          
        </div>
        <div style={{ marginTop: '40px' }}>
          <p style={{ fontWeight: '600' }} className='text_center'>NO: IP/Phoolpur/{data.BOname}/Cycle - dated at Phoolpur the {Date.now()}</p>
          <p style={{ fontWeight: '600' }} className='text_center'>Sub: Regarding  Verification of Caste Certificate.</p>
        </div>
        <div style={{ marginTop: '40px' }}>
          <p className='text_right'>Inspector Post</p>
          <p className='text_right'>Phoolpur Sub Division</p>
          <p className='text_right'>Phoolpur - 276304</p>
        </div>






        <div className='headingBreak'>
          <h5 className='text_center'>Department of Post :: Government of India </h5>
          <h6 className='text_center'>Office of Inspector Post, Phoolpur Sub Division, Phoolpur - 276304</h6>
        </div>
        <div style={{ marginTop: '40px' }} className='salutation'>
          <p style={{ margin: '0' }}>To</p>
          <p style={{ margin: '0' }}>SSPOs/SPOs/ASPOs/IPOs</p>
          <p style={{ margin: '0' }}>{data.casteSubDivision}</p>
          
        </div>
        <div style={{ marginTop: '40px' }}>
          <p style={{ fontWeight: '600' }} className='text_center'>NO: IP/Phoolpur/{data.BOname}/Cycle - dated at Phoolpur the {Date.now()}</p>
          <p style={{ fontWeight: '600' }} className='text_center'>Sub: Regarding  Verification of Caste Certificate.</p>
        </div>
        <div style={{ marginTop: '40px' }}>
          <p className='text_right'>Inspector Post</p>
          <p className='text_right'>Phoolpur Sub Division</p>
          <p className='text_right'>Phoolpur - 276304</p>
        </div>



{/* COMPUTER CERTIFICATE */}

        <div className='headingBreak'>
          <h5 className='text_center'>Department of Post :: Government of India </h5>
          <h6 className='text_center'>Office of Inspector Post, Phoolpur Sub Division, Phoolpur - 276304</h6>
        </div>
        <div style={{ marginTop: '40px' }} className='salutation'>
          <p style={{ margin: '0' }}>To</p>
          <p style={{ margin: '0' }}>Manager</p>
          <p style={{ margin: '0' }}>{data.compCertAdd}</p>
          
        </div>
        <div style={{ marginTop: '40px' }}>
          <p style={{ fontWeight: '600' }} className='text_center'>NO: IP/Phoolpur/{data.BOname}/Cycle - dated at Phoolpur the {Date.now()}</p>
          <p style={{ fontWeight: '600' }} className='text_center'>Sub: Regarding  Verification of Computer Certificate.</p>
        </div>
        <div style={{ marginTop: '40px' }}>
          <p className='text_right'>Inspector Post</p>
          <p className='text_right'>Phoolpur Sub Division</p>
          <p className='text_right'>Phoolpur - 276304</p>
        </div>




        <div className='headingBreak'>
          <h5 className='text_center'>Department of Post :: Government of India </h5>
          <h6 className='text_center'>Office of Inspector Post, Phoolpur Sub Division, Phoolpur - 276304</h6>
        </div>
        <div style={{ marginTop: '40px' }} className='salutation'>
          <p style={{ margin: '0' }}>To</p>
          <p style={{ margin: '0' }}>The SSPOs/SPOs/ASPOs/IPOs</p>
          <p style={{ margin: '0' }}>{data.compCertSubAdd}</p>
          
        </div>
        <div style={{ marginTop: '40px' }}>
          <p style={{ fontWeight: '600' }} className='text_center'>NO: IP/Phoolpur/{data.BOname}/Cycle - dated at Phoolpur the {Date.now()}</p>
          <p style={{ fontWeight: '600' }} className='text_center'>Sub: Regarding  Verification of Computer Certificate.</p>
        </div>
        <div style={{ marginTop: '40px' }}>
          <p className='text_right'>Inspector Post</p>
          <p className='text_right'>Phoolpur Sub Division</p>
          <p className='text_right'>Phoolpur - 276304</p>
        </div>


{/* CHARACTER AND ANTECEDENT */}
        <div className='headingBreak'>
          <h5 className='text_center'>Department of Post :: Government of India </h5>
          <h6 className='text_center'>Office of Inspector Post, Phoolpur Sub Division, Phoolpur - 276304</h6>
        </div>
        <div style={{ marginTop: '40px' }} className='salutation'>
          <p style={{ margin: '0' }}>To</p>
          <p style={{ margin: '0' }}>The District Magistrate</p>
          <p style={{ margin: '0' }}>{data.district}</p>
          
        </div>
        <div style={{ marginTop: '40px' }}>
          <p style={{ fontWeight: '600' }} className='text_center'>NO: IP/Phoolpur/{data.BOname}/Cycle - dated at Phoolpur the {Date.now()}</p>
          <p style={{ fontWeight: '600' }} className='text_center'>Sub: Regarding  Verification of Character and Antecedent of Sri {data.name}.</p>
        </div>
        <div style={{ marginTop: '40px' }}>
          <p className='text_right'>Inspector Post</p>
          <p className='text_right'>Phoolpur Sub Division</p>
          <p className='text_right'>Phoolpur - 276304</p>
        </div>



      </div>
    </div>
  )
}

export default CandidateCopy