import { RECEIVE_ISSUES } from '../actions/issue_actions';

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
    default:
      return prevState;
  }
}

export default IssueReducer;
