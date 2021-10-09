import React from 'react';
import { Greeting } from './components/Greeting';
import { Activities } from './components/Activities';
import Theme from './components/Theme';
import './css/app.css';

const App = () => (
  <Theme>
    <div className="layout">
      <Greeting />
      <Activities />
    </div>
  </Theme>
);

export default App;
