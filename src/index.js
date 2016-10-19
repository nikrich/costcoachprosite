import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Focus from './components/Focus';
import About from './components/About';

require('styles/app.scss');

// Render the main component into the dom
ReactDOM.render(<Focus />, document.getElementById('focusBlock'));
ReactDOM.render(<About />, document.getElementById('about'));
