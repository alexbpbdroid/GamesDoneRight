import React from 'react';
import {withRouter} from 'react-router'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
    this.state = {
      // this.props.review
        body: this.props.review.body,
        game_id: this.props.match.params.gameId
      
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    this.props.handleReview(this.state)
    this.setState({body: ""});
    if (this.props.formType === 'Update') this.props.handleEdit();
  }

  render () {

    let username;
    if (!this.props.currentUser) {
      return <div>Must be logged in to leave a review</div>;
    } else {
      username = this.props.currentUser.username
    }
    // debugger
    return (
      <div>
        <form className="review-form" onSubmit={this.handleSubmit}>
          <div>{username}</div>
          <textarea className="review-text" 
            value={this.state.body} 
            onChange={this.update('body')} 
            placeholder="Leave a review" />
            <br/>
          <button type="submit">{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default withRouter(ReviewForm);
