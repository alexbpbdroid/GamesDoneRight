json.extract! @game, :id, :title, :price, :description, :release_date, 
:developer, :publisher, :esrb_rating, :works_on, :video

json.photoUrls @game.photos.map { |file| url_for(file) }