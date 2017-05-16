import React, { Component } from 'react';
import moment from 'moment-timezone';

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
			<li className="listItemOffice" key={`event${event.id}`}>
				<h3>{event.name}(<span>{event.date})</span></h3>
			</li>);
	}

	createUser(user) {
		return (
			<li className="listItemOffice" key={`user${user.id}`}>
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
		let timeZone = "America/Argentina/Buenos_Aires";

		switch (office.id) {
			case 'MT':
				timeZone = "America/Montreal";
				break;
			case 'PN':
				timeZone = "Asia/Calcutta";
				break;
			case 'MU':
				timeZone = "Europe/Berlin";
				break;
			case 'SF':
				timeZone = "America/Los_Angeles";
				break;
			default:
				break;
		}

		let time = moment().tz(timeZone).format();

		return (<span>{time}</span>);
	}

	render() {
		const {office} = this.props;
		return (
			<button key={office.id} className="map-point"
				style={office.position}>
				<div className="content">
					<div className="centered-y">
						<h2>{office.name}</h2>
						<div className="timeZone">{office.address}</div>
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

