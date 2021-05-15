json.extract! cart, :id, :quantity, :buyer, :product
json.imageUrl url_for(cart.product.image)