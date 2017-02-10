import React, {Component} from 'react';

class RegressionTest extends React.Component {

	constructor() {
		super();
	}


	render() {
		let styles = {
			container: {
				'margin': '20px',
				'padding': '5px',
				'border-left': '5px solid blue'
			},
			details: {
				'margin-left': '10px',
				'margin-bottom': '20px',
			}
		}
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
						{this.props.regression.createdBy ? this.props.regression.createdBy.profile.name : 'Master'}</h4>
					<h4>
						<stron>Status:</stron>
						{this.props.regression.state}</h4>
				</div>
			</div>
		);
	}
}

export default RegressionTest;
