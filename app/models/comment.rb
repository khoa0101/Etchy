class Comment < ApplicationRecord
  validates :author_id, :product_id, :quantity, presence: true
  validates :quantity, numericality: { greater_than: 0 }

  belongs_to :author_id,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :product,
    foreign_key: :product_id,
    class_name: 'Product'
end