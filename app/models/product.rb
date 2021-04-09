class Product < ApplicationRecord
  validates :name, :type, :description, :price, :discount, :seller_id, presence: true

  belongs_to :seller,
    foreign_key: :seller_id,
    class_name: 'User'

  has_one_attached :image
end
