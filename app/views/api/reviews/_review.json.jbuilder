json.extract! review, :id, :body, :author_id, :game_id
json.username review.user.username
json.user_id review.user.id