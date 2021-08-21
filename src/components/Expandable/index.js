import { useState } from "react";

function CollapsedContent({ handleCollapse, altForExpandButton }) {
  return <button onClick={handleCollapse}>👇 {altForExpandButton}</button>;
}

function ExpandedContent({ handleCollapse, altForCollapseButton, children }) {
  return (
    <>
      <button onClick={handleCollapse}>☝ {altForCollapseButton}</button>
      <div>{children}</div>
    </>
  );
}

export function Expandable({
  isInitiallyCollapsed = true,
  altForExpandButton = "More",
  altForCollapseButton = "Less",
  children,
}) {
  const [isCollapsed, setIsCollapsed] = useState(isInitiallyCollapsed);

  const handleCollapse = () => setIsCollapsed(!isCollapsed);

  if (isCollapsed) {
    return (
      <CollapsedContent
        altForExpandButton={altForExpandButton}
        handleCollapse={handleCollapse}
      />
    );
  } else {
    return (
      <ExpandedContent
        altForCollapseButton={altForCollapseButton}
        handleCollapse={handleCollapse}
      >
        {children}
      </ExpandedContent>
    );
  }
}
