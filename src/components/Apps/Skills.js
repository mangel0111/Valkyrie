import React, {Component} from 'react';
import Skills from './skills/components/Skills';

class Skill extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className='bodyContainer'>
				<Skills />
			</div>
		)
	}
}

export default Skill;
