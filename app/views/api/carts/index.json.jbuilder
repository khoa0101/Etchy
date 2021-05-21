@carts.each do |cart|
  json.set! cart.id do
    json.partial! 'cart', cart: cart
  end
end