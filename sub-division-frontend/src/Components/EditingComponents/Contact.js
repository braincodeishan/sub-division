import React, { useState } from 'react';
import Alert from '../sub-component/Alert';
import Cards from '../sub-component/Cards';
import HorizontalLine from '../sub-component/HorizontalLine';
import Loading from '../sub-component/Loading';
const Contact = () => {

  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [server, setserver] = useState("");
  const [formmessage, setformmessage] = useState("");
  const [alertClass, setalertClass] = useState("");
  const [message, setmessage] = useState("");
  const [isLoading, setisLoading] = useState(false)

  const contactSubmit = async () => {
    

    const finalEmail = email + "@" + server;
    if (!userName || !email || !server || !formmessage) {
      setalertClass("alert-danger");
      setmessage("Some Field might have been left Vacant. Kindly fill all the fields")
      setTimeout(() => {
        setmessage("")
      }, 2000);
    }else{
      setisLoading(true)
    const res = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        userName,
        finalEmail,
        message
      })
    })
    if (res.status === 200) {
      setalertClass("alert-success");
      setmessage('Your Request has been submitted Successfully! We will revert you back Shortly');
    }
    else {
      setalertClass("alert-danger");
      setmessage('Something went wrong ! Please Try again');
    }
    setTimeout(() => {
      setmessage("")
      setisLoading(false);
    }, 2000);

  }
}

  return <>
    {isLoading && <Loading />}
    {message !== "" && <Alert msg={message} alertClass={alertClass} />}
    <section className=''>
      <div className='container-fluid Contact d-flex justify-content-center align-items-center'>
        <h1 className='text-light '>Contact US</h1>

      </div>
      <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
        <p className='text-primary'>Got a Question in mind?</p>
        <h2 className=''>Contact GoPost</h2>
        <p className=''>We’re here to help and answer any question you</p>
        <p className='p-0 mb-0'>might have. We look forward to hearing from you</p>
        <p className='p-0 mb-0'>🙂</p>
        {<HorizontalLine lineno={2} />}
        <div className='shadow p-5 m-3'>

          <p className='text-center fw-bolder text-break text-secondary'>Please fill up the form to reach us with any</p><p className='text-secondary text-center fw-bolder'> Suggestions/Problems/Modifications</p>
          <div className="input-group mb-3">
            <span className="input-group-text" >@</span>
            <input type="text" className="form-control" placeholder="Username" onChange={(e) => setuserName(e.target.value)} value={userName} />
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Mail ID" onChange={(e) => setemail(e.target.value)} value={email} />
            <span className="input-group-text">@</span>
            <input type="text" className="form-control" placeholder="Server" onChange={(e) => setserver(e.target.value)} value={server} />
          </div>

          <div className="input-group">
            <span className="input-group-text">Message</span>
            <textarea className="form-control" onChange={(e) => setformmessage(e.target.value)} value={formmessage}></textarea>
          </div>
          <button type="button" className="btn btn-success m-3 float-end" onClick={contactSubmit}>Submit</button>


        </div>

      </div>
      <div className='d-flex flex-row bg-light mt-5 '>

        <div className="card col-12 col-sm-10 col-lg-4 mx-auto m-5 ">
          <h5 className="card-header">Contact Information</h5>
          <div className="card-body">
            <p className="card-text">
              <i className="fas fa-home mr-3"></i> O/o PMG, Kurnool Region, Kurnool
            </p>
            <p className="card-text">
              <i className="fas fa-envelope mr-3"></i> braincodeishan@gmail.com
            </p>
            <p className="card-text">
              <i className="fas fa-phone mr-3"></i> +918882263883
            </p>
            <p className="card-text">
              <i className="fas fa-print mr-3"></i> 08518-2339XX
            </p>

          </div>
        </div>

        <div className='d-flex flex-column col-12 col-sm-10 col-lg-5 align-items-center'>
          <h3 className='fw-bold m-5'>How Can We Help?</h3>
          <p>Want to contact an editor or submit a question to one of our editors? The Contact address is on the left side. You can personnally mail and get the query resolved.</p>
          <p className='fw-bold'>For Bulk upload of data from Excel you can contact the Admin.</p>
        </div>
      </div>

    </section>


  </>;
};

export default Contact;
