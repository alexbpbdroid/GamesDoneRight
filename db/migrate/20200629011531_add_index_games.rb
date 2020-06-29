class AddIndexGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :index, :integer
  end
end
