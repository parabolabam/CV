import React from 'react';
import { Greeting } from './components/Greeting';
import { Activities } from './components/Activities';
import Theme from './components/Theme';
import Layout from './Layout/BaseLayout';
import './css/app.css';

const App = () => (
  <Theme>
    <Layout>
      <Greeting />
      <Activities />
    </Layout>
  </Theme>
);

export default App;
