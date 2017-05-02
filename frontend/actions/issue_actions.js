import { username } from '../util//access';
import { getIssues } from '../util/issues_util';

export const RECEIVE_ISSUES = "RECEIVE_ISSUES";

export const requestIssues = repo => dispatch => (
  getIssues(repo).then(issues => {
    issues.push(repo)
    return dispatch(receiveIssues(issues))
  })
)

const receiveIssues = issues => ({
  type: RECEIVE_ISSUES,
  issues
})
