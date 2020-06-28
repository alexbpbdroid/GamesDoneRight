export const fetchGames = data => (
  $.ajax({
    method: 'GET',
    url: 'api/games',
    data
  })
)

export const fetchGame = id => (
  $.ajax({
    method: 'GET',
    url: `api/games/${id}`
  })
)
