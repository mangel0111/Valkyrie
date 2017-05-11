import React, {Component} from 'react';
import Dashboard from './WhatWeCanEat/components/Dashboard';

class WhatWeCanEat extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className='bodyContainerExtended'>
				<Dashboard />
			</div>
		)
	}
}

export default WhatWeCanEat;
