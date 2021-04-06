import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mSTP = ({ session }) => {
  return {
    currentUser: session.currentUser
  }
}

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)) 
  }
}

export default connect(mSTP, mDTP)(Greeting);