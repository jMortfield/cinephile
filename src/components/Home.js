import React, { Component } from 'react';
import { randomName } from '../helpers';

console.log(randomName());

class Home extends Component {
    render() {
        return (
            <header className="home">
                <h1 className="home__header">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, corporis.</h1>
                <div className="home__logIn">
                    <div className="home__logIn--border">
                        <button className="home__logInButton">
                            Log in
                        </button>
                        <button className="home__logInButton--guest">
                            Sign in as guest
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Home;