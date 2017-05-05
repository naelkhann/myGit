import React from 'react';
import { connect } from 'react-redux';
import { updateIssueAction } from '../actions/issue_actions';

const mapDispatchToProps = dispatch => ({
  updateIssueAction: (repoName, issue) => dispatch(updateIssueAction(repoName, issue))
})

class IssueItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: this.props.issue.title,
      body: this.props.issue.body,
      number: this.props.issue.number,
      state: this.props.issue.state,
      editing: false
    }
    this.toggleEditField = this.toggleEditField.bind(this);
    this.submitEditIssue = this.submitEditIssue.bind(this);
    this.toggleIssueState = this.toggleIssueState.bind(this);
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  submitEditIssue(e){
    e.preventDefault();
    let issue = { title: this.state.title, body: this.state.body, number: this.state.number}
    if(this.state.state === "closed"){
      issue["state"] = "open"
    }
    this.props.updateIssueAction(this.props.repoName, issue).then(() => {
      this.setState({editing: false})
    })
  }

  toggleIssueState(){
    if(this.state.state === "open"){
      let closeIssue = {state: "closed", number: this.state.number}
      this.props.updateIssueAction(this.props.repoName, closeIssue).then(() => {
        this.setState({editing: false})
      })
    } else {
      let openIssue = {state: "open", number: this.state.number}
      this.props.updateIssueAction(this.props.repoName, openIssue).then(() => {
        this.setState({editing: false})
      })
    }
  }

  renderIssueInfoAndEdit(issue){
    if(this.state.editing){
      return (
        <form className="issue-form" onSubmit={this.submitEditIssue}>
          <label><strong>Title:</strong></label>
          <br />
          <input className="issue-input" type="text" value={this.state.title} onChange={this.update('title')}/>
          <br />
          <br />
          <label><strong>Body:</strong></label>
          <br />
          <textarea className="issue-input" type="text" value={this.state.body} onChange={this.update('body')}/>
          <br />
          <br />
          <div className="issue-form-btns">
            <input className="issue-btn gray" type="submit" value={`Edit #${issue.number}`}/>
            <h4 className="issue-btn gray" onClick={this.toggleIssueState}>{this.state.state === "open" ? "Close Issue" : "Reopen Issue"}</h4>
          </div>

        </form>
      )
    } else {
      return (
        <div className="issue-info">
          <h4>{issue.title}</h4>
          <p>{issue.body}</p>
        </div>
      )
    }
  }

  toggleEditField(){
    const editState = this.state.editing
    this.setState({ editing: !editState, title: this.props.issue.title, body: this.props.issue.body})
  }

  render(){
    const {issue, repoName} = this.props;
    return (
      <div className="issue-container">
        <div className="issue-number">
          <h2>{`#${issue.number}`}</h2>
        </div>
        {this.renderIssueInfoAndEdit(this.props.issue)}
        <div className={`issue-status ${issue.state}`}></div>
        <h4 className="issue-btn" onClick={this.toggleEditField}><i className="fa fa-pencil"></i>  Edit</h4>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(IssueItem)
