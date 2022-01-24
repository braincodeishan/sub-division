import React from 'react'
import { Link } from 'react-router-dom'
import Blobs from './sub-component/Blobs'
const Dashboard = () => {
    return (
        <>
            <section class="fdjkf col-12 d-flex">
                


                <div className="card col-12 col-md-12 col-lg-6">
                    <h5 className="card-header">Inspection Details</h5>
                    <div className="card-body">
                        <h5 className="card-title">Targets</h5>
                        <p className="card-text">Inspections is to be done this year is <b>X</b>.</p><p>The total inspections as per the tour program till today is <b>X</b>. </p><p>The total inspection pending till today is <b>X</b>. </p><p>IR to be issued is <b>X</b> and IR to be prepared is <b>X</b>.</p>

                        {/* <Link to="#" className="btn btn-primary">View Summary</Link> */}
                    </div>
                </div>
                {<Blobs/>}

            </section>
        </>
    )
}

export default Dashboard
