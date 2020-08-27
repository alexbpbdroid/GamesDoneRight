export const fetchLibraries = () => (
  $.ajax({
    url: '/api/libraries'
  })
)

export const fetchLibrary = (libraryId) => (
  $.ajax({
    url: `/api/libraries/${libraryId}`
  })
)

export const createLibrary = (library) => {
  return $.ajax({
    url: '/api/libraries',
    method: 'POST',
    data: { libraries }
  })
}

export const updateLibrary = (library) => (
  $.ajax({
    url: `/api/libraries/${library.id}`,
    method: 'PATCH',
    data: { library }
  })
)

export const deleteLibrary = (libraryId) => (
  $.ajax({
    url: `/api/libraries/${libraryId}`,
    methnod: 'DELETE'
  })
)