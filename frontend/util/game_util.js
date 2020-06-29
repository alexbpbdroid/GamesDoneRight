export const fetchGames = data => (
  $.ajax({
    method: 'GET',
    url: '/api/games',
    data
  })
)

export const fetchGame = gameId => (
  $.ajax({
    method: 'GET',
    url: `/api/games/${gameId}`
  })
)
