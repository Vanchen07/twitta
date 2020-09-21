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

  componentDidUpdate(prevProps) {
    if (this.props.match.params.user_id !== prevProps.match.params.user_id) {
      this.props.fetchBurps();
    } 
  }

  showEdit() {
    if (this.props.ownerId === this.props.currentUserId) {
      return (
        <Link to={`/profile/${this.props.currentUserId}/edit`}>
          <i className="fas fa-user-edit"></i>
        </Link>
      );
    } else {
      return null;
    }
  }

  showBurpCompose() {
    if (this.props.ownerId === this.props.currentUserId) {
      return <BurpCompose />;
    } else {
      return null
    }
  }

  render() {
    let userBurps;

    if (!this.props.burps) {
      return null;
    } else if (Object.values(this.props.users).length === 0) {
      return null;
    } else {
      // debugger
      userBurps = this.props.burps.map((burp) => {

        return (
          <UserBurp
            key={burp._id}
            text={burp.text}
            burp={burp}
            owner={this.props.owner}
            avatar={this.props.owner.avatar}
            handle={this.props.owner.handle}
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
              <img src={avatars[this.props.owner.avatar]} alt=""></img>
              {this.showEdit()}
            </div>
            <div className="profile-bio">
              <div>{`Handle: ${this.props.owner.handle}`}</div>
              <div>{`Blurb: ${this.props.owner.blurb}`}</div>
              <div>{`Favorite Foods: ${this.props.owner.favoriteFoods}`}</div>
              <div>
                <i className="fas fa-map-marker-alt"></i>
                {`${this.props.owner.location}`}
              </div>
            </div>
          </div>
          <div className="profile-bottom">
            {this.showBurpCompose()}
            <h2>{`${this.props.owner.handle}'s`} Burps</h2>
            {userBurps}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);