import React, { Component } from 'react';
import Profile from './profile/components/Profile';

class MyProfile extends Component {
	render() {
		const {userEmail} = this.props;
		return (
			<div className='bodyContainer'>
				<Profile userEmail={userEmail} />
			</div>
		)
	}
}

export default MyProfile;
