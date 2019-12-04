import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import './styles/styles.scss'


console.log('app is running');

const appRoot = document.getElementById('app')
ReactDOM.render(<Home />, appRoot)