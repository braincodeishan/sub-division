import React from 'react';
import Table from './Table'
import {Link} from 'react-router-dom'

const Inspectionpending = (props) => {
    return <div className="card col-12 col-md-12 col-lg-6 mx-auto" >
        <h5 className="card-header">Inspection Details</h5>
        <div className="card-body">
            <h5 className="card-title">Targets</h5>
            <p className="card-text">Inspections is to be done this year is <b>{props.alloted}</b>.</p><p>The total inspections as per the tour program till today is <b>{props.allotedtillmonth}</b>. </p><p>The total inspection pending till today is <b>{props.pending}</b>. </p><p>IR to be issued is <b>{props.irIssued}</b> and IR to be prepared is <b>{props.irPending}</b>.</p>

            {/* <Link to="#" className="btn btn-primary">View Summary</Link> */}
            <Table heading={props.tableHeading} body={props.tableBody} key={props.key} />
            <Link to="/TourProgram" className="d-flex justify-content-center align-items-center">Click here to know more <i className="fa fa-chevron-right mx-2" aria-hidden="true"></i></Link>
        </div>
    </div>
};

export default Inspectionpending;