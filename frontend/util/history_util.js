export const fetchHistories = () => (
  $.ajax({
    url: '/api/histories'
  })
)

export const fetchHistory = (historyId) => (
  $.ajax({
    url: `/api/histories/${historyId}`
  })
)

export const createHistory = (history) => {
  return $.ajax({
    url: '/api/histories',
    method: 'POST',
    data: { history }
  })
}

export const updateHistory = (history) => (
  $.ajax({
    url: `/api/histories/${history.id}`,
    method: 'PATCH',
    data: { history }
  })
)

export const deleteHistory = (historyId) => (
  $.ajax({
    url: `/api/histories/${historyId}`,
    method: 'DELETE'
  })
)