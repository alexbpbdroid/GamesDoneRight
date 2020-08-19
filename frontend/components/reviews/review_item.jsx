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
    //random profile color
    let usernameToColor = function(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let color = '#';
      for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xFF;
        color += ('00' + value.toString(16)).substr(-2);
      }
      return color;
    }

    return (
      <div>
        {!this.state.edit ? (
          <div className="review-item-outer">
            <div className="review-item-inner">
              <div className="review-profile">
                <div className="review-icon"><span style={{color: usernameToColor(review.username)}} id="review-profile-icon" className="material-icons">account_circle</span></div>
                <div className="review-username">{review.username}</div>
              </div>
              <div className="review-body">
                <div className="review-body-text">{review.body}</div>
                <div className="review-body-buttons">{buttons}</div>
              </div>
            </div>
            
          </div>
        ) : (<ReviewEdit review={review} handleEdit={this.handleEdit}/>)}
      </div>
    )
  }
}

export default ReviewItem;