import React from 'react'

import './App.css'

import Header from './components/Header'
import ProductCard from './components/ProductCard'

function App() {
	return (
		<>
			<h1
				style={{
					textAlign: 'center',
					backgroundColor: '#f6ebff',
					width: '600px',
					margin: '40px auto',
					padding: '10px',
					fontFamily: 'arial',
					borderRadius: '3px',
				}}
			>
				Part 37. Redux Toolkit Learning
			</h1>

			<Header />

			<main>
				<div className='products-container'>
					<ProductCard />
				</div>
			</main>
		</>
	)
}

export default App