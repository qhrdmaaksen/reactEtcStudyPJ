import { createSlice } from '@reduxjs/toolkit';

/*장바구니 상세보기*/
const showCartSlice = createSlice({
  name: 'showCartDetails',
  initialState: {
    cartIsVisible: false,
  },
  reducers: {
    toggleCartButton(state) {
      state.cartIsVisible = !state.cartIsVisible
    },
  },
});
export const showCartActions = showCartSlice.actions;
export default showCartSlice.reducer;
