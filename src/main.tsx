// hydrate for SSR
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faInstagram, faTwitter, fab } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import './css/fonts.css';
import './css/global-classes.css';
import './css/index.css';

library.add(fab, faInstagram, faTwitter, faGithub, faSun, faMoon, faExternalLinkAlt);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')!
)
