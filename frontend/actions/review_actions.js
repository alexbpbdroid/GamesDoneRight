import * as ReviewUtil from '../util/review_util'

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'

const receiveReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
})

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const fetchReviews = () => dispatch => {
  return ReviewUtil.fetchReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
}

export const fetchReview = reviewId => dispatch => {
  return ReviewUtil.fetchReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
}

export const createReview = review => dispatch => {
  return ReviewUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
}

export const updateReview = review => dispatch => {
  return ReviewUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
}

export const deleteReview = reviewId => dispatch => {
  return ReviewUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
}