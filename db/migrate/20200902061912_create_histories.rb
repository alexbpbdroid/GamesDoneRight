class CreateHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :histories do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.boolean :saved, null: false
      t.timestamps
    end
    add_index :histories, [:game_id, :user_id], unique: true
  end
end
