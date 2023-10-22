import React, { useEffect, useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../Loader';
import { getItem, setItem } from '../../common-services/local-storge-api';

import './index.css';
/**
 * The theme components only imports it's theme CSS-file. These components are lazy
 * loaded, to enable "code splitting" (in order to avoid the themes being bundled together)
 */
const DarkTheme = React.lazy(() => import('./DarkTheme'));
const LightTheme = React.lazy(() => import("./LightTheme")); // eslint-disable-line
const Toggle = React.lazy(() => import('../Toggle'));

const ThemeSelector = ({ children }) => {
  // eslint-disable-next-line no-undef
  const body = document.querySelector('body');
  const prefersDarkColorScheme = useMediaPredicate('(prefers-color-scheme: dark)');
  const [{ isDarkMode }, setIsDarkMode] = useState({ isDarkMode: getItem('isDarkMode') });
  const onToggleChange = ({ target: { checked } }) => {
    setIsDarkMode({ isDarkMode: checked });
    setItem('isDarkMode', checked);
  };

  useEffect(() => {
    body.classList.remove('dark-theme', 'light-theme');
    const isDarkPresent = isDarkMode !== null;

    if (isDarkPresent) {
      body.classList.add(isDarkMode ? 'dark-theme' : 'light-theme');
    } else {
      body.classList.add(prefersDarkColorScheme ? 'dark-theme' : 'light-theme');
      onToggleChange({ target: { checked: prefersDarkColorScheme } });
    }
  }, [body.classList, isDarkMode, prefersDarkColorScheme]);

  return (
    <>
      <div className="theme-provider__theme-switch">
        <FontAwesomeIcon className="theme-provider__theme-icon" icon={['far', 'sun']} />
        <Toggle checked={!!isDarkMode} onChange={onToggleChange} />
        <FontAwesomeIcon className="theme-provider__theme-icon" icon={['far', 'moon']} />
      </div>
      {/* Conditionally render theme, based on the current client context */}
      <React.Suspense fallback={<Loader />}>
        <DarkTheme />
        <LightTheme />
      </React.Suspense>

      {children}
    </>
  );
};

export default ThemeSelector;
