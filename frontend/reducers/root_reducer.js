import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import RepoReducer from './repo_reducer';
import IssueReducer from './issue_reducer';

const RootReducer = combineReducers({
  user: UserReducer,
  repos: RepoReducer,
  issues: IssueReducer
});

export default RootReducer;
