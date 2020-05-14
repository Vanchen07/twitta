import React from 'react';
import { withRouter } from 'react-router-dom';
import UserTweet from './user_tweets';
// import TweetComposeContainer from '../tweets/tweet_compose_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: []
        }
    }

    // UNSAFE_componentWillMount() {
    //     // console.log(this.props.currentUser.id)
    //     this.props.fetchUserTweets(this.props.currentUser.id);
    // }

    componentDidMount() {
        this.props.fetchUserTweets(this.props.currentUser.id);
    }

    UNSAFE_componentWillReceiveProps(newState) {
        this.setState({ tweets: newState.tweets });
    }

    render() {
        if (this.state.tweets.length === 0) {
            // return (<div>This user has no Tweets</div>)
            return null;
        } else {
            return (
              <div>
                {/* <TweetComposeContainer {...this.props} /> */}
                <h2>{`All of your Tweets`}</h2>
                {this.props.tweets.map(tweet => (
                    <UserTweet key={tweet._id} tweet={tweet} text={tweet.text} removeTweet={this.props.removeTweet} />
                ))}
              </div>
            );
        }
    }
}

export default withRouter(Profile);