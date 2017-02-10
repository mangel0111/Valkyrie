import React from 'react';
import GoogleLogin from 'react-google-login';
import Axios from 'axios';

const responseGoogle = (response) => {
    localStorage.setItem('accessToken', response.accessToken);
    localStorage.setItem('uid', response.profileObj.googleId);
    localStorage.setItem('tokenId', response.tokenId);
    localStorage.setItem('email', response.profileObj.email);

    if(true) {
        Axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + response.accessToken)
        .then(function(aResponse){
            localStorage.setItem('owner', aResponse.data.name);
            localStorage.setItem('picture', aResponse.data.picture);
            window.location.replace("http://localhost:3000");
        });

    }

    console.log(response);
}

class Login extends React.Component {
    render() {
        return (
            <nav className="login">
                <h2>Valkyrie!</h2>
                <p>Sign in to use yourApp tool!</p>
                <div>
                    <button className="github" onClick={() => this.authenticate('github')}>Log In with Github</button>
                    <button className="facebook" onClick={() => this.authenticate('facebook')} >Log In with Facebook</button>
                    <button className="twitter" onClick={() => this.authenticate('twitter')} >Log In with Twitter</button>
                    <GoogleLogin
                        clientId="576488167011-22sf5nn422hp65mq81aj93h0hfaqb1vu.apps.googleusercontent.com"
                        buttonText="Log In with Google"
                        className="google"
                        scope='https://www.googleapis.com/auth/calendar.readonly profile'
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        />
                </div>
                <p className='footnote'>All rights reserved (R)</p>
            </nav>
        )
    }
}

export default Login;
