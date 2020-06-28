class GamesChanges < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :price, :integer, default: 0
    add_column :games, :description, :text
    add_column :games, :release_date, :string
    add_column :games, :developer, :string
    add_column :games, :publisher, :string
    add_column :games, :esrb_rating, :string
  end
end
