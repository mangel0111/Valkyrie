import React from 'react';
import Dashboard from './calendar/components/Dashboard';

class Calendar extends React.Component {

    componentWillMount() {
      console.log(localStorage.getItem('accessToken'));
    }

    render() {
        return (
            <div className='bodyContainer'>
                <Dashboard />
            </div>
        )
    }

}

export default Calendar;
