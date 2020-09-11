import { connect } from 'react-redux';
import { fetchUserBurps, removeBurp} from '../../actions/burp_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        burps: state.burps.user,
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
