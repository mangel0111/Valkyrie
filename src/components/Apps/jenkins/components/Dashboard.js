import React, {Component} from 'react';
import axios from 'axios';
import RegressionTest from './RegressionTest';

const URL_TO_FETCH = 'http://jenkins.appdirect.com:8080/api/json?pretty=true';

class Dashboard extends Component {

	constructor() {
		super();
		this.getRegressions = this.getRegressions.bind(this);
		this.getE2E = this.getE2E.bind(this);
		this.state = {
			regressions: []
		};
		this.getRegressions();
	}

	getRegressions() {
		var selfThis = this;
		axios.get(URL_TO_FETCH)
			.then(function(response) {
				selfThis.setState({
					regressions: response.data.jobs.slice(0, 25)
				});
			})
			.catch(error => console.log(error));
	}

	getE2E(key) {
		const _regression = this.state.regressions[key];
		return <RegressionTest regression={_regression}/>;
	}

	render() {
		let styles = {
			'container': {
				'background': "#f5f5f",
				'width': '99%',
				'min-height': '700px',
				'padding': '10px'
			},
			jenkinContainerHeader: {
				'text-align': 'center'
			},
			jenkinContainer: {
				'background': '#fff',
				'min-height': '680px',
				'padding': '20px'
			},
			checkbox: {
				marginBottom: 16,
			},
			headline: {
				fontSize: 24,
				paddingTop: 16,
				marginBottom: 12,
				fontWeight: 400,
			},
			home: {
				'margin-left': 'auto',
				color: 'white',
				background: 'rgba(204, 51, 51, 1)',
				padding: '10px 25px',
				'text-decoration': 'none',
				'border-radius': '3px'
			},
			linkhome: {
				'text-align': 'right',
				'color': 'white'
			}
		}

		return (
			<div style={styles.container}>
				<div style={styles.jenkinContainer}>
					<div style={styles.jenkinContainerHeader}>
						<h2>Check your Jenkin!</h2>
					</div>
					<div style={styles.linkhome}><a style={styles.home} href="http://jenkins.appdirect.com:8080/" target="_blank">Go to Jenkins</a></div>
					<div>
						<h2>All Jobs</h2>
						{Object.keys(this.state.regressions).map(this.getE2E)}
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard
