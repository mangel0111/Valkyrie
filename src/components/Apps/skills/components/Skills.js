import React from 'react';
import Avatar from 'material-ui/Avatar';
import HeaderProfile from './HeaderProfile';

class Skills extends React.Component {

	constructor() {
		super();
		this.state = {
			events: []
		};
	}
	render() {
		return (
			<div>
				<HeaderProfile/>
			</div>
		);
	}

}

export default Skills;
