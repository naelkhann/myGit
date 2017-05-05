import React from 'react';
import { connect } from 'react-redux';
import { requestIssues, createIssueAction } from '../actions/issue_actions';
import { Link, withRouter } from 'react-router-dom';
import IssueItem from './issue_item';

const mapStateToProps = (state, ownProps) => ({
  issues: state.issues,
  repoName: ownProps.match.params.repoName,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  requestIssues: (repo) => dispatch(requestIssues(repo)),
  createIssueAction: (repoName, issue) => dispatch(createIssueAction(repoName, issue))
})

class RepoIssues extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      editing: false,
      title: "",
      body: ""
    }

    this.toggleEditField = this.toggleEditField.bind(this);
    this.submitNewIssue = this.submitNewIssue.bind(this);
  }

  componentWillMount(){
    this.props.requestIssues(this.props.repoName)
  }

  submitNewIssue(e){
    e.preventDefault()
    let issue = { title: this.state.title, body: this.state.body}
    this.props.createIssueAction(this.props.repoName, issue).then(() => {
      this.setState({ title: "", body: "", editing: false})
    })
  }

  update(field){
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  filterIssues(){
    const repoName = this.props.repoName;
    let repoIssues = []
    if(this.props.issues[repoName]){
      if(this.props.issues[repoName].length > 0){
        this.props.issues[repoName].forEach((issue, idx) => {
          repoIssues.push(
            <IssueItem issue={issue} repoName={repoName} key={idx}/>
          )
        })
      } else {
        repoIssues.push(
          <div className="issue-container" key={repoName}>
            <p>There were never any issues for this repo.</p>
          </div>
        )
      }
    }
    return repoIssues;
  }

  createIssueForm(){
    if(this.state.editing){
      return (
        <form className="issue-form" onSubmit={this.submitNewIssue}>
          <h3>Create An Issue for {this.props.repoName}</h3>
          <label><strong>Title:</strong></label>
          <br />
          <input className="issue-input" type="text" value={this.state.title} onChange={this.update('title')}/>
          <br />
          <br />
          <label><strong>Body:</strong></label>
          <br />
          <textarea className="issue-input txtarea" type="text" value={this.state.body} onChange={this.update('body')}/>
          <br />
          <br />
          <input className="issue-btn gray" type="submit" value={`Create Issue`}/>
        </form>
      )
    }
  }

  toggleEditField(){
    const editState = this.state.editing
    this.setState({ editing: !editState, title: this.state.title, body: this.state.body})
  }

  render(){
    return (
      <div className="issues">
        <h4><Link className="issue-link" to="/">naelkhann</Link> / <a className="issue-link" href={`https://github.com/${this.props.user.login}/${this.props.repoName}`}>{this.props.repoName}</a></h4>
        <br />
        <div className="issue-heading">
          <h2>Issues</h2>
          <h4 className="issue-btn create-issue" onClick={this.toggleEditField}>Create New Issue</h4>
        </div>
        {this.createIssueForm()}
        {this.filterIssues()}
      </div>
      )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RepoIssues))
