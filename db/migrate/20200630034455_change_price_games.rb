class ChangePriceGames < ActiveRecord::Migration[5.2]
  def change
    change_column :games, :price, :float
  end
end
