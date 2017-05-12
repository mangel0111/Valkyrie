import React, {Component} from 'react';

class Dashboard extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			submitted: false,
			food: null,
			foods: [{
				id: 1,
				name: "Chinesse",
				votes: 0
			}, {
				id: 2,
				name: "Mexican",
				votes: 0
			}, {
				id: 3,
				name: "Japanese",
				votes: 0
			}, {
				id: 4,
				name: "Empanadas",
				votes: 0
			}]
		};
	}

	showFood(food) {
		const name = `poll-choice${food.id}`;
		if (!this.state.submitted) {
			return (
				<li key={food.id}>
					<input id={name} type="radio" name="radio" onChange={() => {
						this.setState({food: food});
					}}/>
					<label htmlFor={name}>{food.name}</label>
				</li>);
		}
		return null;
	}

	showResults(food) {
		let total = 0;
		this.state.foods.map((f) => {
			total = total + f.votes
		});

		let porct = Math.round(((food.votes * 100) / total) * 100) / 100;
		porct = `${porct}%`;

		const style = {
			innerBar: {
				"width": porct
			}
		};

		if (this.state.submitted) {
			return (
				<li>
					<div className="results">
						<span className="respond">{food.name}</span>
						<span>({food.votes})</span>
						<span className="percentage">{porct}</span>
					</div>
					<div className="out-bar">
						<div className="inner-bar" style={style.innerBar}/>
					</div>
				</li>);
		}
		return null;
	}

	changeSubmittedState() {
		const foods = this.state.foods;
		foods.map((f) => {
			if (f.id === this.state.food.id) {
				f.votes = f.votes + 1;
			}
		});
		this.setState({
			submitted: !this.state.submitted,
			food: null
		});
	}

	render() {
		return (
			<div className='poll-block'>
				<h2>What do you wanna eat?</h2>
				<ul className="poll-vote-list">
					{this.state.foods.map((food) => this.showFood(food))}
				</ul>
				<ul className="poll-results-list">
					{this.state.foods.map((food) => this.showResults(food))}
				</ul>
				<div className="vote-button">
					<a className="results-trigger btn btn-custom" href="#" onClick={() => this.changeSubmittedState()}><span>{
						this.state.submitted ? 'Vote Again' : 'Submit'
					}</span></a>
				</div>
			</div>
		);
	}
}

export default Dashboard;
