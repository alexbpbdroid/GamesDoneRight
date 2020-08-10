@games.each do |game|
  json.set! game.id do
    json.extract! game, :id, :title, :price, :description, :release_date, 
                        :developer, :publisher, :esrb_rating
    json.photoUrls game.photos.map { |file| url_for(file) }
  end
end