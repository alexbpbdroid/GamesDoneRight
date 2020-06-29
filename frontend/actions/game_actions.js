import * as GameApiUtil from '../util/game_util'

export const RECEIVE_ALL_GAMES = 'RECEIVE_ALL_GAMES';
export const RECEIVE_GAME = 'RECEIVE_GAME';
export const RECEIVE_GAME_ERRORS = 'RECEIVE_GAME_ERRORS'

export const receiveAllGames = (games) => ({
  type: RECEIVE_ALL_GAMES,
  games
})

export const receiveGame = game => ({
  type: RECEIVE_GAME,
  game
})

const receiveGameErrors = errors => ({
  type: RECEIVE_GAME_ERRORS,
  errors
})

export const fetchGames = () => dispatch => (
  GameApiUtil.fetchGames()
    .then(games => (dispatch(receiveAllGames(games))), err => (
      dispatch(receiveGameErrors(err.responseJson))
    ))
)

export const fetchGame = (gameId) => dispatch => (
  GameApiUtil.fetchGame(gameId)
    .then(game => (dispatch(receiveGame(game))), err =>
      dispatch(receiveGameErrors(err.responseJson))
    )
)
