import React from 'react';
import {withRouter} from 'react-router'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
    // this.state = {
    //   // this.props.review
    //     body: this.props.review.body,
    //     game_id: this.props.match.params.gameId
      
    // }
    this.state = this.props.review
    this.state.game_id = this.props.match.params.gameId
  }

  update(field) {
    
    return e => {
      
      this.setState({body: e.currentTarget.value})}
  }

  handleSubmit(e) {
    
    e.preventDefault();
    this.props.handleReview(this.state)
    this.setState({body: ""});
    if (this.props.formType === 'Update') this.props.handleEdit();
  }

  render () {
    
    let username;
    if (!this.props.currentUser) {
      return <div>* Must be logged in to leave a review<br /><br /><br/><br/></div>
    } else {
      username = this.props.currentUser.username
    }
    
    return (
      <div>
        <form className="review-form" onSubmit={this.handleSubmit}>
          <div className="form-username">{username}</div>
          <div className="form-textarea">
            <textarea cols="105" rows="7" className="review-text"
              value={this.state.body}
              onChange={this.update('body')}
              placeholder="Leave a review" />
              
            <button type="submit">{this.props.formType}</button>
          </div>
            
          
        </form>
      </div>
    )
  }
}

export default withRouter(ReviewForm);
