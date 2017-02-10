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
				'color': 'rgb(255, 182, 40)'
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
				padding: '15px',
				borderTop: '15px solid rgba(0, 0, 125, 0.3)',
				borderRadius: '5px',
				backgroundColor: 'rgba(160, 195, 255, 0.22)'
			},
			details: {

				color: 'black'
			},
			title: {
				fontSize: '18px',
				color: 'black',
				width: '70px',
				display: 'inline-block',
				backgroundColor: 'rgba(155,155,155,0.5)',
				padding: '5px 15px',
				lineHeight: '20px'
			},
			dataColumn: {
				position: 'absolute',
				left: '100px',
				padding: '5px 15px',
				lineHeight: '20px',
				backgroundColor: 'rgba(255,255,255,1)',
				width: '550px',

				whiteSpace: 'nowrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
			},
			dataContainer: {
				position: 'relative'
			}
		}
		let link = "https://e2e.appdirect.tools/run/" + this.props.regression.id;
		return (
			<div style={styles.container}>
				<h3>{this.props.regression.appDirectVersion}</h3>
				<div style={styles.details}>
					<h4 style={styles.dataContainer}>
						<span style={styles.title}>Suite</span>
						<span style={styles.dataColumn}>{this.props.regression.suite}</span>
					</h4>
					<h4 style={styles.dataContainer}>
						<span style={styles.title}>Duration</span>
						<span style={styles.dataColumn}>{this.props.regression.duration}</span>
					</h4>
					<h4 style={styles.dataContainer}>
						<span style={styles.title}>Date</span>
						<span style={styles.dataColumn}>{this.props.regression.created_at}</span>
					</h4>
					<h4 style={styles.dataContainer}>
						<span style={styles.title}>Name</span>
						<span style={styles.dataColumn}>{this.props.regression.createdBy ? this.props.regression.createdBy.profile.name : 'Master'}</span>
					</h4>
					<h4 style={styles.dataContainer}>
						<span style={styles.title}>Status</span>
						<span style={styles.dataColumn}>{this.getIconE2E()}</span>
					</h4>
					<h4 style={styles.dataContainer}>
						<span style={styles.title}>Link</span>
						<a style={styles.dataColumn} href={link} target="_blank">{this.props.regression.id}</a>
					</h4>
				</div>
			</div>
		);
	}
}

export default RegressionTest;
