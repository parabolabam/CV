// hydrate for SSR
import ReactDOM from 'react-dom';

import './css/global-classes.css';
import './css/fonts.css';
import './css/index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab, faInstagram, faTwitter, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import App from './App';
import React from 'react';

library.add(fab, faInstagram, faTwitter, faGithub, faSun, faMoon, faExternalLinkAlt);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')!
)
