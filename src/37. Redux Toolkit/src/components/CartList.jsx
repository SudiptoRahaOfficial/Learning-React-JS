import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem, clearAllCartItem } from '../redux/slice'
import '../App.css'

function CartList() {
	const cartSelector = useSelector((state) => state.cart.items)

	const [cartitems, setcartitems] = useState(cartSelector)

	useEffect(() => {
		setcartitems(cartSelector)
	}, [cartSelector])

	const dispatch = useDispatch()
	const navigate = useNavigate()

	function handleQuantity(prodId, prodQuantity) {
		let quantity = parseInt(prodQuantity) > 1 ? parseInt(prodQuantity) : 1
		const cartTempItems = cartSelector.map((item) => {
			return item.id == prodId ? { ...item, quantity } : item
		})
		setcartitems(cartTempItems)
	}

	function handlePlaceOrder() {
		localStorage.clear()
		dispatch(clearAllCartItem())
		alert('Order Placed!')
		navigate('/')
	}

	return (
		<div className='cart-item-container'>
			<h2 className='cart-header'>Your Cart Items</h2>
			{cartitems.length > 0 &&
				cartitems.map((item) => (
					<div key={item.id} className='cart-item'>
						<div className='cart-item-info'>
							<img
								src={item.thumbnail}
								alt='cart-item-pic'
								className='cart-item-image'
							/>
							<h4>{item.title}</h4>
						</div>
						<div className='cart-item-actions'>
							<input
								onChange={(event) =>
									handleQuantity(item.id, event.target.value)
								}
								type='number'
								defaultValue={1}
							/>
							<span>
								{(item.quantity
									? item.price * item.quantity
									: item.price
								).toFixed(2)}
							</span>
							<button
								onClick={() => dispatch(removeCartItem(item))}
								className='add-cart-btn'
							>
								Remove
							</button>
						</div>
					</div>
				))}

			<div className='cart-footer'>
				<button
					onClick={handlePlaceOrder}
					style={{ width: '120px' }}
					className='add-cart-btn'
				>
					Place Order
				</button>
				<span className='totalPrice'>
					Total Price :{' '}
					{cartitems
						.reduce(
							(sum, item) =>
								item.quantity
									? sum + item.price * item.quantity
									: sum + item.price,
							0,
						)
						.toFixed(2)}
				</span>
			</div>
		</div>
	)
}

export default CartList