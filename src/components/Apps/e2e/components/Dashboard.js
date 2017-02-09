import React, {Component} from 'react';
import {render} from 'react-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

function handleActive(tab) {
	alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}


class Dashboard extends Component {

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
		}

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
								<Tab>My E2E</Tab>
								<Tab>ALL E2E</Tab>
							</TabList>
							<TabPanel>
								<h2>My E2E</h2>
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
