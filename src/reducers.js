// reducers.js
import { combineReducers } from 'redux';
import tokenReducer from './Reducer/tokenReducer';
import routerReducer from './Reducer/routerReducer';
// import { tokenReducer } from './token';
// import { routerReducer } from './router';

export default combineReducers({
  token: tokenReducer,
  router: routerReducer,
});
