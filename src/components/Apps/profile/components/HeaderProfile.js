import React from 'react';

class HeaderProfile extends React.Component {

	constructor() {
		super();
		this.state = {
			events: []
		};
	}
	render() {
		const {userProfile} = this.props;
		let style = {
			'content': {
				'paddingTop': 15,
				'textAlign': 'center'
			},
			'imgAvatar': {
				'width': 128,
				'minHeight': 128,
				'borderRadius': 128,
				'border': '5px solid white'
			}
		}
		return (
			<div style={style.content}>
				<span>
					<img
						role="presentation"
						style={style.imgAvatar} src={userProfile ? userProfile.avatar : '/images/profileGoogle.png'}></img>
				</span><br />
				<span><strong>Name:</strong> {userProfile ? userProfile.firstName + ' ' + userProfile.lastName : null}</span><br />
				<span><strong>Email:</strong> {userProfile ? userProfile.emailAddress : null}</span><br />
				<span><strong>Slack User:</strong> {userProfile ? userProfile.slackUser : null}</span><br />
				<span><strong>Region:</strong> {userProfile ? userProfile.region : null}</span><br />
			</div>
		);
	}

}

export default HeaderProfile;
