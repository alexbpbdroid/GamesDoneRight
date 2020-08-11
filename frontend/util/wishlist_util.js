export const fetchWishlists = () => (
  $.ajax({
    url: '/api/wishlists'
  })
)

export const fetchWishlist = (wishlistId) => (
  $.ajax({
    url: `/api/wishlists/${wishlistId}`,
  })
)

export const createWishlist = (wishlist) => {
  return $.ajax({
    url: '/api/wishlists',
    method: 'POST',
    data: { wishlist }
  })
}

export const updateWishlist = (wishlist) => (
  $.ajax({
    url: `/api/wishlists/${wishlist.id}`,
    method: 'PATCH',
    data: { wishlist }
  })
)

export const deleteWishlist = (wishlistId) => (
  $.ajax({
    url: `/api/wishlists/${wishlistId}`,
    method: 'DELETE'
  })
)