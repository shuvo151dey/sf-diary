import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from '../Config/Auth'

export const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route 
			{...rest}
			render = {(props) => 
				(auth.isAuthenticated()) ? (
					<Component {...props} />
				) :(
					<Redirect to = {{
						pathname: '/',
						state: { from: props.location }
					}}
					/>
				)	 
			}
		/>
	);
}