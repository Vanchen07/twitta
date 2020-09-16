import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import Footer from '../footer/footer';
import Splashbody from './splashbody';
import './splash.css';

const Splash = () => {
    return (
      <div className="splash">
        <NavBarContainer />
        <div className="splash-container">
          <Splashbody />
          <Footer />
        </div>
      </div>
    );
}

export default Splash;