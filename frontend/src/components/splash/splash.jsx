import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import Footer from '../footer/footer';
import './splash.css';

const Splash = () => {
    return (
      <div className="splash">
        <NavBarContainer />
        <div className="splash-container">
          <div className="splash-body">Splash body</div>
          <Footer />
        </div>
      </div>
    );
}

export default Splash;