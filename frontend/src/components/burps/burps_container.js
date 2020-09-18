import { connect } from 'react-redux';
import { fetchBurps } from '../../actions/burp_actions';
import { fetchUsers } from '../../actions/user_actions';
import Burps from './burps';

const mapStateToProps = (state) => {
    return {
        burps: Object.values(state.burps), 
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchBurps: () => dispatch(fetchBurps()),
      fetchUsers: () => dispatch(fetchUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Burps);