import React from 'react';
import ReviewEdit from './review_edit';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {edit: false};
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    this.setState({edit: false})
  }

  handleDelete(e) {
    e.preventDefault();
    if (this.props.currentUser.id === this.props.review.author_id) {
      this.props.deleteReview(this.props.review.id)
    }
  }

  render () {
    let {review, currentUser} = this.props;
    let buttons;
    if ( currentUser && currentUser.id === review.author_id) {buttons = (
      <div>
        <button onClick={() => this.setState({edit: true})}>Edit</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.handleDelete}>Delete</button>
      </div>)
      } else {
        buttons = <></>
      }

    return (
      <div>
        {!this.state.edit ? (
          <div className="review-item-outer">
            <div className="review-item-inner">
              <div className="review-username">{review.username}</div>
              <div className="review-body">{review.body}
                <br /><br />
                <div>{buttons}</div>
              </div>
            </div>
            
          </div>
        ) : (<ReviewEdit review={review} handleEdit={this.handleEdit}/>)}
        <br/><br/>
      </div>
    )
  }
}

export default ReviewItem;