import React, { Component } from "react";

class Logout extends Component {
  render() {
    return (
      <div className="home__logIn">
        <button className="home__logInButton" onClick={this.props.login}>
          Log out
        </button>
      </div>
    );
  }
}

export default Logout;
