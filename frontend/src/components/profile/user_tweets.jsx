import React from 'react';
import { withRouter } from 'react-router-dom';

class UserTweet extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props
          .removeTweet(this.props.tweet._id)
          .then(() => this.props.fetchUserTweets(this.props.currentUser.id));
    }

    render() {
        return (
            <div>
                {this.props.text}
                <button onClick={this.handleClick}>Delete Tweet</button>
            </div>
        )
    }
    
}

export default withRouter(UserTweet);