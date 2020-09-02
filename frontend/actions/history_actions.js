import * as HistoryUtil from '../util/history_util';

export const RECEIVE_HISTORIES = "RECEIVE_HISTORIES";
export const RECEIVE_HISTORY = "RECEIVE_HISTORY";
export const REMOVE_HISTORY = "REMOVE_HISTORY";

const receiveHistories = (histories) => ({
  type: RECEIVE_HISTORIES,
  histories
});

const receiveHistory = (history) => ({
  type: RECEIVE_HISTORY, 
  history
});

const removeHistory = (historyId) => ({
  type: REMOVE_HISTORY,
  historyId
});

export const fetchHistories = () => dispatch => {
  return HistoryUtil.fetchHistories()
    .then((histories) => dispatch(receiveHistories(histories)))
}

export const fetchHistory = (historyId) => dispatch => {
  return HistoryUtil.fetchHistory(historyId)
    .then((history) => dispatch(receiveHistory(history)))
}

export const createHistory = (history) => dispatch => {
  return HistoryUtil.createHistory(history)
    .then((history) => dispatch(receiveHistory(history)))
}

export const deleteHistory = (historyId) => dispatch => {
  return HistoryUtil.deleteHistory(historyId)
    .then(() => dispatch(removeHistory(historyId)))
}