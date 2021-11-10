import React from 'react';
import { Greeting } from './components/Greeting';
import { Activities } from './components/Activities';
import ThemeProvider from './components/Theme';
import Layout from './Layout/BaseLayout';
import './css/app.css';

const App = () => (
  <ThemeProvider>
    <Layout>
      <Greeting />
      <Activities />
    </Layout>
  </ThemeProvider>
);

export default App;
