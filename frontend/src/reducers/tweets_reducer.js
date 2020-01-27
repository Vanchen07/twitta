import { RECEIVE_TWEETS, RECEIVE_TWEET, RECEIVE_USER_TWEETS, RECEIVE_NEW_TWEET } from '../actions/tweet_actions';

const TweetsReducer = (state = { all: {}, user: {}, new: undefined, old: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_TWEETS:
        // debugger
        newState.all = action.tweets.data; //array nested under the data key under the action.tweets key
        return newState;
      case RECEIVE_USER_TWEETS:
        newState.user = action.tweets.data;
        return newState;
      case RECEIVE_NEW_TWEET:
        newState.new = action.tweet.data;
        return newState;
      case RECEIVE_TWEET: //use for delete action
        newState.old = action.tweet.data;
        return newState;
      default:
        return state;
    }
};

export default TweetsReducer;