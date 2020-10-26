import App from '../App.js';
import React from 'react';
import * as ReactDOM from 'react-dom';

test('should render the heading', () => {
    const root = document.createElement('div');
    ReactDOM.render(<App/>, root);
    expect(root.querySelector('h1').textContent).toBe('Expense Tracker');
})


