import React from 'react';
import Avatar from 'material-ui/Avatar';
import HeaderProfile from './HeaderProfile';
import Navigation from './Navigation';
import Rating from 'react-rating';

class Skills extends React.Component {

	constructor() {
		super();
		this.state = {
			events: [],
			skills: [{
				id: 1,
				name: "React",
				rating: 3,
				code: 'react'
			}, {
				id: 2,
				name: "Java",
				rating: 2,
				code: 'java'
			}, {
				id: 5,
				name: "SQL",
				rating: 2,
				code: 'sql'
			}]
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
