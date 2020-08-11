@wishlists.each do |wishlist|
  json.set! wishlist.id do
    json.extract! wishlist, :id, :user_id, :game_id, :saved
  end
end