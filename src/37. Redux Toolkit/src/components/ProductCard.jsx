import { useDispatch } from 'react-redux'
import cartCounterSlice from '../redux/slice'
import { addCartItem, removeCartItem } from '../redux/slice'

function ProductCard() {
	const dispatch = useDispatch()

	return (
		<div className='product-card'>
			<img
				src='https://extremegadgets.com.bd/wp-content/uploads/2024/09/eng_pm_AWEI-Bluetooth-Over-Ear-Headphones-AT7-Black-116377_1.jpg'
				alt='Product'
				className='product-image'
			/>

			<h3 className='product-title'>Wireless Headphone</h3>

			<p className='product-price'>$99.99</p>

			<button
				onClick={() => dispatch(addCartItem())}
				className='add-cart-btn'
			>
				Add to Cart
			</button>
			<button
				style={{ backgroundColor: 'green', marginTop: '10px' }}
				onClick={() => dispatch(removeCartItem())}
				className='add-cart-btn'
			>
				Remove From Cart
			</button>
		</div>
	)
}

export default ProductCard