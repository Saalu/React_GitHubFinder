import React, { Component } from 'react';
import PropTypes from 'prop-types';
class componentName extends Component {
	static defaultProps = {
		title: 'GitHub',
		icon: 'fab fa-github'
	};

	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	};

	render() {
		return (
			<nav className="nav bg-primary">
				<h1>
					<i className={this.props.icon} />
					{this.props.title}
				</h1>
			</nav>
		);
	}
}

export default componentName;
