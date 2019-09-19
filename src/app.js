import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';


console.log('app is running');

const appRoot = document.getElementById('app')
ReactDOM.render(<Home />, appRoot)