import React, {Component} from 'react';
import {render} from 'react-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import RegressionTest from './RegressionTest';
//import regressionsData from './regressionsTest.json';
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
			regressions: []//regressionsData
		};
		this.getE2E = this.getE2E.bind(this);
		this.getRegressions = this.getRegressions.bind(this);
		this.getRegressions(2, 2);
	}

	getE2E(key) {
		debugger;
		const _regression = this.state.regressions[key];
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

	render() {
		let styles = {
			'container': {
				'background': "#f5f5f",
				'width': '99%',
				'min-height': '700px',
				'padding': '10px'
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
							selectedIndex={2}>
							<TabList>
								<Tab className="ReactTabs__Tab--selected">My E2E
								</Tab>
								<Tab>ALL E2E</Tab>

							</TabList>
							<TabPanel>
								<h2>My E2E</h2>
								<div>
									{Object.keys(this.state.regressions).map(this.getE2E)}
								</div>
							</TabPanel>
							<TabPanel>
								<h2>All the E2E</h2>
							</TabPanel>
						</Tabs>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard
