import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

const receiveProducts = (products) => {
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}

const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product
  }
}

export const requestProducts = () => dispatch => {
  return ProductAPIUtil.fetchProducts()
    .then(products => dispatch(receiveProducts(products)))
}

export const requestProduct = (productId) => dispatch => {
  return ProductAPIUtil.fetchProduct(productId)
    .then(product => dispatch(receiveProduct(product)))
}
