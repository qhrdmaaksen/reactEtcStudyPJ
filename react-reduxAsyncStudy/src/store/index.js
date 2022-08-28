import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import showCartReducer from './ui-slice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
		showCart: showCartReducer,
  },
});
export default store;
