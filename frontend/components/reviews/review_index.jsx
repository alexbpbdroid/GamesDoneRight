import React from 'react';
import ReviewItem from './review_item';
import ReviewForm from './review_form_container';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  render () {

    let reviews = this.props.reviews;
    let deleteReview = this.props.deleteReview;
    let currentUser = this.props.currentUser
    let displayForm = <ReviewForm />
    reviews.forEach((review) => {
      if (currentUser && review.author_id === currentUser.id) { 
        displayForm = <></>
      }
    }) 
    return (
      <div>
        {displayForm}
        <br/>
        {reviews.reverse().map((review) =>
          <ReviewItem
            key={review.id}
            review={review}
            deleteReview={deleteReview}
            currentUser={currentUser}
          />
        )}
      </div>
    )
  }
}

export default ReviewIndex