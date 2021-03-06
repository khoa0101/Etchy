import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer  from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import CheckoutMessage from '../cart/checkout_message';

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }
  let component;
  switch(modal){
    case 'Login':
      component = <LoginFormContainer />;
      break;
    case 'Signup':
      component = <SignupFormContainer />;
      break;
    case 'SignInMessage':
      component = <h1 className="sign-in-please">Please sign in!</h1>;
      break;
    case 'CheckoutMessage':
      component = <CheckoutMessage />;
      break;
    default: return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div onClick={closeModal} className="close-x">×</div>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};

const mSTP = (state) => {
  return {
    modal: state.ui.modal
  };
};
const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);