import React from 'react';
import { withRouter } from 'react-router-dom';
import BurpBox from './burp_box';

class UserBurp extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props
          .removeBurp(this.props.burp._id)
          .then(() => this.props.fetchBurps());
    }

    showDelete() {
       if (this.props.ownerId === this.props.currentUserId) {
         return (
           <div className="user-burps-icon">
             <i onClick={this.handleClick} className="far fa-trash-alt"></i>
           </div>
         );
       } else {
         return null;
       }
    }

    render() {
        return (
          <div className="user-burps-container">
            <BurpBox {...this.props} />
            {this.showDelete()}
          </div>
        );
    }
    
}

export default withRouter(UserBurp);