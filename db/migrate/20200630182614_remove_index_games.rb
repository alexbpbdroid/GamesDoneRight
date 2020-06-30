class RemoveIndexGames < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :index, :integer
  end
end
