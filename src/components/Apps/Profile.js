import React, {Component} from 'react';
import Profile from './profile/components/Profile';

class MyProfile extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className='bodyContainer'>
				<Profile />
			</div>
		)
	}
}

export default MyProfile;
