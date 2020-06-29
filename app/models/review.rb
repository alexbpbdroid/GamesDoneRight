class Review < ApplicationRecord

  validates :body, :author_id, :game_id, presence: true

  belongs_to :user,
    foreign_key: :author_id

  belongs_to :game,
    foreign_key: :game_id

end
