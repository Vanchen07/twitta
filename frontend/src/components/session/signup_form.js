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
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history)
    }

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
                        Already have an account? <Link to='/login'>Log in!</Link>
                        </div>
                    </div>

                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-header">
                            <Link to='/'>
                                <img src={rice}></img>
                            </Link>
                            <h1>
                                Ready to Join us?
                            </h1>
                        </div>
                        <div className="input-wrapper">
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                            />
                            <br />
                            <input type="text"
                                value={this.state.handle}
                                onChange={this.update('handle')}
                                placeholder="Handle"
                            />
                            <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                            <br />
                            <input type="password"
                                value={this.state.password2}
                                onChange={this.update('password2')}
                                placeholder="Confirm Password"
                            />
                            <br />
                            <input type="submit" value="Submit" />
                            {this.renderErrors()}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignupForm);