// importing dependencis
import { createSlice } from '@reduxjs/toolkit'

// initializing initialState
const initialState = {
	value: 0,
}

// creating cartCounterSlice
export const cartCounterSlice = createSlice({
	name: 'cartCounter',
	initialState,
	reducers: {
		addCartItem: (state) => {
			state.value += 1
		},
		removeCartItem: (state) => {
			state.value > 0 && (state.value -= 1)
		},
		clearCart: (state) => {
			state.value = 0
		},
	},
})

// exporting functionalities
export const { addCartItem, removeCartItem, clearCart } =
	cartCounterSlice.actions

// default exporting reducer from cartCounterSlice
export default cartCounterSlice.reducer