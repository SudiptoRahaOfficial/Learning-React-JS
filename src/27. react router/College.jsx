import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

function College() {
    const navLinkStyle = {
		color: 'blue',
		textDecoration: 'none',
		margin: '10px',
		fontWeight: '700',
		fontFamily: 'arial',
		fontSize: '14px',
    }
    
	return (
		<div>
			<h4>College Component</h4>
			<h5>
				<Link to='/'>Back To Home</Link>
			</h5>
			<div style={{ textAlign: 'center', marginBottom: '20px' }}>
				<NavLink style={navLinkStyle} to=''>
					Student
				</NavLink>
				<NavLink style={navLinkStyle} to='/college/departments'>
					Departments
				</NavLink>
				<NavLink style={navLinkStyle} to='/college/college-details'>
					College Details
				</NavLink>
				<Outlet />
			</div>
		</div>
	)
}

export default College