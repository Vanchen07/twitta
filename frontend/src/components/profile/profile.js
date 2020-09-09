import React from 'react';
import { withRouter } from 'react-router-dom';
import UserBurp from './user_burps';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            burps: []
        }
    }

    componentDidMount() {
        this.props.fetchUserBurps(this.props.currentUser.id);
    }

    UNSAFE_componentWillReceiveProps(newState) {
        this.setState({ burps: newState.burps });
    }

    render() {
        if (this.state.burps.length === 0) {
            return null;
        } else {
            return (
              <div>
                <h2>{`All of your Burps`}</h2>
                {this.props.burps.map((burp) => (
                  <UserBurp
                    key={burp._id}
                    burp={burp}
                    text={burp.text}
                    currentUser={this.props.currentUser}
                    fetchUserBurps={this.props.fetchUserBurps}
                    removeBurp={this.props.removeBurp}
                  />
                ))}
              </div>
            );
        }
    }
}

export default withRouter(Profile);