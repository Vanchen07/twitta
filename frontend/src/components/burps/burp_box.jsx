import React from 'react';
import './burps.css';
import beagle from "../../images/beagle.png";
import chihuahua from "../../images/chihuahua.png";
import corgi from "../../images/corgi.png";
import husky from "../../images/husky.png";
import default_avatar from "../../images/default_avatar.png";

const BurpBox = (props) => {
  const avatars = { default_avatar, beagle, chihuahua, corgi, husky };
  
  return (
    <div className="burpbox">
      <div className="burp-author">
        <div>
          <img src={avatars[props.avatar]} height="40px" width="40px" alt="" />
        </div>
        <div>{props.author}</div>
      </div>
      <div className="burps">{props.text}</div>
    </div>
  );
}


export default BurpBox;