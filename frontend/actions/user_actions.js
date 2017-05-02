import { getUser, getRepos } from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_REPOS = "RECEIVE_REPOS";

export const requestUser = () => dispatch => (
  getUser().then(user => dispatch(receiveUser(user)))
)

export const requestRepos = () => dispatch => (
  getRepos().then(repos => dispatch(receiveRepos(repos)))
)

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

const receiveRepos = repos => ({
  type: RECEIVE_REPOS,
  repos
})
