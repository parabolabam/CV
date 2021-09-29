import React from "react";
import { useEffect, useState } from "react";
import "./index.css";

export function Expandable({
  isInitiallyCollapsed = true,
  altForExpandButton = "More",
  altForCollapseButton = "Less",
  children,
}) {
  const [isCollapsed, setIsCollapsed] = useState(isInitiallyCollapsed);

  const handleCollapse = () => setIsCollapsed(!isCollapsed);
  return (
    <>
      <label className="expandable__label">
        <input
          className="hidden-accessibly"
          type="checkbox"
          onClick={handleCollapse}
        ></input>
        <div
          className={
            isCollapsed
              ? "expandable__icon"
              : "expandable__icon expandable__icon--rotated"
          }
        >
          👇
        </div>
        {isCollapsed ? altForExpandButton : altForCollapseButton}
      </label>
      <div
        className={
          isCollapsed
            ? "expandable__expanded-content expandable__expanded-content--collapsed"
            : "expandable__expanded-content"
        }
      >
        {children}
      </div>
    </>
  );
}
