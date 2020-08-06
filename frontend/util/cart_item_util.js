export const fetchCartItems = () => {
  return $.ajax({
    url: 'api/cart_items'
  })
}

export const createCartItem = gameId => {
  return $.ajax({
    url: '/api/cart_items',
    method: 'POST',
    data: { cart_item: {game_id: gameId} }
  })
}

export const deleteCartItem = cartItemId => {
  return $.ajax({
    url: `/api/cart_items/${cartItemId}`,
    method: 'DELETE'
  })
}