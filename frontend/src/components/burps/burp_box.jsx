import React from 'react';
import './burps.css';
import avatars from '../../images/avatars';
import { Link } from 'react-router-dom';

const BurpBox = (props) => {
  if (!props) return null;

  return (
    <div className="burpbox">
      <div className="burp-author">
        <div>
          <Link to={`/profile/${props.owner._id}`}>
            <img src={avatars[props.avatar]} height="40px" width="40px" alt="" />
          </Link>
        </div>
        <div>{props.author}</div>
      </div>
      <div className="burps">{props.text}</div>
    </div>
  );
}


export default BurpBox;