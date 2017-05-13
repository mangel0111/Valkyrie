import React from 'react';
import HeaderProfile from './HeaderProfile';
import Axios from 'axios';
import Rating from 'react-rating';

class Skills extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			events: [],
			user: null,
			addSkill: false,
			nextSkill: '',
			reload: false
		};


		this.getProfile = this.getProfile.bind(this);
		this.getProfile();
	}

	getProfile() {
		const {userEmail} = this.props;
		var selfThis = this;
		let email = localStorage.getItem('email');
		if (userEmail) {
			email = userEmail;
		}
		Axios.get('http://localhost:4000/userByEmail/' + email)
			.then(function (response) {
				selfThis.setState({
					user: response.data
				});
			})
			.catch(error => console.log(error));
	}

	changeInput(rate, skill) {
		const {userEmail} = this.props;
		if (userEmail === undefined && this.state.user) {
			let skills = this.state.user.skills;
			skills.forEach((h) => {
				if (h.id === skill.id) {
					h.rating = rate
				}
			});
			this.setState({ skills });
		} else {
			this.setState({ reload: !this.state.reload });
		}
	}

	removeSkill(skillId) {

		let skills = this.state.user.skills;
		skills.forEach((h, index, object) => {
			if (h.id === skillId) {
				object.splice(index, 1);
			}
		});
		this.setState({ skills });
	}

	showSkill(skill) {

		const {userEmail} = this.props;
		return (
			<div className="ratingContainer" key={skill.code}>
				<h3>{skill.name}	{userEmail === undefined ? (<a onClick={() => this.removeSkill(skill.id)}>x</a>) : null}</h3>
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
		this.setState({ nextSkill: e.target.value });
	}

	requestSkill() {
		this.setState({
			addSkill: true
		})
	}

	render() {
		const {userEmail} = this.props;
		return (
			<div>
				<HeaderProfile userProfile={this.state.user} />
				{this.state.user ? this.state.user.skills.map((skill) => this.showSkill(skill)) : null}
				{this.state.addSkill ? (
					<div className="addSkill">
						<input
							type="text"
							value={this.state.nextSkill}
							onChange={(e) => this.handleChange(e)} />
						<a onClick={() => this.addSkill()} className="btn btn-custom">+</a>
					</div>) : null}
				{userEmail === undefined ? (<button className="btn btn-custom" onClick={() => this.requestSkill()}>Add Skill</button>) : null}

			</div>
		);
	}

}

export default Skills;
