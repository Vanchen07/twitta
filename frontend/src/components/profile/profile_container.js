import { connect } from 'react-redux';
import { fetchBurps, removeBurp } from "../../actions/burp_actions";
import Profile from './profile';
import { getUserBurps } from '../../reducers/selectors';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => {
    return {
        burps: getUserBurps(state),
        users: state.users,
        currentUser: state.users[state.session.currentUser],
        currentUserId: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBurps: () => dispatch(fetchBurps()),
        removeBurp: (id) => dispatch(removeBurp(id)),
        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
