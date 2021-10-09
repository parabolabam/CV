import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export function Footer({ children }) {
  return <footer className="footer">{children}</footer>;
}

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
