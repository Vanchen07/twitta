import React from 'react';
import './main_page.css';
import TweetsContainer from '../tweets/tweets_container';


class MainPage extends React.Component {

    render() {
        return (
            <div className="main-page">
                    {/* See what’s burping in the world right now
                    Follow your cravings.
                    Hear what people are drooling about.
                    Join the conversation.
                    Make a burp! */}
                    <TweetsContainer />
            </div>
        );
    }
}

export default MainPage;