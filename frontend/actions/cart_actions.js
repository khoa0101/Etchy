import * as CartAPIUtil from '../util/cart_api_util';

export const RECEIVE_CART = 'RECEIVE_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const RECEIVE_CART_ERRORS = 'RECEIVE_CART_ERRORS';

const receiveCart = (cart) => {
  return {
    type: RECEIVE_CART,
    cart
  }
}

const removeCart = (cartId) => {
  return {
    type: REMOVE_CART,
    cartId
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_CART_ERRORS,
    errors
  }
}

export const addToCart = (cart) => dispatch => {
  return CartAPIUtil.addToCart(cart)
    .then(cart => dispatch(receiveCart(cart)),
      err => dispatch(receiveErrors(err.responseJSON)))
}

export const editCart = (cart) => dispatch => {
  return CartAPIUtil.editCart(cart)
    .then(cart => dispatch(receiveCart(cart)),
      err => dispatch(receiveErrors(err.responseJSON)))
}

export const deleteCart = (cartId) => dispatch => {
  return CartAPIUtil.deleteCart(cartId)
    .then(() => dispatch(removeCart(cartId)))
}
