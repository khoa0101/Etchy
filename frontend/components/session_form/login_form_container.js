import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions'; 
import SessionForm from './session_form';

const mSTP = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Login',
  }
};

const mDTP = (dispatch) => {
  return {
    action: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={ () => {
        dispatch(closeModal());
        dispatch(openModal('Signup'))}}>
        Register
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mSTP, mDTP)(SessionForm);