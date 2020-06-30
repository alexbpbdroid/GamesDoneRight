# == Schema Information
#
# Table name: games
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  price        :integer          default(0)
#  description  :text
#  release_date :string
#  developer    :string
#  publisher    :string
#  esrb_rating  :string
#  index        :integer
#


class Game < ApplicationRecord

  validates :title, presence: true

  has_many_attached :photos
  
end


#     t.string "title", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.integer "price", default: 0
#     t.text "description"
#     t.string "release_date"
#     t.string "developer"
#     t.string "publisher"
#     t.string "esrb_rating"
#     t.integer "index"
