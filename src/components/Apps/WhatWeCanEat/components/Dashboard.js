import React, {Component} from 'react';
import axios from 'axios';

class Dashboard extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			submitted: false,
			food: null,
			foods: []
		};

		this.getFoods = this.getFoods.bind(this);
		this.getFoods();
	}

	getFoods() {
		var selfThis = this;

		axios.get('http://localhost:4000/foods')
			.then(function(response) {
				selfThis.setState({foods: response.data});
			})
			.catch(error => console.log(error));
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


		if (!this.state.submitted) {
			foods.map((f) => {
				if(this.state.food) {
					if (f.id === this.state.food.id) {
						f.votes = f.votes + 1;
					}
				}
			});
		} else {
			this.getFoods();
		}

		this.setState({
			submitted: !this.state.submitted && this.state.food,
			food: null
		});
	}

	render() {
		return (
			<div className='poll-block'>
				<h2><img src="/images/foodspon.png"></img>What do you wanna eat?</h2>
				{this.state.foods.length > 0 ? (
						<div className="bodyContainerWhite fadeOut">
							<ul className="poll-vote-list">
								{this.state.foods.map((food) => this.showFood(food))}
							</ul>
							< ul className="poll-results-list fadeOut">
								{this.state.foods.map((food) => this.showResults(food))}
							</ul>
							<div className="vote-button">
								<a className="results-trigger btn btn-custom" href="#" onClick={() => this.changeSubmittedState()}><span>{
									this.state.submitted ? 'Vote Again' : 'Submit'
								}</span></a>
							</div>
						</div>) : (
						<div>
							<p>There's not Elections setted for this week. Sorry</p>
							<div className="bodyContainer images">
								<img src="/images/sad-icon.png"></img>
							</div>
						</div>)}
			</div>
		);
	}
}

export default Dashboard;
