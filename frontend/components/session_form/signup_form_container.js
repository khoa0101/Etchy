import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions'; 
import SessionForm from './session_form';

const mSTP = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Login',
  }
};

const mDTP = (dispatch) => {
  return {
    action: (user) => dispatch(signup(user)),
    otherForm: null,
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mSTP, mDTP)(SessionForm);