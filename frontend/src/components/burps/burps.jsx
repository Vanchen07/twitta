import React from 'react';
import { withRouter } from 'react-router-dom';
import BurpBox from './burp_box';

class Burp extends React.Component {

    componentDidMount() {
        this.props.fetchBurps();
        this.props.fetchUsers();
    }

    render() {
        let allBurps;

        if (!this.props.burps ) {
            return null;
        } else if (!this.props.users) {
            return null;
        } else {
            allBurps = this.props.burps.map((burp) => {
              let userId = burp.user;
              let user = this.props.users[userId];

              return (
                <BurpBox
                  key={burp._id}
                  text={burp.text}
                  avatar={user.avatar}
                  author={user.handle}
                />
              );
            });
        }

        return (
            <div className="all-burps">
                {allBurps}
            </div>
        );
    }
}

export default withRouter(Burp);