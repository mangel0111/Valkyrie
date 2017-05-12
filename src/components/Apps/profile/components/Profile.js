import React from 'react';
import HeaderProfile from './HeaderProfile';
import Axios from 'axios';
import Rating from './Rating';

class Skills extends React.Component {

	constructor() {
		super();
		this.state = {
			events: [],
			user: null
		};

		this.getProfile = this.getProfile.bind(this);

		this.getProfile(4);
	}

	getProfile(idUser) {
		var selfThis = this;
		Axios.get('http://localhost:4000/user/' + idUser)
			.then(function(response) {
				selfThis.setState({
				 	user: response.data[0]
				});
			})
			.catch(error => console.log(error));
	}

	changeInput(rating, skill) {
		let skills = this.state.user.skills;
		skills.forEach((h) => {
			if (h.id = skill.id) {
				h.rating = rating
			}
		});
		this.setState({skills});
	}

	showSkills(skill) {
		return (<Rating key={skill.id} skill={skill} onChangeInput={(rating, skill) => this.changeInput(rating, skill)}/>);
	}

	render() {
		return (
			<div>
				<HeaderProfile/>
				{this.state.user ? this.state.user.skills.map((skill) => this.showSkills(skill) ): null}
			</div>
		);
	}

}

export default Skills;
