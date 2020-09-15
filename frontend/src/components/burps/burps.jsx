import React from 'react';
import { withRouter } from 'react-router-dom';
import BurpBox from './burp_box';

class Burp extends React.Component {

    componentDidMount() {
        this.props.fetchBurps();
    }


    render() {
        if (!this.props.burps.length === 0) {
            return (<div>There are no Burps</div>)
        } else {
            return (
                <div className="all-burps">
                    {this.props.burps.map(burp => (
                        <BurpBox key={burp._id} text={burp.text} avatar={burp.user.avatar} author={burp.user.handle} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Burp);