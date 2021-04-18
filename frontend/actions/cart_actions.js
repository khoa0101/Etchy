import * as CartAPIUtil from '../util/cart_api_util';

export const RECEIVE_CARTS = 'RECEIVE_CARTS';
export const REMOVE_CART = 'REMOVE_CART';

const receiveCarts = (carts) => {
  return {
    type: RECEIVE_CARTS,
    carts
  }
}
