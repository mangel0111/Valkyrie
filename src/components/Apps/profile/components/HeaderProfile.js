import React from 'react';
import Avatar from 'material-ui/Avatar';

class HeaderProfile extends React.Component {

	constructor() {
		super();
		this.state = {
			events: []
		};
	}
	render() {
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
					<img style={style.imgAvatar} src={localStorage.getItem('picture')}></img>
				</span><br/>
				<span>{localStorage.getItem('owner')}</span><br/>
				<span>{localStorage.getItem('email')}</span><br/>
				<span>Región</span><br/>
				<span>Skills</span><br/>
			</div>
		);
	}

}

export default HeaderProfile;
