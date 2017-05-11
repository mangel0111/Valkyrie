import React, {Component} from 'react';

class Office extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			shouldShow: false
		}

		this.showEvents = this.showEvents.bind(this);
	}

	createEvent(event) {
		return (
			<li key={event.id}>
				<h3>{event.name} (<span>{event.date}</span>)</h3>
			</li>);
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

	showEvents() {
		this.setState({shouldShow: !this.state.shouldShow});
	}

	render() {
		const {office} = this.props;

		return (
			<button key={office.id} className="map-point" style={office.position}>
				<div className="content">
					<div className="centered-y">
						<h2>{office.name}</h2>
						<p>{office.description}</p>
						<a onClick={() => this.showEvents(office)}>See events</a>
					</div>
				</div>
				{this.getEvents()}
			</button>
		)
	}
}

export default Office;

