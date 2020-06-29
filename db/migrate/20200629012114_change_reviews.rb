class ChangeReviews < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :review_id, :game_id
  end
end
