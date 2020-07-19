import React, { Component } from 'react';
import UserItem from './UserItem';

class componentName extends Component {
	state = {
		users: [
			{
				id: 1,
				login: 'saalu',
				avatar_url: 'https://avatars0.githubusercontent.com/u/1?=4',
				html_url: 'https://github.com/mojombo'
			},
			{
				id: 2,
				login: 'saalu',
				avatar_url: 'https://avatars0.githubusercontent.com/u/2?=4',
				html_url: 'https://github.com/defunkt'
			},
			{
				id: 3,
				login: 'saalu',
				avatar_url: 'https://avatars0.githubusercontent.com/u/3?=4',
				html_url: 'https://github.com/pjhyett'
			}
		]
	};

	render() {
		return (
			<div style={userStyle}>
				{this.state.users.map((user) => {
					return <UserItem key={user.id} user={user} />;
				})}
			</div>
		);
	}
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default componentName;
