import React, { useState } from 'react';
import PropsType from 'prop-types';
import './index.css';

export function Expandable({
  isInitiallyCollapsed = true,
  altForExpandButton = 'More',
  altForCollapseButton = 'Less',
  children = null,
}) {
  const [isCollapsed, setIsCollapsed] = useState(isInitiallyCollapsed);

  const handleCollapse = () => setIsCollapsed(!isCollapsed);
  return (
    <>
      <label htmlFor="expandable__input" className="expandable__label">
        <input
          id="expandable__input"
          className="hidden-accessibly"
          type="checkbox"
          onClick={handleCollapse}
        />
        <div
          className={
            isCollapsed
              ? 'expandable__icon'
              : 'expandable__icon expandable__icon--rotated'
          }
        >
          👇
        </div>
        {isCollapsed ? altForExpandButton : altForCollapseButton}
      </label>
      <div
        className={
          isCollapsed
            ? 'expandable__expanded-content expandable__expanded-content--collapsed'
            : 'expandable__expanded-content'
        }
      >
        {children}
      </div>
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
