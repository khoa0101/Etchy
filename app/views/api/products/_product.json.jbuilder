json.extract! product, :id, :name, :description, :sales, :price, :discount, :quantity, :seller
json.imageUrl url_for(product.image)
