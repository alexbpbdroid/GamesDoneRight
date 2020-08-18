export const fetchCarts = () => (
  $.ajax({
    url: '/api/carts'
  })
)

export const fetchCart = (cartId) => (
  $.ajax({
    url: `/api/carts/${cartId}`
  })
)

export const createCart = (cart) => (
  $.ajax({
    url: `/api/carts`,
    method: 'POST',
    data: { cart }
  })
)

export const updateCart = (cart) => (
  $.ajax({
    url: `/api/carts/${cart.id}`,
    method: 'PATCH',
    data: { cart }
  })
)

export const deleteCart = (cartId) => (
  $.ajax({
    url: `/api/carts/${cartId}`,
    method: 'DELETE'
  })
)