import React, {Component} from 'react';
import Dashboard from './offices/components/Dashboard';

class Offices extends Component {
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

export default Offices;
