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


		switch (this.props.regression.state) {
			case 'SUCCESS':
				return (<span style={styles.sucess}>
					{this.props.regression.state}</span>);
			case 'FAILURE':
				return (<span style={styles.failure}>
					{this.props.regression.state}</span>);
			case 'UNSTABLE':
				return (<span style={styles.unstable}>
					{this.props.regression.state}</span>);
			case 'RUNNING':
				return (<span style={styles.running}>
					{this.props.regression.state}</span>);
			default:
				return (<span>
					{this.props.regression.state}
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
				<h3><strong>Name:</strong>{this.props.regression.appDirectVersion}</h3>
				<div style={styles.details}>
					<h4>
						<stron style={styles.title}>Suite:</stron>
						{this.props.regression.suite}</h4>
					<h4>
						<stron style={styles.title}>Duration:</stron>
						{this.props.regression.duration}</h4>
					<h4>
						<stron style={styles.title}>Date:</stron>
						{this.props.regression.created_at}</h4>
					<h4>
						<stron style={styles.title}>Name:</stron>
						{this.props.regression.createdBy ? this.props.regression.createdBy.profile.name : 'Master'}</h4>
					<h4>
						<stron style={styles.title}>Status:</stron>
						{this.getIconE2E()}</h4>
				</div>
			</div>
		);
	}
}

export default RegressionTest;
