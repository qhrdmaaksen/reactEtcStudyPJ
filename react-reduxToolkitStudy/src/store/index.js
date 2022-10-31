import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import uiReducer from './ui-slice'
import cartSliceReducer from './cart-slice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
		ui: uiReducer,
		cart: cartSliceReducer,
  },
});
export default store;
