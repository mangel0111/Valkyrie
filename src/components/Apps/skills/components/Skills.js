import React from 'react';
import Avatar from 'material-ui/Avatar';
import HeaderProfile from './HeaderProfile';
import Rating from './Rating';
import axios from 'axios';

class Skills extends React.Component {

	constructor() {
		super();
		this.state = {
			events: [],
			habilities: [{
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
		this.getHabilities = this.getHabilities.bind(this);
		this.getHabilities();
	}

	getHabilities() {
		var selfThis = this;
		const URL_TO_FETCH = 'http://localhost:4000/skills';
		debugger;
		axios.get(URL_TO_FETCH)
			.then(function(response) {
				debugger;

			})
			.catch(error => console.log(error));
	}

	changeInput(value, hability) {
		let habilities = this.state.habilities;
		habilities.forEach((h) => {
			if (h.id === hability.id) {
				h.value = value
			}
		});
		this.setState({habilities});
	}

	showHabilities(hability) {
		return (<Rating key={hability.code} hability={hability} onChangeInput={(value, hability) => this.changeInput(value, hability)}/>);
	}

	render() {
		return (
			<div>
				<HeaderProfile/>
				{this.state.habilities.map((hability) => this.showHabilities(hability))}
			</div>
		);
	}

}

export default Skills;
