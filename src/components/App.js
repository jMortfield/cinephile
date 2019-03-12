import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase';

import Header from './Header';
import Login from './Login';
import Logout from './Logout';
import { randomName } from '../helpers';

// console.log(randomName());


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
      this.props.history.push(`/groups/${this.state.uid}`);
    });
  };

  guestLogin = () => {
    this.setState({
      uid: 'guest'
    });
    this.props.history.push(`/groups/guest`)
  }

  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null,
        uid: null,
        name: null,
        loggedOut: true
      });
    });
  };

  render() {
    return (
      <header className="home">
        <Header />
        <div className="home__logIn">
          <div className="home__logIn--border">
          {this.state.loggedOut ? (
            <Login login={this.login} guestLogin={this.guestLogin}/>
          ) : (
            <Logout logout={this.logout}/>
          )}
          </div>
        </div>
      </header>
    );
  }
}

export default App;