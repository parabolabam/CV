
import PropTypes from 'prop-types';

export function LinkageCard({ children = null }) {
  return <>{children}</>;
}

LinkageCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
