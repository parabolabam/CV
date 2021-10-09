import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import PropTypes from 'prop-types';
import Loader from '../Loader';
/**
 * The theme components only imports it's theme CSS-file. These components are lazy
 * loaded, to enable "code splitting" (in order to avoid the themes being bundled together)
 */
const DarkTheme = React.lazy(() => import('./DarkTheme'));
const LightTheme = React.lazy(() => import("./LightTheme")); // eslint-disable-line

const ThemeSelector = ({ children }) => {
  const lightColorScheme = useMediaPredicate('(prefers-color-scheme: light)');
  const darkColorScheme = useMediaPredicate('(prefers-color-scheme: dark)');

  return (
    <>
      {/* Conditionally render theme, based on the current client context */}
      <React.Suspense fallback={<Loader />}>
        {darkColorScheme && <DarkTheme />}
        {lightColorScheme && <LightTheme />}
      </React.Suspense>

      {children}
    </>
  );
};

export default ThemeSelector;

ThemeSelector.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
