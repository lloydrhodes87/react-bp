import React, { Component } from 'react';
import Child from './child';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <Child />
            </div>
        );
    }
}

export default Home;