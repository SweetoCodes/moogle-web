import React from "react";
import SquareDots from "../atoms/icons/square-dots";

interface Props {
  style: string;
}
const Header: React.FC<Props> = (style) => {
  return (
    <div className={" flex m-[6px] justify-between items-center  " + style}>
      <div className="flex flex-row items-center">
        <a href="https://charliesweeting.com/">
          <div className="p-[5px] mx-[5px] text-[#202124] text-[14px] hover:underline cursor-pointer ">
            About
          </div>
        </a>
        <a href="https://charliesweeting.com/">
          <div className="p-[5px] mx-[5px] text-[#202124] text-[14px] hover:underline cursor-pointer ">
            Store
          </div>
        </a>
      </div>
      <div className="flex flex-row items-center">
        <a href="https://charliesweeting.com/">
          <div className="p-[5px] mx-[5px] text-[#202124] text-[14px] hover:underline cursor-pointer ">
            Gmail
          </div>
        </a>
        <a href="https://charliesweeting.com/">
          <div className="p-[5px] mx-[5px] text-[#202124] text-[14px] hover:underline cursor-pointer ">
            Images
          </div>
        </a>
        <SquareDots style=" m-[5px] " />
        <a href="https://charliesweeting.com/" className="bg-[#1a73e8] hover:bg-[#4285f4] m-[5px] px-[23px] rounded-[4px] py-[7px] text-[#fff] text-[14px] border-transparent border-[1px] cursor-pointer font-medium ">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default Header;
