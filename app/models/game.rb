# == Schema Information
#
# Table name: games
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class Game < ApplicationRecord

  validates :title, presence: true

  has_many_attached :photos
  
end
