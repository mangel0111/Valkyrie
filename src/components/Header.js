import React from 'react';
import Avatar from 'material-ui/Avatar';
import ReactDOM from 'react-dom';
import ClickOutside from 'react-click-outside';
import $ from 'jquery';

const style = { margin: 5 };

class Header extends React.Component {
	constructor() {
		super();
		this.renderAuthHeader = this.renderAuthHeader.bind(this);
		this.renderNoAuthHeader = this.renderNoAuthHeader.bind(this);
		this.renderLogo = this.renderLogo.bind(this);
		this.renderLogoutModal = this.renderLogoutModal.bind(this);
		this.logout = this.logout.bind(this);
	}


	renderLogo() {
		return (
			<div className="logo">
				<h2><a href="/" className="linklogo"><span className="iconLogo"></span>Valkyrie!</a></h2>
			</div>
		);
	};

	logout() {
		localStorage.clear();
		window.location.replace("/login");
	}

	renderLogoutModal() {
		let styles = {
			'imgAvatar': {
				'width': 64,
				'minHeight': 64,
				'borderRadius': 64,
				'float': 'left',
				'marginRight': 15
			},
			'email': {
				'fontSize': 14,
				'color': '#585858'
			}
		}
		$('#modal').show();
		return (
			ReactDOM.render(
				<ClickOutside onClickOutside={() =>  $('#modal').hide()}>
					<div className='logout-modal'>
						<img src={localStorage.getItem('picture')} style={styles.imgAvatar} role="presentation" />
						<strong>{this.props.Profile.Name}</strong><br />
						<label style={styles.email}>{localStorage.getItem('email')}</label> <br /><br />
						<input type='button' onClick={() => this.logout()} value='Logout' />
					</div>
				</ClickOutside >,
						document.getElementById('modal'))
		);
	}

renderAuthHeader() {
	return (
		<header className="header">
			<div className="headerContainer">
				{this.renderLogo()}
				<div className="searchBox">

				</div>
				<div className="manage" onClick={() => this.renderLogoutModal()}>
					<h3> <span>
						<Avatar
							src={localStorage.getItem('picture')}
							size={45}
							style={style}
						/>
					</span>
						{this.props.Profile.Name}
					</h3>
				</div>
			</div>
			<div id='modal' className='modal'></div>
		</header>
	);
}

renderNoAuthHeader() {
	return (
		<nav className="header">
			<div className="headerContainer">
				{this.renderLogo()}
				<div className="searchBox">
					<h2></h2>
				</div>
				<div className="manage">
					<h2>Login</h2>
				</div>
			</div>
		</nav>
	);
}

render() {
	var IsAuth = this.props.isAuth || false;
	if (IsAuth) {
		return (this.renderAuthHeader());
	} else {
		return this.renderNoAuthHeader();
	}
}
}

Header.propTypes = {
	isAuth: React.PropTypes.bool.isRequired,
	Profile: React.PropTypes.object.isRequired
};


export default Header;
