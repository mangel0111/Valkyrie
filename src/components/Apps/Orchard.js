import React, {Component} from 'react';
import Dashboard from './orchard/components/Dashboard';

class Orchard extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className='bodyContainer'>
				<Dashboard />
			</div>
		)
	}
}

export default Orchard;
