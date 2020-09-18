import { connect } from 'react-redux';
import { fetchBurps, removeBurp } from "../../actions/burp_actions";
import Profile from './profile';
import { getUserBurps } from '../../reducers/selectors';

const mapStateToProps = (state) => {
    return {
        burps: getUserBurps(state),
        currentUser: state.users[state.session.currentUser]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBurps: () => dispatch(fetchBurps()),
        removeBurp: (id) => dispatch(removeBurp(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
