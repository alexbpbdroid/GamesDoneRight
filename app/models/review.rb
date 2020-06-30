# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer
#  game_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord

  validates :body, :author_id, :game_id, presence: true

  belongs_to :user,
    foreign_key: :author_id

  belongs_to :game,
    foreign_key: :game_id

end
