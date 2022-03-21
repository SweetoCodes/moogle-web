import React from "react";

interface Props {
  style: string;
}
const Footer: React.FC<Props> = (style) => {
  return <div className={" " + style}>
      Footer
  </div>;
};

export default Footer;
