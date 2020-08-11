import {connect}  from 'react-redux';
import React from 'react';
import {updateReview, deleteReview} from '../../actions/review_actions';
import ReviewForm from './review_form'

class ReviewEdit extends React.Component {

  render () {
    let {review, currentUser, handleEdit, deleteReview, handleReview} = this.props;
    
    return (
      <div className="review-edit-form">
        <br/>
        <ReviewForm 
          review={review}
          currentUser={currentUser}
          formType='Update'
          handleReview={handleReview}
          deleteReview={deleteReview}
          handleEdit={handleEdit} 
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  review: state.entities.reviews[ownProps.review.id],
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  handleReview: review => dispatch(updateReview(review)),
  deleteReview: () => dispatch(deleteReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEdit);