import React, {Component} from 'react';
import {render} from 'react-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import RegressionTest from './RegressionTest';
import axios from 'axios';
const FETCH_URL_DEFAULT = 'https://orchard.appdirect.tools/api/environments?filterDeleted=true&filterOthers=false';
const FETCH_URL_BASE = 'https://orchard.appdirect.tools/api/environments?filterDeleted=true&filterOthers=false';

function handleActive(tab) {
	alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}


class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			regressions: []
		};
		this.getOrchard = this.getOrchard.bind(this);
		this.getRegressions = this.getRegressions.bind(this);

		this.getRegressions(100, 0);
	}

	getOrchard(key) {
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
                console.log('DATA:', response);
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
			OrchardContainerHeader: {
				'text-align': 'center'
			},
			OrchardContainer: {
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
				<div style={styles.OrchardContainer}>
					<div style={styles.OrchardContainerHeader}>
						<h2>Check your Orchard!</h2>
					</div>
					<div>
						<Tabs
							onSelect={this.handleSelect}
							selectedIndex={0}>
							<TabList>
								<Tab className="ReactTabs__Tab--selected">All Orchard
								</Tab>
							</TabList>
							<TabPanel style={styles.tabPanel}>
								<h2>All the Orchard</h2>
								<div>
									{Object.keys(this.state.regressions).map(this.getOrchard)}
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
