import {connect} from 'react-redux';
import ReviewForm from './review_form';
import {createReview, fetchReview, updateReview} from '../../actions/review_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return { 
    review: {body: '', review_id: ownProps.match.params.reviewId},
    currentUser: state.entities.users[state.session.id],
    formType: 'Add Review'
  }
}

const mapDispatchToProps = dispatch => ({
  handleReview: review => dispatch(createReview(review))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm))