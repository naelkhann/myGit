import { RECEIVE_ISSUES, RECEIVE_ISSUE } from '../actions/issue_actions';

const IssueReducer = (prevState = {}, action) => {
  switch(action.type){
    case RECEIVE_ISSUES:
      let issues = {};
      let repoName = action.issues.splice(action.issues.length - 1);
      issues[repoName] = []
      if (action.issues.length > 0) {
        action.issues.forEach(issue => issues[repoName].push(issue))
      }
      return Object.assign({}, prevState, issues);
    case RECEIVE_ISSUE:
      let repo_name = action.issue.repo_name
      prevState.issues[repo_name].push(action.issue)
      return Object.assign({}, prevState)
    default:
      return prevState;
  }
}

export default IssueReducer;
