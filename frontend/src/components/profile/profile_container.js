import { connect } from 'react-redux';
import { fetchBurps, removeBurp } from "../../actions/burp_actions";
import Profile from './profile';
import { getUserBurps } from '../../reducers/selectors';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    return {
      burps: getUserBurps(state.burps, ownProps.match.params.user_id),
      users: state.users,
      owner: state.users[ownProps.match.params.user_id],
      ownerId: ownProps.match.params.user_id,
      currentUser: state.users[state.session.currentUser],
      currentUserId: state.session.currentUser,
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
