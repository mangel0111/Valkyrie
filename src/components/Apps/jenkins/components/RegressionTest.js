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
			jenkinsTitle: {
				padding: '15px'
			},
			container: {
				padding: '15px',
				border: '1px solid rgba(204, 51, 51, 0.8)',
				borderTop: '15px solid rgba(204, 51, 51, 0.7)',
				borderRadius: '5px',
				marginBottom: '10px'
			},
			details: {
				color: 'black'
			},
			title: {
				fontSize: '18px',
				color: 'black',
				width: '70px',
				display: 'inline-block',
				padding: '5px 15px',
				lineHeight: '20px'
			},
			dataColumn: {
				position: 'absolute',
				left: '100px',
				padding: '5px 15px',
				lineHeight: '20px',
				width: '550px',

				whiteSpace: 'nowrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
			},
			dataContainer: {
				position: 'relative'
			}
		}
		return (
			<div style={styles.container}>
				<h3 style={styles.jenkinsTitle}>{this.props.regression.name}</h3>
				<div style={styles.details}>
					<h4 style={styles.dataContainer}>
						<span style={styles.title}>Go to:</span>
						<a style={styles.dataColumn} href={this.props.regression.url} target="_blank">Results!</a>{}
					</h4>
					<h4 style={styles.dataContainer}>
						<span style={styles.title}>Status:</span>
						<span style={styles.dataColumn}>{this.getIconE2E()}</span>
					</h4>
				</div>
			</div>
		);
	}
}

export default RegressionTest;

