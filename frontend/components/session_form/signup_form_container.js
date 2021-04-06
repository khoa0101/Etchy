import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions'; 
import SessionForm from './session_form';

const mSTP = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Signup',
  }
};

const mDTP = (dispatch) => {
  return {
    action: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mSTP, mDTP)(SessionForm);