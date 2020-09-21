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
        } else if (Object.values(this.props.users).length === 0) {
          // debugger
            return null;
        } else {
          // debugger
            allBurps = this.props.burps.map((burp) => {
              let userId = burp.user;
              let user = this.props.users[userId];

              return (
                <BurpBox
                  key={burp._id}
                  text={burp.text}
                  user = {user}
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