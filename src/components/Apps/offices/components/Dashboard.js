import React, { Component } from 'react';
import Axios from 'axios';
import Office from './Office';
import Clock from './Clock';

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            offices: [],
            users: []
        };

        this.getOffices = this.getOffices.bind(this);
        this.getOffices();
        this.getPeople();
    }

    getOffices() {
        var selfThis = this;
        Axios.get('http://localhost:4000/offices')
            .then(function (response) {
                if (response.data.lenght === 0) {
                    this.getOffices();
                }
                selfThis.setState({
                    offices: response.data
                });
            })
            .catch(error => {
                console.log(error);
                this.getOffices();
            });
    }

    getPeople() {
        var selfThis = this;
        Axios.get('http://localhost:4000/users')
            .then(function (response) {
                selfThis.setState({
                    users: response.data
                });
            })
            .catch(error => {
                console.log(error);
                this.getPeople();
            });
    }

    renderOffice(key) {
        const users = this.state.users;
        let officeUsers = [];
        users.forEach((user) => (user.office === key.id) ? officeUsers.push(user) : null);
        return (
            <Office
                office={key}
                users={officeUsers}
                key={key.id} />);
    }

    render() {
        const fontStackMain = `"Roboto", $font-stack-safe`;

        const styles = {
            'container': {
                'background': "#f5f5f",
                'width': '99%',
                'minHeight': '700px',
                'padding': '10px',
                'fontFamily': fontStackMain,
                'textAlign': 'center'
            },
            description: {
                'max-width': '600px',
                margin: '0 auto',
                color: 'transparentize($color-foreground, 0.3)'
            }
        };
        const config = {
            timezone: 'America/Buenos_Aires',
            locale: 'en',
            styles: {
                "positionClock": {
                    background: '#04678E',
                    position: 'fixed',
                    left: '0',
                    top: '40%',
                    'minWidth': '168px',
                    'maxWidth': '168px'
                }
            }
        }
        return (
            <div style={styles.container} >
                <h1> Appdirect Offices </h1>
                <p className={styles.description} > Select the office to see relevatn information about they! </p>
                <div className="distribution-map" >
                    <img role="presentation" src="/images/WorldMapImage.png" />
                    {this.state.offices.map((office) => this.renderOffice(office))}
                    <Clock config={config} name="Buenos Aires" />
                </div>
            </div>
        )
    }
}

export default Dashboard;
