import React, {Component} from 'react';
import {render} from 'react-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import RegressionTest from './RegressionTest';
import axios from 'axios';
const FETCH_URL_DEFAULT = 'https://e2e.appdirect.tools/api/runs?limit=10&skip=10';
const FETCH_URL_BASE = 'https://e2e.appdirect.tools/api/runs?';

function handleActive(tab) {
	alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}


class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			regressions: [],
			myRegressions: []
		};
		this.getE2E = this.getE2E.bind(this);
		this.getMyE2E = this.getMyE2E.bind(this);
		this.getRegressions = this.getRegressions.bind(this);
		this.getMyRegressions = this.getMyRegression.bind(this);

		this.getRegressions(100, 0);
		this.getMyRegressions(100, 41);
	}

	getE2E(key) {
		const _regression = this.state.regressions[key];
		return <RegressionTest regression={_regression}/>;
	}

	getMyE2E(key) {
		const _regression = this.state.myRegressions[key];
		return <RegressionTest regression={_regression}/>;
	}


	getRegressions(limit, skip) {
		var selfThis = this;
		const URL_TO_FETCH = (!limit && !skip) ? FETCH_URL_DEFAULT : `${FETCH_URL_BASE}limit=${limit}&skip=${skip}`;
		axios.get(URL_TO_FETCH)
			.then(function(response) {
				selfThis.setState({
					regressions: response.data
				});
			})
			.catch(error => console.log(error));
	}

	getMyRegression(limit, id) {
		var selfThis = this;
		const URL_TO_FETCH = (!limit && !id) ? FETCH_URL_DEFAULT : `${FETCH_URL_BASE}limit=${limit}&createdById=${id}`;
		axios.get(URL_TO_FETCH)
			.then(function(response) {
				selfThis.setState({
					myRegressions: response.data
				});
			})
			.catch(error => console.log(error));
	}

	render() {
		let styles = {
			'container': {
				'background': "#f5f5f",
				'width': '99%',
				'min-height': '700px',
				'padding': '10px',

			},
			e2eContainerHeader: {
				'text-align': 'center'
			},
			e2eContainer: {
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
			tabPanel: {
				padding: 20
			}
		};
		return (
			<div style={styles.container}>
				<div style={styles.e2eContainer}>
					<div style={styles.e2eContainerHeader}>
						<h2>Check your E2E!</h2>
					</div>
					<div>
						<Tabs
							onSelect={this.handleSelect}
							selectedIndex={0}>
							<TabList>
								<Tab className="ReactTabs__Tab--selected">All E2E
								</Tab>
								<Tab>My E2E</Tab>
							</TabList>
							<TabPanel style={styles.tabPanel}>
								<h2>All the E2E</h2>
								<div>
									{Object.keys(this.state.regressions).map(this.getE2E)}
								</div>
							</TabPanel>
							<TabPanel style={styles.tabPanel}>
								<h2>My E2E</h2>
								<div>
									{Object.keys(this.state.myRegressions).map(this.getMyE2E)}
								</div>
							</TabPanel>
						</Tabs>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard
