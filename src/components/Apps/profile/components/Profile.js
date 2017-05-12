import React from 'react';
import HeaderProfile from './HeaderProfile';
import Axios from 'axios';
import Rating from 'react-rating';

class Skills extends React.Component {

	constructor() {
		super();
		this.state = {
			events: [],
			user: null,
			addSkill: false,
			nextSkill: ''
		};

		this.getProfile = this.getProfile.bind(this);
		this.getProfile(4);
	}

	getProfile(idUser) {
		var selfThis = this;
		Axios.get('http://localhost:4000/user/' + idUser)
			.then(function(response) {
				selfThis.setState({
					user: response.data
				});
			})
			.catch(error => console.log(error));
	}

	changeInput(rate, skill) {
		if(this.state.user) {
			let skills = this.state.user.skills;
			skills.forEach((h) => {
				if (h.id === skill.id) {
					h.rating = rate
				}
			});
			this.setState({skills});
		}
	}

	removeSkill(skillId) {
		let skills = this.state.user.skills;
		skills.forEach((h, index, object) => {
			if (h.id === skillId) {
				object.splice(index, 1);
			}
		});
		this.setState({skills});
	}

	showSkill(skill) {
		return (
			<div className="ratingContainer" key={skill.code}>
				<h3>{skill.name}<a onClick={() => this.removeSkill(skill.id)}>x</a></h3>
				<Rating
					empty="fa fa-star-o fa-2x"
					full="fa fa-star fa-2x"
					fractions={2}
					initialRate={skill.rating}
					onChange={(rate) => this.changeInput(rate, skill)}
				/>
			</div>);
	}

	addSkill() {
		let skills = this.state.user.skills;

		skills.push({
			name: this.state.nextSkill,
			rating: 0,
			code: this.state.nextSkill
		});
		this.setState({
			skills,
			addSkill: false,
			nextSkill: null
		});
	}

	handleChange(e) {
		this.setState({nextSkill: e.target.value});
	}

	requestSkill() {
		this.setState({
			addSkill: true
		})
	}

	render() {
		return (
			<div>
				<HeaderProfile userProfile={this.state.user}/>
				{this.state.user ? this.state.user.skills.map((skill) => this.showSkill(skill)) : null}
				{this.state.addSkill ? (
						<div className="addSkill">
							<input
								type="text"
								value={this.state.nextSkill}
								onChange={(e) => this.handleChange(e)}/>
							<a onClick={() => this.addSkill()} className="btn btn-custom">+</a>
						</div>) : null}
				<button className="btn btn-custom" onClick={() => this.requestSkill()}>Add Skill</button>
			</div>
		);
	}

}

export default Skills;
