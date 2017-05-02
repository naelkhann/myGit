import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';

function createThunk(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunk();

const configureStore = (preloadedState = {}) => {
  return createStore(RootReducer, preloadedState, applyMiddleware(thunk))
}

export default configureStore;
