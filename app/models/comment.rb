class Comment < ApplicationRecord
  validates :, :product_id, :quantity, presence: true
  validates :quantity, numericality: { greater_than: 0 }

  belongs_to :buyer,
    foreign_key: :buyer_id,
    class_name: 'User'

  belongs_to :product,
    foreign_key: :product_id,
    class_name: 'Product'
end