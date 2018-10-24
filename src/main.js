import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';

const content = document.createElement('div');
document.body.appendChild(content)

ReactDOM.render(<App />, content);