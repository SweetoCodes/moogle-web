import React from "react";

interface Props {
  style: string;
}
const Header: React.FC<Props> = (style) => {
  return <div className={" " + style}>
      Header
  </div>;
};

export default Header;
