import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import showCartReducer from './ui-slice'
import cartSliceReducer from './cart-slice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
		showCart: showCartReducer,
		cart: cartSliceReducer,
  },
});
export default store;
