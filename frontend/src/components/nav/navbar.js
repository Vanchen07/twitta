import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
              <div className="navbar-right">
                <div className="navbar-right-items">
                  <Link to={"/"}>All Burps</Link>
                </div>
                <div className="navbar-right-items">
                  <Link to={"/new_tweet"}>New Burp</Link>
                </div>
                <div className="navbar-right-items">
                  <Link to={"/profile"}>{this.props.handle}</Link>
                </div>
                <div className="navbar-right-items">
                  <button onClick={this.logoutUser}>Logout</button>
                </div>
              </div>
            );
        } else {
            return (
                <div className="navbar-right">
                    <div className="navbar-right-items">
                    <Link to={'/signup'}>Signup</Link>
                    </div>
                    <div className="navbar-right-items">
                    <Link to={'/login'}>Login</Link>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
          <div className="navbar">
            <Link to="/">
              {/* <h1>Twitta</h1> */}
              <i className="fas fa-feather-alt fa-3x"></i>
            </Link>
            {this.getLinks()}
          </div>
        );
    }
}

export default NavBar;