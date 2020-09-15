import { connect } from 'react-redux';
import { fetchUserBurps, composeBurp } from "../../actions/burp_actions";
import BurpCompose from './burp_compose';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newBurp: state.burps.new,
    };
};

const mapDispatchToProps = dispatch => {
    return {
      composeBurp: (data) => dispatch(composeBurp(data)),
      fetchUserBurps: (id) => dispatch(fetchUserBurps(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurpCompose);