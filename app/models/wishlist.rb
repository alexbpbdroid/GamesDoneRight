# == Schema Information
#
# Table name: wishlists
#
#  id         :bigint           not null, primary key
#  game_id    :integer          not null
#  user_id    :integer          not null
#  saved      :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Wishlist < ApplicationRecord
  validates :game_id, :user_id, presence: true
  validates :saved, inclusion: {in: [true, false]}

  belongs_to :user,
    foreign_key: :user_id

  belongs_to :game,
    foreign_key: :game_id
end
