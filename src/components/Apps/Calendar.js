import React from 'react';
import Dashboard from './calendar/components/Dashboard';

class Calendar extends React.Component {

    componentWillMount() {
      console.log(localStorage.getItem('accessToken'));
      /*
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('uid', response.profileObj.googleId);
      localStorage.setItem('tokenId', response.tokenId);
      localStorage.setItem('email', response.profileObj.email);*/
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
