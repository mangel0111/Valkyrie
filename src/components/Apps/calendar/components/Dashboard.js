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
      events : []
    };
  }

  componentWillMount() {
    let instance = this;
    Axios.get('https://www.googleapis.com/calendar/v3/users/me/calendarList?access_token=' + localStorage.getItem('accessToken')).then(function (response) {
      let data = [];
      response.data.items.forEach((item) => {
        Axios.get('https://www.googleapis.com/calendar/v3/calendars/'  + item.id + '/events?access_token=' + localStorage.getItem('accessToken')).then(function (response) {
          response.data.items.forEach((event) => {
            data.push({
              start: event.start.date || event.start.dateTime,
              end: event.end.date || event.end.dateTime,
              title: event.summary,
            });
          });
        });
      });
      instance.setState({
        events : data
      });
    });
  }

  render() {
    return (
      <div>
        <br />
        <BigCalendar
          events={this.state.events}
          style={{minHeight: 550}}
          onSelectEvent={event => alert(event.title)}
        />
      </div>
    );
  }

}

export default Dashboard;
