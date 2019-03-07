import React, { Component } from 'react';
import { randomName } from '../helpers';

console.log(randomName());

class Home extends Component {
    render() {
        return (
            <div className="testing">
                <h1>This is the home</h1>
                <p>Testing testing</p>
            </div>
        )
    }
}

export default Home;