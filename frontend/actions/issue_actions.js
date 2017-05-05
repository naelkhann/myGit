import { username } from '../util//access';
import { getIssues, createIssue, updateIssue } from '../util/issues_util';

export const RECEIVE_ISSUES = "RECEIVE_ISSUES";
export const RECEIVE_ISSUE = "RECEIVE_ISSUE";

export const requestIssues = repo => dispatch => (
  getIssues(repo).then(issues => {
    issues.push(repo)
    return dispatch(receiveIssues(issues))
  })
)

export const createIssueAction = (repoName, issue) => dispatch => (
  createIssue(repoName, issue)
)

export const updateIssueAction = (repoName, issue) => dispatch => (
  updateIssue(repoName, issue).then(() => getIssues(repoName).then(issues => {
    issues.push(repoName)
    return dispatch(receiveIssues(issues))
  }))
)

const receiveIssues = issues => ({
  type: RECEIVE_ISSUES,
  issues
});

const receiveIssue = issue => ({
  type: RECEIVE_ISSUE,
  issue
});
