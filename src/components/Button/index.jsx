import React from 'react';
import './index.css';

export function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button" type="button">
      {children}
    </button>
  );
}
