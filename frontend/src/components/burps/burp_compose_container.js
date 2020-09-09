import { connect } from 'react-redux';
import { composeBurp } from '../../actions/burp_actions';
import BurpCompose from './burp_compose';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newBurp: state.burps.new,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        composeBurp: data => dispatch(composeBurp(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurpCompose);