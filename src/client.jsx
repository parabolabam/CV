import React from 'react';
// hydrate for SSR
import ReactDOM from 'react-dom';
import './css/global-classes.css';
import './css/fonts.css';
import './css/index.css';
import App from './App';

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
