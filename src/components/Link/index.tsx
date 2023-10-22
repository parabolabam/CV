import PropTypes from 'prop-types';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Link({
  children = null,
  href = '#',
  targetBlank = true,
  showIcon = false,
  additionalRel = ''
}) {
  const relOfLinks = ['noopener', 'noreferrer', additionalRel].join(' ');

  return (
    <>
      <a
        className="link"
        href={href}
        target={targetBlank ? '_blank' : '_self'}
        rel={relOfLinks}
      >
        {children}
        <span className={showIcon ? 'link__icon' : ''}>
          {showIcon && (
            <FontAwesomeIcon icon={['fas', 'external-link-alt']} size="xs" />
          )}
        </span>
      </a>
    </>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  targetBlank: PropTypes.bool,
  showIcon: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
