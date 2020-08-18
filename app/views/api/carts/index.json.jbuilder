@carts.each do |cart|
  json.set! cart.id do
    json.extract! cart, :id, :user_id, :game_id, :saved
  end
end