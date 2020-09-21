import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import Footer from '../footer/footer';
import Splashbody from './splashbody';
import './splash.css';

class Splash extends React.Component {

  render () {
    return (
      <div className="splash">
        <NavBarContainer />
        {/* <div className="splash-container"> */}
          <Splashbody />
        {/* </div> */}
        <Footer />
      </div>
    );
  }
}

export default Splash;