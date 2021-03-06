import React from 'react';
import "./Login.css";
import { loginUrl } from './spotify';

const Login = () => {
    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="login-logo" className="login-logo"/>
            <a href={loginUrl} className="login-btn">LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login
