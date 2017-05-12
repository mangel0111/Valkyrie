import React from 'react';
import Avatar from 'material-ui/Avatar';
import HeaderProfile from './HeaderProfile';
import Rating from './Rating';
import Navigation from './Navigation';

class Skills extends React.Component {

	constructor() {
		super();
		this.state = {
			events: [],
			skills: [{
				id: 1,
				name: "React",
				value: 3,
				code: 'react'
			}, {
				id: 2,
				name: "Java",
				value: 2,
				code: 'java'
			}, {
				id: 5,
				name: "SQL",
				value: 2,
				code: 'sql'
			}]
		};
	}


	changeInput(value, skill) {
		let skills = this.state.skills;
		skills.forEach((h) => {
			if (h.id === skill.id) {
				h.value = value
			}
		});
		this.setState({skills});
	}

	showSkill(skill) {
		return (<Rating key={skill.code} skill={skill} onChangeInput={(value, skill) => this.changeInput(value, skill)}/>);
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
