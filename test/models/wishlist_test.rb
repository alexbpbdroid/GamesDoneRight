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
require 'test_helper'

class WishlistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
