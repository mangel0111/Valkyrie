import React, { Component } from 'react';

class Office extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			shouldShow: false,
			shouldShowPeople: false,
			isSelected: false
		}

		this.showPeople = this.showPeople.bind(this);
		this.showEvents = this.showEvents.bind(this);
	}

	createEvent(event) {
		return (
			<li key={`event${event.id}`}>
				<h3>{event.name}(<span>{event.date})</span></h3>
			</li>);
	}

	createUser(user) {
		debugger;
		return (
			<li key={`user${user.id}`}>
				<h3>{`${user.firstName} ${user.lastName}`}</h3>
			</li>);
	}

	getRemainingDays(dateNextHoliday) {
		let dateHoliday = dateNextHoliday.date.split("-");
		let dateEnd = new Date(dateHoliday[2], dateHoliday[1] - 1, dateHoliday[0]);
		let dateStart = new Date();
		return Math.ceil(((dateEnd - dateStart) / 86400) / 1000);
	}

	getEvents() {
		const shouldShow = this.state.shouldShow;
		const {office} = this.props;

		if (shouldShow) {
			return (
				<div className="contentEvent" onMouseLeave={this.showEvents}>
					<div className="">
						<h2>{`${office.name} events!`}</h2>
						<ul>
							{office.events.map((event) => this.createEvent(event))}
						</ul>
					</div>
				</div>);
		}
		return null;
	}

	getPeople() {
		const shouldShow = this.state.shouldShowPeople;
		const {users, office} = this.props;

		if (shouldShow) {
			return (
				<div className="contentEvent" onMouseLeave={this.showPeople}>
					<div className="">
						<h2>{`${office.name} People!`}</h2>
						<ul>
							{users.map((user) => this.createUser(user))}
						</ul>
					</div>
				</div>);
		}
		return null;
	}

	showEvents() {
		this.setState({ shouldShow: !this.state.shouldShow });
	}

	showPeople() {
		this.setState({ shouldShowPeople: !this.state.shouldShowPeople });
	} 
	
	getCurrentTime(office) {
		const currentdate = new Date();
		let time = currentdate.getHours() + ":" + currentdate.getMinutes();

		switch (office.id) {
			case 'MT':
				time = (currentdate.getHours() - 1) + ":" + currentdate.getMinutes();
				break;
			case 'PN':
				time = (currentdate.getHours() + 9) + ":" + (currentdate.getMinutes() + 30);
				break;
			case 'MU':
				time = (currentdate.getHours() + 5) + ":" + (currentdate.getMinutes());
				break;
			case 'SF':
				time = (currentdate.getHours() - 4) + ":" + currentdate.getMinutes();
				break;
			default:
				break;
		}

		return (<span>{time}</span>);
	}

	render() {
		const {office} = this.props;
			return (
				<button key={office.id} className="map-point"
					onClick={() => this.selectOffice()}
					style={office.position}>
					<div className="content">
						<div className="centered-y">
							<h2>{office.name}</h2>
							<span>{this.getCurrentTime(office)}</span>
							<p>{office.description}</p>
							<br />
							<a onClick={() => this.showEvents()}>See events</a>
							<br />
							<a onClick={() => this.showPeople()}>See People</a>
						</div>
					</div>
					{this.getEvents()}
					{this.getPeople()}
				</button>
			);
	}
}

export default Office;

