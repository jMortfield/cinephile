import React, { Component } from 'react';

class Login extends Component {
    render() {
        return <button className="home__logInButton" onClick={this.props.login}>Log in</button>;
    }
}

export default Login;