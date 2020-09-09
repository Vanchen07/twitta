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
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
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
            password: this.state.password
        };

        this.props.login(user).then(() => this.props.history.push('/main'))
    }


    demoEmail(email, intervalSpeed) {
        let i = 0;

        setInterval(() => {
            if (i <= email.length) {
                this.setState({ email: email.slice(0, i) })
                i++
            } else {
                clearInterval()
            }
        }, intervalSpeed);
    }

    demoPassword(password, intervalSpeed) {
        let j = 0;

        setInterval(() => {
            if (j <= password.length) {
                this.setState({ password: password.slice(0, j) })
                j++
            } else {
                clearInterval();
            }
        }, intervalSpeed);
    }

    demo(user) {
        const intervalSpeed = 75;
        const { email, password } = user;
        const demoEmailTime = email.length * intervalSpeed;
        const demoPasswordTime = password.length * intervalSpeed;
        const buffer = intervalSpeed * 2;
        const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;

        this.demoEmail(email, intervalSpeed);
        setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);

        setTimeout(() => this.props.login(user), totalDemoTime)

        setTimeout(() => this.props.history.push('/main'), totalDemoTime + buffer)
    }

    handleDemo(e) {
        e.preventDefault();
        const user = { email: 'demo@demo.com', password: '123456' };
        this.demo(user)
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
                            Don't have an account? <Link to='/signup'>Join us!</Link>
                        </div>
                    </div>
                                    
                    
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-header">
                            <Link to='/'>
                                <img src={rice} alt="rice"></img>
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
                            <br/>
                            <button className="demo-button" onClick={this.handleDemo}>Demo Login</button>
                            <br/>
                            {this.renderErrors()}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);