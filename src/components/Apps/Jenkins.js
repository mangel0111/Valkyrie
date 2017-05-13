import React, {Component} from 'react';
import Dashboard from './jenkins/components/Dashboard';

class Jenkins extends Component {
	
	render() {
		return (
			<div className='bodyContainer'>
				<Dashboard />
			</div>
		)
	}
}

export default Jenkins;
