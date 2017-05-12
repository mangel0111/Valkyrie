import React from 'react';
import HeaderProfile from './HeaderProfile';
import Axios from 'axios';
import Navigation from './Navigation';
import Rating from 'react-rating';

class Skills extends React.Component {

	constructor() {
		super();
		this.state = {
			events: [],
			habilities: [
				{
					id: 1,
					name: "React",
					value: 3
				},
				{
					id: 2,
					name: "Angular",
					value: 3
				},
				{
					id: 3,
					name: "PHP",
					value: 3
				},
			]
		};
	}

	changeInput(rate, skill) {
		let skills = this.state.skills;
		skills.forEach((h) => {
			if (h.id === skill.id) {
				h.rating = rate
			}
		});
		this.setState({skills});
	}

	showSkill(skill) {
		return (
			<div className="ratingContainer" key={skill.code}>
				<h3>{skill.name}</h3>
				<Rating
					empty="fa fa-star-o fa-2x"
					full="fa fa-star fa-2x"
					fractions={2}
					initialRate={skill.rating}
					onChange={(rate) => {debugger;this.changeInput(rate, skill);}}
				/>
			</div>);
	}

	render() {
		this.getProfile(1);
		return (
			<div>
				<HeaderProfile/>
				{this.state.skills.map((skill) => this.showSkill(skill))}
				<Navigation/>
			</div>
		);
	}

}

export default Skills;
