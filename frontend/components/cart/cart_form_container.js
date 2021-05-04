import { connect } from 'react-redux';

import Cart_form from './cart_form';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    cartItem: state.entities.users[state.session.id]
  }
}

export default connect(mSTP)(Greeting);