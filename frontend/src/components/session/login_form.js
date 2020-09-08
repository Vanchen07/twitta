import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './session.css';
import menu from '../../images/menu.png';
import rice from '../../images/rice.png';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/profile');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
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
                        <img src={menu}></img>
                        <div>
                            Don't have an account? <Link to='/signup'>Join us!</Link>
                        </div>
                    </div>
                                    
                    
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-header">
                            <Link to='/'>
                                <img src={rice}></img>
                            </Link>
                            <h1>
                                Welcome Back!
                            </h1>
                        </div>
                        <div className="input-wrapper">
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                            />
                            <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                            <br />
                            <input type="submit" value="Login" />
                            {this.renderErrors()}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);