import axios from 'axios';

export const getTweets = () => { //get all tweets
    return axios.get('/api/tweets/')
};

export const getUserTweets = id => { //get tweets for a user
    return axios.get(`/api/tweets/user/${id}`)
};

export const writeTweet = data => { //create a tweet
    return axios.post('/api/tweets/', data)
}

export const deleteTweet = id => { //delete a tweet
    return axios.delete(`/api/tweets/${id}`)
}

