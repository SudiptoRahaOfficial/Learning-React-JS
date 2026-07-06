import React from 'react'
import { NavLink, Outlet } from 'react-router'

function Navbar() {
	const navLinkStyle = {
		color: 'black',
		textDecoration: 'none',
		margin: '10px',
		fontWeight: '700',
		fontFamily: 'arial',
		fontSize: '16px',
	}
	return (
		<>
			<nav>
				<NavLink style={navLinkStyle} to='/'>
					Home
				</NavLink>
				<NavLink style={navLinkStyle} to='/about'>
					About
				</NavLink>
				<NavLink style={navLinkStyle} to='/admin/contact'>
					Contact
				</NavLink>
				<NavLink style={navLinkStyle} to='/college'>
					College
				</NavLink>
				<NavLink style={navLinkStyle} to='/users'>
					Users
				</NavLink>
				<NavLink style={navLinkStyle} to='/users/list'>
					List
				</NavLink>
			</nav>
			<Outlet />
		</>
	)
}

export default Navbar