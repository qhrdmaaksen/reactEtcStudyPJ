import {createSlice} from '@reduxjs/toolkit'

/*==================쇼핑 아이템 수량==================*/
const initialCounterState = {counter: 0}

const counterSlice = createSlice({
	name: 'cartItemCounter',
	initialState: initialCounterState,
	reducers: {
		incrementQuantity(state){
			state.counter++;
		},
		decrementQuantity(state){
			state.counter--;
		}
	}
})
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;