import React, {Component} from 'react';

class RegressionTest extends React.Component {

	constructor() {
		super();
	}

	render() {
		let styles = {
			container: {
				'margin': '20px',
				'padding': '5px'
			},
			details: {
				'margin-left': '10px'
			}
		}
		debugger;
		return (
			<div style={styles.container}>
				<h3><strong>Name:</strong>{this.props.regression.appDirectVersion}</h3>
				<div style={styles.details}>
					<h4>
						<stron>Suite:</stron>
						{this.props.regression.suite}</h4>
					<h4>
						<stron>Duration:</stron>
						{this.props.regression.duration}</h4>
					<h4>
						<stron>Date:</stron>
						{this.props.regression.created_at}</h4>
					<h4>
						<stron>Name:</stron>
						{this.props.regression.createdBy.profile.name}</h4>
					<h4>
						<stron>Status:</stron>
						{this.props.regression.createdBy.state}</h4>
				</div>
			</div>
		);
	}
}

export default RegressionTest;
