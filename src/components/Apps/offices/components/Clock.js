import React, { Component } from 'react';
import moment from 'moment-timezone';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDate: this.getMoment(this.props.config.timezone, this.props.config.locale)
        };
    }

    componentDidMount() {
        const tic = setInterval(() => {
            this.setState({
                currentDate: this.getMoment(this.props.config.timezone, this.props.config.locale)
            });
        }, 1000);

        /* Save interval to state otherwise it will not survive render cycle */
        this.setState({ tic });
    }

    componentWillUnmount() {
        clearInterval(this.state.tic);
    }

    getMoment(timezone, locale) {
        moment.locale(locale);
        const now = moment().tz(timezone);
        const tz = moment().tz(timezone).format('z');

        // Day
        const weekdays = moment.weekdays();
        const dayName = weekdays[now.get('day')];
        const day = now.get('date');

        // Month
        const months = moment.months();
        const monthName = months[now.month()];
        const month = now.get('month');

        // Year
        const year = now.get('year');

        // Time
        let hours = now.get('hour');
        const meridiem = (hours < 12) ? 'AM' : 'PM';
        hours = (this.props.config.meridiem && meridiem === 'PM') ? (hours - 12) : hours;
        const minutes = now.get('minute');
        const seconds = now.get('second');

        // return time object
        return {
            day,
            dayName,
            month,
            monthName,
            year,
            hours: (hours < 10 ? '0' : '') + hours,
            minutes: (minutes < 10 ? '0' : '') + minutes,
            seconds: (seconds < 10 ? '0' : '') + seconds,
            meridiem,
            timezone: tz
        };
    }

    render() {
        const {config, name} = this.props;
        const {
            timezone,
            hours,
            minutes,
            seconds,
            meridiem,
            dayName,
            day,
            monthName,
            year,
        } = this.state.currentDate;

        return (
            <div className='clock' style={config.styles.positionClock}>
                <h1 className="town">{name}</h1>
                <ul className="time">
                    <li className="hours">{hours}</li>
                    <li className="points">:</li>
                    <li className="minutes">{minutes}</li>
                    <li className="sectional">
                        <sup className="seconds">{seconds}</sup>
                    </li>
                </ul>
                <h1 className="date">{dayName} {day} {monthName} {year}</h1>
            </div>
        )
    }
}

export default Clock;
