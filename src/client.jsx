import React from 'react';
// hydrate for SSR
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab, faInstagram, faTwitter, faGithub,
} from '@fortawesome/free-brands-svg-icons';

import './css/global-classes.css';
import './css/fonts.css';
import './css/index.css';
import App from './App';

library.add(fab, faInstagram, faTwitter, faGithub);

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
