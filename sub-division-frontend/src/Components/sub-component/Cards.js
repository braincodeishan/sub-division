import React from 'react';
import { Link } from 'react-router-dom';
import HorizontalLine from './HorizontalLine';

const Cards = (props) => {

  const finalclasses="card mx-auto"+props.classes
  return <div className={finalclasses}>
  <h5 className="card-header">{props.header}</h5>
  <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>

      <Link to={props.button} className="btn btn-primary">{props.buttontext}<i class="fa fa-chevron-right mx-2" aria-hidden="true"></i></Link>
      
      
  </div>
</div>;
};

export default Cards;
