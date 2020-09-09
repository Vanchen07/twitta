import { connect } from 'react-redux';
import { fetchBurps } from '../../actions/burp_actions';
import Burps from './burps';

const mapStateToProps = (state) => {
    return {
        burps: Object.values(state.burps.all), 
        user: Object.values(state.burps.user), 
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBurps: () => dispatch(fetchBurps()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Burps);