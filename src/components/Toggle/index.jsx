import React from 'react';
import PropTypes from 'prop-types';

export default function Toggle({ name }) {
  return (
    <div className="toggle-switch">
      <label htmlFor="toggleSwitch" className="toggle-switch-label">
        <input
          type="checkbox"
          name={name}
          id={name}
          className="toggle-switch-checkbox"
        />
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />

      </label>
    </div>
  );
}

Toggle.propTypes = {
  name: PropTypes.string,
};
