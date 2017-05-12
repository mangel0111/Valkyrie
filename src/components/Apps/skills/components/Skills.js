import React from 'react';
import Navigation from './Navigation';

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
				<Navigation />
			</div>
		);
	}

}

export default Skills;
