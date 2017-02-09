import React, {Component} from 'react';
import Dashboard from './jenkins/components/Dashboard';
import styles from './jenkins/styles/styles.css';

class Jenkins extends Component {
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

export default Jenkins;