@libraries.each do |library|
  json.set! library.id do
    json.extract! library, :id, :user_id, :game_id, :saved
  end
end