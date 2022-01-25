import React from 'react';
import { Link } from 'react-router-dom';
import HorizontalLine from '../sub-component/HorizontalLine';

const Notfound = () => {
    return <>
    {/* <HorizontalLine/> */}
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might be in development phase or is not found or is temporarily unavailable! Stay Tuned</p>
                <Link to="/Dashboard">Go To Homepage</Link>
            </div>
        </div>
        <HorizontalLine/>
    </>;
};

export default Notfound;
