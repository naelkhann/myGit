import React from 'react';
import { connect } from 'react-redux';
import { requestIssues } from '../actions/issue_actions';
import { withRouter } from 'react-router';
import IssueView from './issue_view';

const mapStateToProps = state => ({
  issues: state.issues
})

const mapDispatchToProps = (dispatch) => ({
  requestIssues: (repo) => dispatch(requestIssues(repo))
})

class RepoIssues extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.requestIssues(this.props.repoName)
  }


  filterIssues(){
    const repoName = this.props.repoName;
    let repoIssues = []
    if(this.props.issues[repoName]){
      if(this.props.issues[repoName].length > 0){
        this.props.issues[repoName].forEach((issue, idx) => {
          repoIssues.push(
            <IssueView issue={issue} key={idx}/>
          )
        })
      } else {
        repoIssues.push(
          <div key={repoName}>
            <p className="issue-text">There were never any issues for this repo.</p>
          </div>
        )
      }
    }
    return repoIssues;
  }

  render(){
    return (
      <div>
        <h3>Issues</h3>
        {this.filterIssues()}
      </div>
      )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RepoIssues))
