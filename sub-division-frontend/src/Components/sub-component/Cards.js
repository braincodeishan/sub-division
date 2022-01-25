import React from 'react';
import { Link } from 'react-router-dom';
import HorizontalLine from './HorizontalLine';

const Cards = (props) => {

  const finalclasses="card "+props.classes
  return <div className={finalclasses}>
  <h5 className="card-header">{props.header}</h5>
  <div className="card-body">
    {props.text.map((text,index)=>{
      return(<>
      {(index>0)?<HorizontalLine/>:<></>}
      <h5 className="card-title">{props.title[index]}</h5>
      <p className="card-text">{text}</p>
      <Link to={props.button[0]} className="btn btn-primary">{props.buttontext[index]}<i class="fa fa-chevron-right mx-2" aria-hidden="true"></i></Link>
      </>)
    })}
      

      
      
      
  </div>
</div>;
};

export default Cards;
