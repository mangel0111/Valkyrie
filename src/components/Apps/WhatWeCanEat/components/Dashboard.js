import React, {Component} from 'react';

class Dashboard extends Component {
	constructor(props, context) {
		super(props, context);
	}

	getFood() {
		return [{
			id: 1,
			name: "Chinesse",
			votes: 34
		},
			{
				id: 2,
				name: "Mexican",
				votes: 34
			},
			{
				id: 3,
				name: "Japanese",
				votes: 34
			},
			{
				id: 4,
				name: "Empanadas",
				votes: 34
			}];
	}

	showFood(food) {
		const name = `poll-choice${food.id}`;
		return (
			<li key={food.id}>
				<input id={name} type="radio" name="radio"/>
				<label htmlFor={name}>{food.name}</label>
			</li>);
	}

	render() {
		return (
			<div className='poll-block'>
				<h2>What do you wanna eat?</h2>
				<ul className="poll-vote-list">
					{this.getFood().map((food) => this.showFood(food))}
				</ul>
				<div className="vote-button">
					<a className="results-trigger btn btn-custom" href="#"><span>Submit</span></a>
				</div>
			</div>
		);
	}
}

export default Dashboard;
