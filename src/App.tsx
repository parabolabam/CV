
import { Greeting } from './components/Greeting';
import { Activities } from './components/Activities';
import ThemeProvider from './components/Theme';
import Layout from './Layout/BaseLayout';
import Loading from './components/Loader';
import './css/app.css';

const ThemeProvider = lazy(() => import('./components/Theme'));
const Activities = lazy(() => import('./components/Activities'));
const Greeting  = lazy(() => import('./components/Greeting'));

function App() {
  return (
    <Suspense fallback={<Loading />}> 
      <ThemeProvider>
        <Layout>
          <Greeting />
          <Activities />
        </Layout>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
