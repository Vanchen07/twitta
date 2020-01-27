import React from 'react';
import './tweets.css';

const TweetBox = (props) => {
    return (
      <div className="tweetbox">
        <div className="tweets">{props.text}</div>
        <div className="tweets">{props.author}</div>
      </div>
    );
}


export default TweetBox;