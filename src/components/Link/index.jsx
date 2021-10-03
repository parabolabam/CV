import PropTypes from 'prop-types';
import './index.css';
import React from 'react';

export function Link({ children = null, href = '#', targetBlank = true }) {
  return (
    <>
      <a
        className="link"
        href={href}
        target={targetBlank ? '_blank' : '_self'}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  targetBlank: PropTypes.bool,
  children: PropTypes.element,
};
