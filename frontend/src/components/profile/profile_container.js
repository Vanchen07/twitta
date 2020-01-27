import { connect } from 'react-redux';
import { fetchUserTweets, removeTweet } from '../../actions/tweet_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        tweets: Object.values(state.tweets.user),
        old: state.tweets.old,
        new: state.tweets.new,
        user: Object.values(state.tweets.user),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserTweets: id => dispatch(fetchUserTweets(id)),
        removeTweet: (id) => dispatch(removeTweet(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
