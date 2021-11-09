/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropsType from 'prop-types';
import { Button } from '../Button';
import './index.css';

export function Expandable({
  isInitiallyCollapsed = true,
  altForExpandButton = 'More',
  altForCollapseButton = 'Less',
  children = null,
}) {
  const [isCollapsed, setIsCollapsed] = useState(isInitiallyCollapsed);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <Button
        type="button"
        id="expandable__input"
        onClick={handleCollapse}
      >
        👇
        {' '}
        {isCollapsed ? altForExpandButton : altForCollapseButton}
      </Button>

      {isCollapsed ? null : (
        <div className="expandable__expanded-content">
          {children}
        </div>
      )}
    </>
  );
}

Expandable.propTypes = {
  isInitiallyCollapsed: PropsType.bool,
  altForExpandButton: PropsType.string,
  altForCollapseButton: PropsType.string,
  children: PropsType.oneOfType([
    PropsType.arrayOf(PropsType.node),
    PropsType.node,
  ]),
};
