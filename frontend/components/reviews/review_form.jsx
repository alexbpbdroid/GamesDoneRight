import React from 'react';

class ReviewForm extends Review.Component {
  constructor(props) {
    super(props)
    this.state = this.props.review
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleReview(this.state)
    this.setState({body: ''});
    if (this.props.formType === 'Update') this.props.handleEdit();
  }

  render () {

    let username;
    if (!this.props.currentUser) {
      return null;
    } else {
      username = this.props.currentUser.username
    }
  
    return (
      <div>
        <form className="review-form" onSubmit={this.handleSubmit}>
          <div>{username}</div>
          <textarea className="review-text" 
            value={this.state.body} 
            onChange={this.update('body')} 
            placeholder="Leave a review" />
            <br/>
          <button>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default ReviewForm;
