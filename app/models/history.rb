class History < ApplicationRecord
  validates :game_id, :user_id, presence: true
  validates :saved, inclusion: {in: [true, false]}

  belongs_to :user,
    foreign_key: :user_id

  belongs_to :game,
    foreign_key: :game_id
end
