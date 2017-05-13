import React, { Component } from 'react';
import Axios from 'axios';
import Office from './Office';

class Dashboard extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			offices: [],
			users: []
		};

		this.getOffices = this.getOffices.bind(this);
		this.getOffices();
	}

	getOffices() {
		var selfThis = this;
		Axios.get('http://localhost:4000/offices')
			.then(function (response) {
				selfThis.setState({
					offices: response.data
				});
			})
			.catch(error => console.log(error));
	}

	getPeople() {
		var selfThis = this;
		Axios.get('http://localhost:4000/users')
			.then(function (response) {
				selfThis.setState({
					users: response.data
				});
			})
			.catch(error => console.log(error));
	}

	renderOffice(key) {
		return (<Office office={key} key={key.id} />);
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

		return (
			<div style={styles.container}>
				<h1>Appdirect Offices</h1>
				<p className={styles.description}>Select the office to see relevatn information about they!</p>
				<div className="distribution-map">
					<img role="presentation" src="/images/WorldMapImage.png" />
					{this.state.offices.map((office) => this.renderOffice(office))}
				</div>
			</div>
		)
	}
}

export default Dashboard;
