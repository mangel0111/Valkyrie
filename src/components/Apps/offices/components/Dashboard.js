import React, {Component} from 'react';
import Office from './Office';

class Dashboard extends Component {
	constructor(props, context) {
		super(props, context);
	}

	getOffices() {
		return [
			{
				id: "BA",
				position: {
					"top": "80%",
					"left": "32%"
				},
				name: "Buenos Aires",
				description: "The best office ever",
				events: [{
					id: 0,
					name: "Revolutionary Day",
					date: "25-05-2017"
				}, {
					id: 3,
					name: "Maradona Birthdays",
					date: "30-10-2017"
				}, {
					id: 4,
					name: "Mate's Day",
					date: "30-01-2017"
				}, {
					id: 1,
					name: "Christmas",
					date: "25-12-2017"
				}, {
					id: 2,
					name: "New Year",
					date: "01-01-2018"
				}]
			},
			{
				id: "SF",
				position: {
					"top": "42%",
					"left": "17%"
				},
				name: "San Francisco",
				description: "Is where the money comes!",
				events: [{
					id: 1,
					name: "Black Friday",
					date: "24-11-2017"
				}, {
					id: 1,
					name: "Christmas",
					date: "25-12-2017"
				}, {
					id: 2,
					name: "New Year",
					date: "01-01-2018"
				}]
			},
			{
				id: "PN",
				position: {
					"top": "50%",
					"left": "69%"
				},
				name: "Pune",
				description: "The dancing office",
				events: [
					{
						id: 3,
						name: "Apu's Birthday",
						date: "5-06-2017"
					}, {
						id: 1,
						name: "Christmas",
						date: "25-12-2017"
					}, {
						id: 2,
						name: "New Year",
						date: "01-01-2018"
					}
				]
			},
			{
				id: "MT",
				position: {
					"top": "37%",
					"left": "28%"
				},
				name: "Montreal",
				description: "The guys who loves curling",
				events: [{
					id: 4,
					name: "Canadian Day",
					date: "01-07-2017"
				},{
					id: 1,
					name: "Christmas",
					date: "25-12-2017"
				}, {
					id: 2,
					name: "New Year",
					date: "01-01-2018"
				},{
					id: 3,
					name: "Curling Day",
					date: "23-02-2018"
				}]
			}
		];
	}

	renderOffice(key) {
		return (<Office office={key} key={key.id}/>);
	}

	render() {
		const fontStackSafe = 'Helvetica, sans-serif';
		const fontStackMain = `"Roboto", $font-stack-safe`;
		const fontStackHighlight = `"Roboto Condensed", $font-stack-safe`;
		const offices = this.getOffices();

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
					<img src="/images/WorldMapImage.png"/>
					{offices.map((office) => this.renderOffice(office))}
				</div>
			</div>
		)
	}
}

export default  Dashboard;
