import React from 'react'
import { Routes, Route } from 'react-router'

import './App.css'

import Header from './components/Header'
import ProductCard from './components/ProductCard'
import CartList from './components/CartList'

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
				<Routes>
					<Route path='/' element={<ProductCard />} />
					<Route path='/cart' element={<CartList />} />
				</Routes>
			</main>
		</>
	)
}

export default App