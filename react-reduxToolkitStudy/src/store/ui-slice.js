import { createSlice } from '@reduxjs/toolkit';

/*장바구니 상세보기*/
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    cartIsVisible: false,
    notification: null,
  },
  reducers: {
    toggleCartButton(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    /*error 및 성공 알림*/
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.title,
      };
    },
  },
});


export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
