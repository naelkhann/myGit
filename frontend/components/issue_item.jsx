import React from 'react';
import { connect } from 'react-redux';


class IssueItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: this.props.issue.title,
      body: this.props.issue.body,
      editing: false
    }
    this.toggleEditField = this.toggleEditField.bind(this);
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value})
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
          <input className="issue-btn gray" type="submit" value={`Edit #${issue.number}`}/>
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

export default IssueItem
