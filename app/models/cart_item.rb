# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  game_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
  validates :user_id, uniqueness: { scope: :game_id,
  message: "Game is already in cart"}

  belongs_to :user,
    foreign_key: :user_id

  belongs_to :game
    foreign_key: :game_id
end
