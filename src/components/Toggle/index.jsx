import React from 'react';
import './index.css';

export function Toggle({ label, onChange, checked }) {
  return (
    <label className="Toggle" htmlFor="toggle">
      <input defaultChecked={checked} onChange={onChange} type="checkbox" name="toggle" id="toggle" className="Toggle__input" />
      <span className="Toggle__display" hidden />
      {label}
    </label>

  );
}
