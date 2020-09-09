import React from 'react';
import './burps.css';

const BurpBox = (props) => {
    return (
      <div className="burpbox">
        <div >{props.author}</div>
        <div className="burps">{props.text}</div>      
      </div>
    );
}


export default BurpBox;