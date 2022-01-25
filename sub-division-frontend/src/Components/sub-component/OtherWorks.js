import React from 'react';
import { Link } from 'react-router-dom';

import HorizontalLine from './HorizontalLine';
import Table from './Table';

const OtherWorks = (props) => {
    const pendingCPV=[['Patiala BO','Feb-2022'],['Chityala BO', 'Apr-2022'],['Pasupula BO','Sept-2022']]

    return <div className="card col-12 col-md-12 col-lg-5 mx-auto mt-3 mt-lg-0">
        <h5 className="card-header">Other Works</h5>
        <div className="card-body">
            <h5 className="card-title">eMO Verification</h5>
            <p className="card-text">25 eMO Verification of the month</p>

            <Link to="/EMOPrep" className="btn btn-primary">Lets Prepare<i class="fa fa-chevron-right mx-2" aria-hidden="true"></i></Link>
            <HorizontalLine lineno={2}/>
            <h5 className="card-title">Cent% Verification</h5>
            <p className="card-text">Pending Cent% Verification</p>
            <Table heading={['Office Name','Due Date']} body={pendingCPV}/>
            <Link to="#" className="btn btn-primary">Lets Prepare<i class="fa fa-chevron-right mx-2" aria-hidden="true"></i></Link>
        </div>
    </div>;
};

export default OtherWorks;
