import React, {Component} from 'react';
import Dashboard from './e2e/components/Dashboard';

class E2E extends Component {
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

export default E2E;
