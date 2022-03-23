import React from "react";

interface Props {
  style: string;
}
const Footer: React.FC<Props> = (style) => {
  return (
    <div className={"flex flex-col bg-[#f2f2f2] " + style}>
      <div className="px-[30px] py-[15px] text-[15px] text-[#70757a] border-b-[#dadce0] border-[1px] ">
        United Kingdom
      </div>
      <a
        href="https://charliesweeting.com/"
        className=" lg:hidden mx-auto p-[15px] text-[14px] hover:underline cursor-pointer text-[#70757a] "
      >
        Moo neutral since 2022
      </a>
      <div className="flex flex-wrap mx-[20px] justify-evenly ">
        <div className="flex flex-row">
          <a
            href="https://charliesweeting.com/"
            className=" p-[15px] text-[14px] hover:underline cursor-pointer text-[#70757a]"
          >
            Advertising
          </a>
          <a
            href="https://charliesweeting.com/"
            className="text-[14px] p-[14px] hover:underline cursor-pointer text-[#70757a]"
          >
            Business
          </a>
          <a
            href="https://charliesweeting.com/"
            className="text-[14px] p-[14px] hover:underline cursor-pointer text-[#70757a]"
          >
            How Moogle works
          </a>
        </div>
        <div className="flex flex-row">
          <a
            href="https://charliesweeting.com/"
            className="text-[14px] p-[14px] hover:underline cursor-pointer text-[#70757a]"
          >
            Privacy
          </a>
          <a
            href="https://charliesweeting.com/"
            className="text-[14px] p-[14px] hover:underline cursor-pointer text-[#70757a]"
          >
            Terms
          </a>
          <a
            href="https://charliesweeting.com/"
            className="text-[14px] p-[14px] hover:underline cursor-pointer text-[#70757a]"
          >
            Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
