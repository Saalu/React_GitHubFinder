import React, { Component } from 'react';
import './App.css';
import Nav from './components/layouts/Navbar';
import User from './components/users/User';
class componentName extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<div className="container">
					<User />
				</div>
			</div>
		);
	}
}

export default componentName;
