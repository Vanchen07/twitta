import { connect } from "react-redux";
import EditProfileForm from './edit_profile_form';
import { clearErrors } from '../../actions/session_actions';
import { modifyUser } from  '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.users[state.session.currentUser],
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modifyUser: (userData) => dispatch(modifyUser(userData)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
