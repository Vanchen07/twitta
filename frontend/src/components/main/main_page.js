import React from 'react';
import './main_page.css';
import TweetsContainer from '../tweets/tweets_container';


class MainPage extends React.Component {

    render() {
        return (
            <div className="main-page">
                    See what’s happening in the world right now
                    Follow your interests.
                    Hear what people are talking about.
                    Join the conversation.
                    <TweetsContainer />
            </div>
        );
    }
}

export default MainPage;