class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :game_id, null: false
      t.integer :user_id, null: false
      t.boolean :saved, null: false
      t.timestamps
    end
    add_index :carts, [:game_id, :user_id], unique: true
  end
end
