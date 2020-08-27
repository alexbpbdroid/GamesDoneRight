class CreateLibraries < ActiveRecord::Migration[5.2]
  def change
    create_table :libraries do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.boolean :saved, null: false
      t.timestamps
    end
    add_index :libraries, [:game_id, :user_id], unique: true
  end
end
