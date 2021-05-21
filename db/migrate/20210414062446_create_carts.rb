class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :quantity, null: false
      t.integer :product_id, null: false
      t.integer :buyer_id, null: false

      t.timestamps
    end
    add_index :carts, :product_id
    add_index :carts, :buyer_id
  end
end
