export const fetchProducts = () => (
  $.ajax({
    url: '/api/products',
  })
)

export const fetchProduct = (productId) => (
  $.ajax({
    url: `/api/products/${productId}`
  })
)



