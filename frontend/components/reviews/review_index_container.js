import {connect} from 'react-redux'
import ReviewIndex from './review_index';
import {fetchReviews, deleteReview} from '../../actions/review_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: Object.values(state.entities.reviews)
              .filter(ele => ele.game_id === ownProps.game.id),
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)