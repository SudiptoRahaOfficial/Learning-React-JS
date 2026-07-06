import React from 'react'
import { Link, useParams } from 'react-router'

function Userdetails() {
    const paramsData = useParams()
	return (
		<div>
            <h4>User Details</h4>
            <h5>User id is : {paramsData.id}</h5>
            <span><Link to='/users'>Back</Link></span>
		</div>
	)
}

export default Userdetails