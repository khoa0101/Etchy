json.extract! product, :id, :name, :description, :price, :discount, :quantity, :seller_id
json.imageUrl url_for(product.image)
