import React from 'react';
import PropTypes from 'prop-types';

export function Header({ children = null }) {
  return <header>{children}</header>;
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
