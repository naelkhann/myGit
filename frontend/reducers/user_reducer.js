import { RECEIVE_USER } from '../actions/user_actions';

const UserReducer = (prevState = {}, action) => {
  switch(action.type){
    case RECEIVE_USER:
      const receiveUserState = Object.assign({}, prevState, action.user);
      return receiveUserState;
    default:
      return prevState;
  }
}

export default UserReducer;
