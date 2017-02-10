import React from 'react';

class RegressionTest extends React.Component {

	constructor() {
		super();
		this.getIconE2E = this.getIconE2E.bind(this);
	}

	getIconE2E() {
		let styles = {
			sucess: {
				'color': 'green'
			},
			unstable: {
				'color': '#BD5D1D'
			},
			running: {
				'color': '#FFCA28'
			},
			failure: {
				'color': 'red'
			}
		}

		switch (this.props.regression.color) {
			case 'aborted':
				return (<span style={styles.failure}>
					ABORTED </span>);
			case 'notbuilt':
				return (<span style={styles.failure}>
				NOT BUILD </span>);
			case 'red':
				return (<span style={styles.failure}>
					FAIL </span>);
			case 'disabled':
				return (<span style={styles.unstable}>
					DISABLED</span>);
			case 'blue':
				return (<span style={styles.sucess}>
					Active</span>);

			default:
				return (<span>
					{this.props.regression.color}
				</span>);
		}
	}

	render() {
		let styles = {
			container: {
				'margin': '20px',
				'padding': '5px',
				'border-left': '5px solid blue'
			},
			details: {
				'border-left': '1px solid gray',
				'padding': '10px',
				'margin-left': '5px',
				'color': '#808080'
			},
			title: {
				'font-size': '18px',
				'color': 'black',
				'margin-right': '5px'
			}
		}
		return (
			<div style={styles.container}>
				<h3><strong>Name:</strong> <span>{this.props.regression.name}</span></h3>
				<div style={styles.details}>
					<h4><strong style={styles.title}>Go to:</strong>
						<a href={this.props.regression.url} target="_blank">Results!</a>{}</h4>
					<h4>
						<strong style={styles.title}>Status:</strong>
						{this.getIconE2E()}</h4>
				</div>
			</div>
		);
	}
}

export default RegressionTest;

