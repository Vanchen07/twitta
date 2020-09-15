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
          <div className="burp-compose-wrapper">
              <div className="burp-compose-inputs">
                <input
                  type="textarea"
                  value={this.state.text}
                  onChange={this.update()}
                  placeholder="What's burping...?"
                />
                <button onClick={this.handleSubmit}>Burp!</button>
              </div>
          </div>
        );
    }
}

export default withRouter(BurpCompose);