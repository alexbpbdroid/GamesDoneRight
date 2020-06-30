class AddColumnsGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :works_on, :string
  end
end
