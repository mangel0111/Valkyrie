import React from 'react';
import ReactDom from 'react-dom'
import Moment from 'moment'
import BigCalendar from 'react-big-calendar'
import Axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(Moment)
);

class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      calendars : [],
      events : []
    };
  }

  componentWillMount() {
    let instace = this;
    instace.state.calendars = [];
    Axios.get('https://www.googleapis.com/calendar/v3/users/me/calendarList?access_token=' + localStorage.getItem('accessToken'))
		.then(function (response) {
      response.data.items.forEach((item) => {
        instace.state.calendars.push({
          value: item.id,
          label: item.summary
        });
      });
		});
  }

  onChange(val) {
    let instace = this;
    instace.state.events = [];
    Axios.get('https://www.googleapis.com/calendar/v3/calendars/'  + val.value + '/events?access_token=' + localStorage.getItem('accessToken'))
		.then(function (response) {
      instace.state.events = response.data.items;
		});
  }

  render() {
    return (
      <div>
        <br />
        <Select
          options={this.state.calendars}
          onChange={this.onChange.bind(this)}
        />
        <br />
        <BigCalendar
          events={this.state.events}
          style={{minHeight: 550}}
        />
      </div>
    );
  }

}

export default Dashboard;
