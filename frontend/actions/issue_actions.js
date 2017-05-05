import { username } from '../util//access';
import { getIssues, createIssue, updateIssue } from '../util/issues_util';

export const RECEIVE_ISSUES = "RECEIVE_ISSUES";
export const RECEIVE_ISSUE = "RECEIVE_ISSUE";
export const RECEIVE_EDITED_ISSUE ="RECEIVE_EDITED_ISSUE";

export const requestIssues = repo => dispatch => (
  getIssues(repo).then(issues => {
    issues.push(repo)
    return dispatch(receiveIssues(issues))
  })
)

export const createIssueAction = (repoName, issue) => dispatch => (
  createIssue(repoName, issue).then(issue => {
    issue["repoName"] = repoName
    return dispatch(receiveIssue(issue));
  })
)

export const updateIssueAction = (repoName, issue) => dispatch => (
  updateIssue(repoName, issue).then(issue => {
    issue["repoName"] = repoName
    return dispatch(receiveEditedIssue(issue))
  })
)

const receiveIssues = issues => ({
  type: RECEIVE_ISSUES,
  issues
});

const receiveIssue = issue => ({
  type: RECEIVE_ISSUE,
  issue
});

const receiveEditedIssue = issue => ({
  type: RECEIVE_EDITED_ISSUE,
  issue
});
