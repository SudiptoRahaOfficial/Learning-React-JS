import { useDispatch, useSelector } from 'react-redux'
import cartCounterSlice from '../redux/slice'
import { Link } from 'react-router'

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
						<Link to='/'>Home</Link>
					</li>
				</ul>
			</nav>

			<div>
				<Link to='/cart'>
					<button className='cart-btn'>
						🛒 Cart ({cartSelector.length})
					</button>
				</Link>
			</div>
		</header>
	)
}

export default Header