import { connect } from "react-redux";
import EditProfileForm from './edit_profile_form';
import { updateUser, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    burps: state.burps.user,
    currentUser: state.session.user,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (userData) => dispatch(updateUser(userData)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
