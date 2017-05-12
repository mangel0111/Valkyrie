import React from 'react';
import HeaderProfile from './HeaderProfile';
import Axios from 'axios';
import Rating from './Rating';

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
		this.getProfile(1);
		return (
			<div>
				<HeaderProfile/>
				{this.state.habilities.map((hability) => this.showHabilities(hability))}
			</div>
		);
	}

}

export default Skills;
