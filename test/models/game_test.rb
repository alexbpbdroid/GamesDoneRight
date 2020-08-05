# == Schema Information
#
# Table name: games
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  price        :float            default(0.0)
#  description  :text
#  release_date :string
#  developer    :string
#  publisher    :string
#  esrb_rating  :string
#  works_on     :string
#  video        :string
#
require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
