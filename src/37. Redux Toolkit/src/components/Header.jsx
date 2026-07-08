import { useDispatch, useSelector } from 'react-redux'
import cartCounterSlice, { clearCart } from '../redux/slice'

function Header() {
    const dispatch = useDispatch()

    const selector = useSelector((state) => state.cart.value)
    
	return (
		<header className='header'>
			<div className='logo'>
				<h2>ShopEasy</h2>
			</div>

			<nav className='nav'>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Products</a>
					</li>
					<li>
						<a href='#'>Categories</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
				</ul>
			</nav>

			<div>
				<button className='cart-btn'>🛒 Cart ({selector})</button>
				<button
					style={{
						width: '150px',
                        backgroundColor: 'red',
                        marginLeft: '20px'
					}}
					className='add-cart-btn'
					onClick={() => dispatch(clearCart())}
				>
					Clear All Cart
				</button>
			</div>
		</header>
	)
}

export default Header