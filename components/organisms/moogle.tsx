import React from "react";
import Header from "../molecules/header";
import SearchInput from "../molecules/search-form";
import Footer from "../molecules/footer";

interface Props {
  style?: string;
}
const Moogle: React.FC<Props> = (style) => {
  return <div className={"flex flex-col min-h-screen justify-between " + style}>
      <Header style="" />
      <SearchInput style="" />
      <Footer style="" />
  </div>;
};

export default Moogle;
