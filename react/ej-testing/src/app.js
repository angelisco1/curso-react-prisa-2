import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import configureStore from './store/configure-store';
import { Provider } from 'react-redux';
const store = configureStore();

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('app'));
// ReactDOM.render(<Main />, document.getElementById('app'));

