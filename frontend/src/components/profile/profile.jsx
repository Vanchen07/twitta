import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBarContainer from '../nav/navbar_container';
import UserBurp from '../burps/user_burps'
import beagle from "../../images/beagle.png";
import chihuahua from "../../images/chihuahua.png";
import corgi from "../../images/corgi.png";
import husky from "../../images/husky.png";
import default_avatar from "../../images/default_avatar.png";
import BurpCompose from '../burps/burp_compose_container';
import './profile.css'

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.avatars = { default_avatar, beagle, chihuahua, corgi, husky };
  }

  componentDidMount() {
    this.props.fetchUserBurps(this.props.currentUser.id);
  }

  render() {
    let userBurps;

    if (this.props.burps.length === 0) {
      return null;
    } else {
      userBurps = this.props.burps.user.map((burp) => {
        return (
          <UserBurp
            key={burp._id}
            text={burp.text}
            burp={burp}
            avatar={this.props.currentUser.avatar}
            fetchUserBurps={this.props.fetchUserBurps}
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
              <img src={this.avatars[this.props.currentUser.avatar]} alt=""></img>
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