import { createSlice } from '@reduxjs/toolkit';

/*Cart item state*/
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    /*items 를 추가 메서드*/
    addItemToCart(state, action) {
      const newItem = action.payload; /* 작업에 추가하는 데이터 설정 payload*/
      /*기존 항목에 추가할 항목을 id 를 통해 찾음(id 를 가지고있다는 가정)*/
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++; /*상품추가 시 새상품의 카운터1개씩 늘어남에따라 총 수량도 1개씩 증가*/
      /*기존 배열에 들어있지 않은 item 일 경우
       * -redux toolkit 이아닌 redux 만 사용할 경우 push 는 기존 state 의 기존 배열을 조작하기에 사용하면안됨
       * --redux toolkit 에는 내부적으로 immer 가 기존 state 를 조작하지 않도록 불변성 유지되기에 문제되지않음*/
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price /*새로 추가될때 1개씩 추가되기에 수량*가격 지정하지않음*/,
          name: newItem.title,
        });
      } else {
        /*기존 항목이 존재하는 경우*/
        existingItem.quantity++; /*기존 항목의 수량에 newItem qty 1개 추가*/
        /*기존 총 가격에 기존 총가격+새로추가된 아이템의 가격*/
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    /*items 를 제거하는 메서드*/
    removeItemFromCart(state, action) {
      const id = action.payload; /*payload 는 id 가 될것임*/
      const existingItem = state.items.find(
        item => item.id === id,
      ); /*기존 아이템의 id 와 payload 로 들어온 id 가 같은걸 찾음*/
      state.totalQuantity--; /*상품을 1개씩 제거함에따라 총 수량도 하나씩 감소*/
      if (existingItem.quantity === 1) {
        /*아이템의 수량이 1 개라면 바로 삭제*/
        state.items = state.items.filter(
          item => item.id !== id,
        ); /*id 가 동일한 항목의 경우 필터링하여 제거 동일하지 않은 id 는 건드리지않음*/
      } else {
        /*아이템의 수량이 1 보다 많다면 수량을 1개씩 삭제*/
        existingItem.quantity--;
        /*수량 감소 시 총 가격 업데이트*/
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
