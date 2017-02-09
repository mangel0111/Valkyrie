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
			}
		}

		var axios = require('axios');
		var jenkinsNames = [];

		axios.get('http://jenkins.appdirect.com:8080/api/json?pretty=true')
		.then(function (response) {
			 response.data.jobs.forEach(function(element) {
   			 jenkinsNames.push(element.name);
			});
			document.getElementById("allJobs").innerHTML = jenkinsNames;
		})
		.catch(function (error) {
			console.log(error);
		});


		return (
			<div style={styles.container}>
				<div style={styles.jenkinContainer}>
					<div style={styles.jenkinContainerHeader}>
						<h2>Check your Jenkin!</h2>
					</div>
					<div>
						<h2>All Jobs</h2>
						<p id="allJobs"></p>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard
