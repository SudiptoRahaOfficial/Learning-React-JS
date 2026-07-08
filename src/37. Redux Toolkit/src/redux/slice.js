// importing dependencis
import { createSlice } from '@reduxjs/toolkit'

// initializing initialState
const initialState = {
	items: localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [],
}

// creating cartCounterSlice
export const cartCounterSlice = createSlice({
	name: 'cartCounter',
	initialState,
	reducers: {
		addCartItem: (state, action) => {
			state.items.push(action.payload)
			localStorage.setItem('cart', JSON.stringify(state.items))
		},
		removeCartItem: (state, action) => {
			const cartData = state.items.filter(
				(item) => item.id != action.payload.id,
			)
			state.items = cartData
			localStorage.setItem('cart', JSON.stringify(cartData))
		},
	},
})

// exporting functionalities
export const { addCartItem, removeCartItem } = cartCounterSlice.actions

// default exporting reducer from cartCounterSlice
export default cartCounterSlice.reducer