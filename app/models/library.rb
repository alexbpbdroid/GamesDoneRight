class Library < ApplicationRecord
  validates :user_id, uniqueness: {
    scope: :game_id,
    message: "Game is already in library"
  }

  belongs_to :user
  
  belongs_to :game
end
