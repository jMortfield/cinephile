import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div className="home__logIn">
                <button className="home__logInButton" onClick={this.props.login}>Log in</button>
                <button className="home__guestLogin" onClick={this.props.guestLogin}>Sign in as guest</button>
            </div>
        )
    }
}

export default Login;