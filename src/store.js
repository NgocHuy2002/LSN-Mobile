// store.js
import { configureStore } from '@reduxjs/toolkit';
import { routerReducer } from './Reducer/routerReducer';
import { tokenReducer } from './Reducer/tokenReducer';

const store = configureStore({
  reducer: {
    router: routerReducer,
    token: tokenReducer,
    // Add other reducers here if needed
  },
});

export default store;
