import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
  // onClick: () => void;
}
function ExpandableText({ children, maxChars = 100 }: Props) {
  const [isExpanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children.substring(0, maxChars) : children;
  return (
    <p>
      {text}...
      <button onClick={handleClick}>{!isExpanded ? "Less" : "More"}</button>
    </p>
  );
}

export default ExpandableText;
