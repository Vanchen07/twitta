import React from 'react';
import meat_bun from '../../images/meat_bun.png';
import spring_rolls from '../../images/spring_rolls.png';
import onigiri from '../../images/onigiri.png';

const Splashbody = () => {
  return (
    <div className="splash-body">
      <div className="splash-body-p">
        <article>
          Ever have those moments where you have random cravings, 
          or after you've watched a food video and that's all you can think about?
          Burps is the app for you to record those random food thoughts!
        </article>
        <img src={meat_bun} alt=""></img>
      </div>

      <div className="splash-body-p">
        <article>
          With Burps, you can easily create a burp, look at what other's using this
          app are thinking about as well! 
        </article>
        <img src={onigiri} alt=""></img>
      </div>

      <div className="splash-body-p">
        <article>
          Create a profile, add a burb so others can get to know you a little 
          as well! You can set your location, share you favorite foods, and meet
          others who crave tasty food just as much as you do!
        </article>
        <img src={spring_rolls} alt=""></img>
      </div>
    </div>
  );
};

export default Splashbody;
