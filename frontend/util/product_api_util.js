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

// export const createProduct = (product) => (
//   $.ajax({
//     url: `/api/products`,
//     method: `POST`,
//     data: { product } 
//   })
// )


