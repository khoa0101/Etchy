export const fetchCarts = () => (
  $.ajax({
    url: '/api/carts'
  })
)

export const addToCart = (cart) => (
  $.ajax({
    url: '/api/carts',
    method: 'POST',
    data: { cart }
  })
)

export const editCart = (cart) => (
  $.ajax({
    url: `/api/carts/${cart.id}`,
    method: 'PATCH',
    data: { cart }
  })
)

export const deleteCart = (cartId) => (
  $.ajax({
    url: `/api/carts/${cartId}`,
    method: 'DELETE'
  })
)