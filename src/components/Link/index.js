import PropTypes from "prop-types";
import "./index.css";

export function Link({ children, href, targetBlank = true }) {
  return (
    <>
      <a
        className="link"
        href={href}
        target={targetBlank ? "_blank" : "_self"}
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
};
