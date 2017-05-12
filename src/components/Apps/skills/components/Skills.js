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
			habilities: [{
				id: 1,
				name: "React",
				value: 3
			}]
		};
	}

	changeInput(value, hability) {
		let habilities = this.state.habilities;
		habilities.forEach((h) => {
			if (h.id = hability.id) {
				h.value = value
			}
		});
		this.setState({habilities});
	}

	showHabilities(hability) {
		return (<Rating key={hability.id} hability={hability} onChangeInput={(value, hability) => this.changeInput(value, hability)}/>);
	}

	render() {
		return (
			<div>
				<HeaderProfile/>
				{this.state.habilities.map((hability) => this.showHabilities(hability))}
				<Navigation/>
			</div>
		);
	}

}

export default Skills;
