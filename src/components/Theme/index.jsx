import React, { useEffect, useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Toggle } from '../Toggle';
import Loader from '../Loader';
import { getItem } from '../../common-services/local-storge-api';

import './index.css';
/**
 * The theme components only imports it's theme CSS-file. These components are lazy
 * loaded, to enable "code splitting" (in order to avoid the themes being bundled together)
 */
const DarkTheme = React.lazy(() => import('./DarkTheme'));
const LightTheme = React.lazy(() => import("./LightTheme")); // eslint-disable-line

const ThemeSelector = ({ children }) => {
  // eslint-disable-next-line no-undef
  const body = document.querySelector('body');

  const lightColorScheme = useMediaPredicate('(prefers-color-scheme: light)');
  const darkColorScheme = useMediaPredicate('(prefers-color-scheme: dark)');
  const [{ isDarkMode }, setIsDarkMode] = useState({ isDarkMode: getItem('isDarkMode') });
  const onToggleChange = ({ target: { checked } }) => {
    setIsDarkMode({ isDarkMode: !checked });
  };
  useEffect(() => {
    body.classList.remove('dark-theme', 'light-theme');

    if (lightColorScheme) {
      body.classList.add('light-theme');
    } else if (darkColorScheme) {
      body.classList.add('dark-theme');
    }
  });

  useEffect(() => {
    // eslint-disable-next-line no-undef
    if (isDarkMode === undefined || isDarkMode === null) {
      return;
    }
    body.classList.remove('dark-theme', 'light-theme');
    body.classList.add(isDarkMode ? 'dark-theme' : 'light-theme');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  return (
    <>
      <div className="theme-provider__theme-switch">
        <FontAwesomeIcon icon={['far', 'sun']} />
        <Toggle checked={!isDarkMode} onChange={onToggleChange} />
        <FontAwesomeIcon icon={['far', 'moon']} />
      </div>
      {/* Conditionally render theme, based on the current client context */}
      <React.Suspense fallback={<Loader />}>
        {isDarkMode === true && <DarkTheme />}
        {isDarkMode === false && <LightTheme />}
        {darkColorScheme && <DarkTheme />}
        {lightColorScheme && <LightTheme />}
      </React.Suspense>

      {children}
    </>
  );
};

export default ThemeSelector;
