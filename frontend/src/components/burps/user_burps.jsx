import React from 'react';
import { withRouter } from 'react-router-dom';

class UserBurp extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props
          .removeBurp(this.props.burp._id)
          .then(() => this.props.fetchUserBurps(this.props.currentUser.id));
    }

    render() {
        return (
            <div>
                {this.props.text}
                <button onClick={this.handleClick}>Delete Burp</button>
            </div>
        )
    }
    
}

export default withRouter(UserBurp);