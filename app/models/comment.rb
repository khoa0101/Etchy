class Comment < ApplicationRecord
  validates :author_id, :product_id, :rating, :body, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :product,
    foreign_key: :product_id,
    class_name: 'Product'
end