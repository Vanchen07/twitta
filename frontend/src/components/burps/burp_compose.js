import React from 'react';
import { withRouter } from 'react-router-dom';

class BurpCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            newBurp: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        let burp = {
            text: this.state.text
        };

        this.props.composeBurp(burp).then(this.props.history.push("/profile"));
        this.setState({ text: '' })
    }

    update() {
        return e => this.setState({
            text: e.currentTarget.value
        });
    }

    render() {
        return (
            <div> Write a Burp here
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="textarea"
                            value={this.state.text}
                            onChange={this.update()}
                            placeholder="Write your burp..."
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
            </div>
        )
    }
}

export default withRouter(BurpCompose);