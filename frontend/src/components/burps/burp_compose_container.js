import { connect } from 'react-redux';
import { fetchBurps, composeBurp } from "../../actions/burp_actions";
import BurpCompose from './burp_compose';

// const mapStateToProps = (state) => {
//     return {
//         currentUser: state.session.user,
//     };
// };

const mapDispatchToProps = dispatch => {
    return {
      composeBurp: (data) => dispatch(composeBurp(data)),
      fetchBurps: () => dispatch(fetchBurps()),
    };
};

export default connect(null, mapDispatchToProps)(BurpCompose);