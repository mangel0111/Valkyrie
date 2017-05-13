import React from 'react';
import Moment from 'moment';
import BigCalendar from 'react-big-calendar';
import Axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(
	BigCalendar.momentLocalizer(Moment)
);

class Dashboard extends React.Component {

	constructor() {
		super();
		this.state = {
			events: []
		};
	}

	componentWillMount() {
		Axios.get('https://www.googleapis.com/calendar/v3/users/me/calendarList?access_token=' + localStorage.getItem('accessToken')).then(function (response) {
			let data = [];
			response.data.items.forEach((item) => {
				Axios.get('https://www.googleapis.com/calendar/v3/calendars/' + item.id + '/events?showDeleted=false&access_token=' + localStorage.getItem('accessToken')).then(function (subresponse) {
					subresponse.data.items.forEach((event) => {
						if (event.status !== "cancelled") {
							data.push({
								start: event.start.date || event.start.dateTime,
								end: event.end.date || event.end.dateTime,
								title: event.summary,
							});
						}
					});
					this.setState({
						events: data
					});
				}.bind(this));
			});
		}.bind(this));
	}

	render() {
		return (
			<div>
				<br />
				<BigCalendar
					events={this.state.events}
					style={{ minHeight: 550 }}
					onSelectEvent={event => alert(event.title)}
					/>
			</div>
		);
	}

}

export default Dashboard;
