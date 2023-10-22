import PropTypes from 'prop-types';

import './index.css';

export function Grid({ children }) {
  return (
    <div className="grid">
      {children}
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]),
};
