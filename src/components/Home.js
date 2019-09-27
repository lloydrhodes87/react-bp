import React, { Component } from 'react';
import Child from './child';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <Child alert={this.alert}/>
            </div>
        );
    }

    alert = () => {
        alert('hello')
    }
}


export default Home;