import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBarContainer from '../nav/navbar_container';
import avatars from '../../images/avatars';
import UserBurp from '../burps/user_burps';
import BurpCompose from '../burps/burp_compose_container';
import './profile.css'

class Profile extends React.Component {

  componentDidMount() {
    this.props.fetchBurps();
    this.props.fetchUsers();
  }

  render() {
    let userBurps;

    if (!this.props.burps) {
      return null;
    } else if (!this.props.currentUser) {
      return null;
    } else {
      userBurps = this.props.burps.map((burp) => {
        // console.log('userBurps',this.props.burps)
        return (
          <UserBurp
            key={burp._id}
            text={burp.text}
            burp={burp}
            currentUser={this.props.currentUser}
            avatar={this.props.currentUser.avatar}
            fetchBurps={this.props.fetchBurps}
            removeBurp={this.props.removeBurp}
          />
        );
      });
    }


    return (
      <div>
        <NavBarContainer />
        <div className="profile">
          <div className="profile-top">
            <div className="profile-img">
              <img src={avatars[this.props.currentUser.avatar]} alt=""></img>
              <Link to="/profile/edit">
                <i className="fas fa-user-edit"></i>
              </Link>
            </div>
            <div className="profile-bio">
              <div>{`Handle: ${this.props.currentUser.handle}`}</div>
              <div>{`Blurb: ${this.props.currentUser.blurb}`}</div>
              <div>{`Favorite Foods: ${this.props.currentUser.favoriteFoods}`}</div>
              <div>
                <i className="fas fa-map-marker-alt"></i>
                {`${this.props.currentUser.location}`}
              </div>
            </div>
          </div>
          <div className="profile-bottom">
            <BurpCompose />
            <h2>My Burps</h2>
            {userBurps}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);