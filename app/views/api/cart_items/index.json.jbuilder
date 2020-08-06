json.games do
  @cart_games.each do |game|
    json.set! game.id do
      json.extract! game, :id, :title, :price, :description, :release_date, 
                          :developer, :publisher, :esrb_rating, :works_on, :video
      json.photoUrls game.photos.map { |file| url_for(file) }
    end
  end
end

json.cart_items do
  @cart_items.each do |cart_item|
    json.set! cart_item.id do
      json.extract! cart_item, :id, :game_id
    end
  end
end