import { useDispatch, useSelector } from 'react-redux'
import cartCounterSlice from '../redux/slice'

function Header() {
	const dispatch = useDispatch()

	const cartSelector = useSelector((state) => state.cart.items)

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
				<button className='cart-btn'>
					🛒 Cart ({cartSelector.length})
				</button>
			</div>
		</header>
	)
}

export default Header