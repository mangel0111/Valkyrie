import React, {Component} from 'react';
import Dashboard from './e2e/components/Dashboard';
import styles from './e2e/styles/styles.css';

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
