import { connect } from "react-redux";
import EditProfileForm from './edit_profile_form'

const mapStateToProps = (state) => {
  return {
    burps: state.burps.user,
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchUserBurps: (id) => dispatch(fetchUserBurps(id)),
    // removeBurp: (id) => dispatch(removeBurp(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
