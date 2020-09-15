import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './session.css';
import menu from '../../images/menu.png';
import rice from '../../images/rice.png';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let handle;
        let avatar = 'default_avatar';
        
        if (this.state.handle) {
            let first = this.state.handle[0].toUpperCase();
            handle = first + this.state.handle.slice(1);
        } else {
            handle = this.state.handle;
        }

        let user = {
            email: this.state.email,
            handle: handle,
            password: this.state.password,
            avatar: avatar
        };

        this.props.signup(user)
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.props.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
          <div className="form-wrapper">
            <div className="form-container">
              <div className="form-image">
                <img src={menu} alt="menu"></img>
                <div>
                  Already have an account? <Link to="/login">Log in!</Link>
                </div>
              </div>

              <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-header">
                  <Link to="/">
                    <img src={rice} alt="rice"></img>
                  </Link>
                  <h1>Ready to Join us?</h1>
                </div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                  />
                  <br />
                  <input
                    type="text"
                    value={this.state.handle}
                    onChange={this.update("handle")}
                    placeholder="Handle"
                  />
                  <br />
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                  />
                  <br />
                  <input type="submit" value="Join!" />
                  {this.renderErrors()}
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default withRouter(SignupForm);