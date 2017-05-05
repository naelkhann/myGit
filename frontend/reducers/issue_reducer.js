import { RECEIVE_ISSUES, RECEIVE_ISSUE, RECEIVE_EDITED_ISSUE } from '../actions/issue_actions';

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
      let receiveIssueState = Object.assign({}, prevState);
      receiveIssueState[action.issue.repoName].unshift(action.issue)
      return receiveIssueState;
    case RECEIVE_EDITED_ISSUE:
      let receiveEditedIssueState = Object.assign({}, prevState);
      let repo = action.issue.repoName;
      let issueNumber = action.issue.number;
      let issueObj = receiveEditedIssueState[repo].find(issue => issue.number === issueNumber)
      let issueIndex = receiveEditedIssueState[repo].indexOf(issueObj);
      receiveEditedIssueState[repo][issueIndex] = action.issue;
      return receiveEditedIssueState;
    default:
      return prevState;
  }
}

export default IssueReducer;
