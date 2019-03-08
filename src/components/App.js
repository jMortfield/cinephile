import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase';
import Login from './Login';
import { randomName } from '../helpers';

console.log(randomName());


class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            uid: null,
            name: null,
            loggedOut: true
        };
    }

  login = () => {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({
        user,
        uid: user.uid,
        name: user.displayName,
        loggedOut: false
      });
    });
  };

  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null,
        uid: null,
        loggedOut: true
      });
    });
  };

  render() {
    return (
      <header className="home">
        <h1 className="home__header">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae, corporis.
        </h1>
        <div className="home__logIn">
          <div className="home__logIn--border">
            <Login login={this.login} />
            {/* {this.state.user ? (
              <button onClick={this.logout}>Log Out</button>
            ) : (
              <button onClick={this.login}>Log In</button>
            )} */}
            <button className="home__logInButton--guest">
              Sign in as guest
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default App;