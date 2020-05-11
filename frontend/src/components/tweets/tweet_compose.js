import React from 'react';
import { withRouter } from 'react-router-dom';
import UserTweet from '../profile/user_tweets';

class TweetCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            newTweet: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     this.setState({ newTweet: nextProps.newTweet.text });
    // }

    handleSubmit(e) {
        e.preventDefault();
        let tweet = {
            text: this.state.text
        };

        this.props.composeTweet(tweet);
        this.setState({ text: '' })
    }

    update() {
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    render() {
        return (
            <div> Write a Tweet here
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="textarea"
                            value={this.state.text}
                            onChange={this.update()}
                            placeholder="Write your tweet..."
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
                <UserTweet text={this.state.newTweet} {...this.props}/>
            </div>
        )
    }
}

export default withRouter(TweetCompose);