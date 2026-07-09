import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cartCounterSlice, { addCartItem, removeCartItem } from '../redux/slice'
import { fetchProducts } from '../redux/productSlice'

function ProductCard() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	const productSelector = useSelector((state) => state.products.items)

	const cartSelector = useSelector((state) => state.cart.items)

	return (
		<>
			<div className='products-container'>
				{productSelector.length &&
					productSelector.map((product) => (
						<div key={product.id} className='product-card'>
							<img
								src={product.images[0]}
								alt='Product'
								className='product-image'
							/>

							<h3 className='product-title'>{product.title}</h3>

							<p className='product-price'>{product.price}</p>

							{cartSelector.find(
								(cartItem) => cartItem.id === product.id,
							) ? (
								<button
									onClick={() =>
										dispatch(removeCartItem(product))
									}
									className='add-cart-btn btn-disabled'
								>
									Remove From Cart
								</button>
							) : (
								<button
									onClick={() =>
										dispatch(addCartItem(product))
									}
									className='add-cart-btn'
								>
									Add to Cart
								</button>
							)}
						</div>
					))}
			</div>
		</>
	)
}

export default ProductCard