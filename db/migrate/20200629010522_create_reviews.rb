class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.integer :author_id
      t.integer :review_id
      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :review_id
  end
end
