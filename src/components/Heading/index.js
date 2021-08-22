import PropTypes from "prop-types";

export function Heading({ level, children }) {
  return <h level={level}>{children}</h>;
}

Heading.propTypes = {
  level: PropTypes.number.isRequired,
};
