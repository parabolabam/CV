import React from 'react';
import PropTypes from 'prop-types';

export function LinkageCard({ children = null }) {
  return <>{children}</>;
}

LinkageCard.propTypes = {
  children: PropTypes.element,
};
