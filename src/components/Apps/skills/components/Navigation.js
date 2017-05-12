import React from 'react';
import Axios from 'axios';

const style = {
	'ul': {
		'backgroundColor': '#aaaeba',
		'height': '5.8em'
	},
	'form': {
		'width': '450px',
		'height': '2.2em',
		'background': "#444",
		'background': "rgba(0,0,0,.2)",
		'border-radius': "10px",
		'display': 'block',
		'textAlign': 'center',
		'margin-top': '0.6em',
		'marginLeft': '0.3em',
		'padding': '1em 1em',
		'textDecoration': 'none',
		'boxShadow': "0 1px 1px rgba(0,0,0,.4) inset, 0 1px 0 rgba(255,255,255,.2)"
	},

	'input': {
		'width': "330px",
		'height': "1em",
		'padding': "10px 5px",
		'float': "left",
		'font': "bold 15px 'lucida sans', 'trebuchet MS', 'Tahoma'",
		'border': 0,
		'background': '#eee',
		'bordeRadius': '3px 0 0 3px'
	},

	'button': {
		'overflow': 'visible',
		'float': 'right',
		'border': 0,
		'padding': 0,
		'cursor': 'pointer',
		'height': '2.3em',
		'width': '110px',
		'font': "bold 15px/40px 'lucida sans', 'trebuchet MS', 'Tahoma'",
		'color': '#fff',
		'textTransform': 'uppercase',
		'background': '#d83c3c',
		'borderRadius': '0 3px 3px 0',
		'textShadow': '0 -1px 0 rgba(0, 0 ,0, .3)',
	},

	'viewProfileIcon': {

		'height': '42px',
		'width': '42px',
		'marginLeft': '50%',
		'marginTop': '9px'
	},

	'viewProfile': {
		'float': 'left',
		'display': 'flex',
		'flexDirection': 'column',
		'marginLeft': '200px',
		'marginTop': '10px',
		'font': "bold 14px 'lucida sans', 'trebuchet MS', 'Tahoma'",
		'color': "white"
	},

	'li': {
		'float': 'left',
		'marginTop': '3px'

	},

	'profile': {
		'display': 'block',
		'textAlign': 'center',
		'width': '70px',
		'marginTop': 0
	},

	'profileLink': {
		'paddingLeft': '6px',
		'color': 'white'
	},

	'people': {
		'display': 'block',
		'font': "bold 14px 'lucida sans', 'trebuchet MS', 'Tahoma'",
		'color': "white",
		'textAlign': 'center',
		'marginLeft': '50px'
	},

	'viewPeopleIcon': {
		'height': '48px',
		'width': '48px',
		'marginLeft': '50%',
		'marginTop': '9px',
		cursor: 'pointer'

	},

	'table': {
		'marginTop': '10%',
		'width': '100%',
		'font': "bold 15px 'lucida sans', 'trebuchet MS', 'Tahoma'",
	},

	'profileImgResults': {
		'height': '160px',
		'width': '180px'
	},

	'rows': {
		'boxShadow': "0 2px 1px rgba(0,0,0,.4) inset, 0 1px 2px rgba(255,255,255,.2)",
		'borderRadius': "10px"
	},

	'detailsCell': {
		'display': 'flex',
		'flexDirection': 'column'
	},

	'photoCell': {
		'paddingLeft': '0.8%',
		'paddingTop': '0.8%'
	},

	'locationIcon': {
		'height': '25px',
		'width': '25px'
	}

}

class Navigation extends React.Component {

	constructor() {
		super();
		this.state = {
			events: [],
			users: []
		};
		this.getAllUsers = this.getAllUsers.bind(this);
	}

	getAllUsers() {
		var selfThis = this;
		Axios.get('http://localhost:4000/users')
			.then(function(response) {
				selfThis.setState({
					users: response.data
				});
			})
			.catch(error => console.log(error));
	}

	showUsers(user) {
		return (
			<tr style={style.rows}>
				<td style={style.photoCell}>
					<img style={style.profileImgResults} src={user.avatar} width="180" height="200"/>
				</td>
				<td style={style.detailsCell}>
					<a href="profile">{`${user.firstName}  ${user.lastName}`}</a>
					<span> Jefe de fiestas y convidios </span>
					<span>Team:</span>
					<ul>
						{user.team.map((t) => (<li key={t.id}>{t.name}</li>))}
					</ul>
					<div className="locationIcon">
						<img style={style.locationIcon}
							 src="/images/position.svg"/>
						<p>{user.region}</p>
					</div>

				</td>
			</tr>);
	}

	render() {

		return (
			<div>

				<ul style={style.ul}>
					<li style={style.li}>
						<form style={style.form}>
							<input style={style.input} type="text" placeholder="Search here..." required/>
							<button style={style.button} type="submit">Search</button>
						</form>
					</li>
					<li style={style.viewProfile}>
						<a style={style.profile} href="profile"><img style={style.viewProfileIcon}
																	 src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNpcmNsZSBjeD0iMTIiIGN5PSI4IiByPSI0Ii8+PHBhdGggZD0iTTEyLDE0Yy02LjEsMC04LDQtOCw0djJoMTZ2LTJDMjAsMTgsMTguMSwxNCwxMiwxNHoiLz48L3N2Zz4="/></a>
						<a style={style.profileLink} href="profile">View My Profile</a>
					</li>
					<li style={style.li}>
						<a onClick={()=> this.getAllUsers()}>
							<img style={style.viewPeopleIcon}
											  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTksOWMwLTEuNywxLjMtMywzLTNzMywxLjMsMywzYzAsMS43LTEuMywzLTMsM1M5LDEwLjcsOSw5eiBNMTIsMTRjLTQuNiwwLTYsMy4zLTYsMy4zVjE5aDEydi0xLjdDMTgsMTcuMywxNi42LDE0LDEyLDE0eiAgICIvPjwvZz48Zz48Zz48Y2lyY2xlIGN4PSIxOC41IiBjeT0iOC41IiByPSIyLjUiLz48L2c+PGc+PHBhdGggZD0iTTE4LjUsMTNjLTEuMiwwLTIuMSwwLjMtMi44LDAuOGMyLjMsMS4xLDMuMiwzLDMuMiwzLjJsMCwwLjFIMjN2LTEuM0MyMywxNS43LDIxLjksMTMsMTguNSwxM3oiLz48L2c+PC9nPjxnPjxnPjxjaXJjbGUgY3g9IjE4LjUiIGN5PSI4LjUiIHI9IjIuNSIvPjwvZz48Zz48cGF0aCBkPSJNMTguNSwxM2MtMS4yLDAtMi4xLDAuMy0yLjgsMC44YzIuMywxLjEsMy4yLDMsMy4yLDMuMmwwLDAuMUgyM3YtMS4zQzIzLDE1LjcsMjEuOSwxMywxOC41LDEzeiIvPjwvZz48L2c+PGc+PGc+PGNpcmNsZSBjeD0iNS41IiBjeT0iOC41IiByPSIyLjUiLz48L2c+PGc+PHBhdGggZD0iTTUuNSwxM2MxLjIsMCwyLjEsMC4zLDIuOCwwLjhjLTIuMywxLjEtMy4yLDMtMy4yLDMuMmwwLDAuMUgxdi0xLjNDMSwxNS43LDIuMSwxMyw1LjUsMTN6Ii8+PC9nPjwvZz48L3N2Zz4="/>
						</a>
						<a style={style.people} onClick={()=> this.getAllUsers()}>People</a></li>
				</ul>


				<table style={style.table}>
					{this.state.users.map((user) => this.showUsers(user))}
				</table>
			</div>
		);
	}

}

export default Navigation;

