import React from 'react';
//import base from '../base';

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
                    <button className="google" onClick={() => this.authenticate('google')} >Log In with Google</button>
                </div>
                <p className='footnote'>All rights reserved (R)</p>
            </nav>
        )
    }
}

export default Login;
