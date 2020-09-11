import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBarContainer from '../nav/navbar_container';
// import UserBurp from './user_burps';
import default_avatar from "../../images/default_avatar.png";

class Profile extends React.Component {

  componentDidMount() {
      this.props.fetchUserBurps(this.props.currentUser.id);
  }

  render() {
      // if (this.props.burps.length === 0) {
      //     return 'No tweets available';
      // } 

      return (
        <div>
          <NavBarContainer />
          {`Handle: ${this.props.currentUser.handle}`}
          <img src={default_avatar} height="80px" width="80px" alt=""></img>
          {`Blurb: ${this.props.currentUser.blurb}`}
          <Link to='/profile/edit'>Edit Profile</Link>
          <h2>{`All of your Burps`}</h2>
          {/* {this.props.burps.map((burp) => (
            <UserBurp
              key={burp._id}
              burp={burp}
              text={burp.text}
              currentUser={this.props.currentUser}
              fetchUserBurps={this.props.fetchUserBurps}
              removeBurp={this.props.removeBurp}
            />
          ))} */}
        </div>
      );
  }
}

export default withRouter(Profile);