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
			'contentHeader': {
				'background': 'white',
				'margin': '20px',
				'padding': '20px',
				'boxShadow': '10px 10px 5px #888888'
			},
			'imgAvatar': {
				'width': 128,
				'minHeight': 128,
				'borderRadius': 128,
				'border': '5px solid white'
			},
			'details': {
				'borderRsight': 'medium solid blue'
			}
		}
		return (
			<div className="headerProfile" style={style.content}>
				<div style={style.contentHeader}>
					<div className="details">
						<span>
							<img
								role="presentation"
								style={style.imgAvatar} src={userProfile ? userProfile.avatar : '/images/profileGoogle.png'}></img>
						</span><br />
						<span><strong>Name:</strong> {userProfile ? userProfile.firstName + ' ' + userProfile.lastName : null}</span><br />
						<span><strong>Email:</strong> {userProfile ? userProfile.emailAddress : null}</span><br />
						<span><strong>Team:</strong> {userProfile ? (userProfile.team ? userProfile.team.map((team => team.name)) : null) : null}</span><br />
						<span><strong>Slack User:</strong> {userProfile ? userProfile.slackUser : null}</span><br />
						<span><strong>Region:</strong> {userProfile ? userProfile.region : null}</span><br />
					</div>
				</div>
			</div>
		);
	}

}

export default HeaderProfile;
