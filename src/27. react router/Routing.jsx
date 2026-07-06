import React from 'react'
import { Navigate, Route, Routes } from 'react-router'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Pagenotfound from './Pagenotfound'
import College from './College'
import Student from './Student'
import Departments from './Departments'
import Collegedetails from './Collegedetails'
import Users from './Users'
import Userdetails from './Userdetails'

function Routing() {
	return (
		<Routes>
			<Route element={<Navbar />}>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/admin/contact' element={<Contact />} />
				<Route path='/users/list?' element={<Users />} />

				<Route path='/users/:id/:name?' element={<Userdetails />} />
			</Route>

			<Route path='/college' element={<College />}>
				<Route index element={<Student />} />
				<Route path='departments' element={<Departments />} />
				<Route path='college-details' element={<Collegedetails />} />
			</Route>

			{/* 404 page not found
			<Route path='/*' element={<Pagenotfound />} /> */}

			{/* redirecting to home on unwanted route request */}
			<Route path='/*' element={<Navigate to='/' />} />
		</Routes>
	)
}

export default Routing