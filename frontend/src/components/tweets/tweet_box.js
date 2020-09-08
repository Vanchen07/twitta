import React from 'react';
import './tweets.css';

const TweetBox = (props) => {
    return (
      <div className="tweetbox">
        <div >{props.author}</div>
        <div className="tweets">{props.text}</div>      
      </div>
    );
}


export default TweetBox;