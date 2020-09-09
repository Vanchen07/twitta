import { connect } from 'react-redux';
import { fetchUserBurps, removeBurp} from '../../actions/burp_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        burps: Object.values(state.burps.user),
        old: state.burps.old,
        new: state.burps.new,
        user: Object.values(state.burps.user),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserBurps: id => dispatch(fetchUserBurps(id)),
        removeBurp: (id) => dispatch(removeBurp(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
