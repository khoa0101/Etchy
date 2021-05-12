export const addToCart = (cart) => (
  $.ajax({
    url: '/api/carts',
    method: 'POST',
    data: { cart }
  })
)

export const editCart = (cart) => {
  console.log(cart);
  return $.ajax({
    url: `/api/cart/${cart.id}`,
    method: 'PATCH',
    data: { cart }
  })
}

export const deleteCart = (cartId) => (
  $.ajax({
    url: `/api/cart/${cartId}`,
    method: 'DELETE'
  })
)