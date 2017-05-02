import { RECEIVE_REPOS } from '../actions/user_actions';

const RepoReducer = (prevState = {}, action) => {
  switch(action.type){
    case RECEIVE_REPOS:
      const receiveRepoState = Object.assign({}, prevState, action.repos);
      return receiveRepoState;
    default:
      return prevState;
  }
}

export default RepoReducer;
