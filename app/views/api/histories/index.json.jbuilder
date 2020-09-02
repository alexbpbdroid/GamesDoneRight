@histories.each do |history|
  json.set! history.id do
    json.extract! history, :id, :user_id, :game_id, :saved
  end
end