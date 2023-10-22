import React from 'react';
import './index.css';

export default function Toggle({ label, onChange, checked }) {
  const change = (event) => {
    onChange(event);
  };
  return (
    <label className="Toggle" htmlFor="toggle">
      <input checked={checked} onChange={change} type="checkbox" name="toggle" id="toggle" className="Toggle__input" />
      <span className="Toggle__display" hidden />
      {label}
    </label>

  );
}
