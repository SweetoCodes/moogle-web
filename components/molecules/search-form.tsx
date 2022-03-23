import React from "react";
import Image from "next/image";
import { useTranslate, Search } from "../../utils/helpers/functions";
import MagnifyingGlass from "../atoms/icons/magnifying-glass";
import Microphone from "../atoms/icons/microphone";

interface Props {
  style: string;
}
const SearchInput: React.FC<Props> = (style) => {
  const [translation, getTranslation] = useTranslate("");

  return (
    <div className={" mx-auto w-full " + style}>
      <div className="flex flex-col w-full ">
        <div className=" w-[272px] mx-auto ">
          <img src={"/assets/moogle-logo.png"} />
        </div>

        <form
          className="flex flex-col p-[20px]"
          onSubmit={(e) => {
            e.preventDefault();
            Search(translation);
          }}
        >
          <div className="flex hover:shadow-md focus:shadow-md pt-[5px] pr-[8px] pl-[14px] flex-row h-[44px] max-w-[592px] border-[1px] rounded-[24px] border-[#dfe1e5] w-full mx-auto items-center ">
            <div className="pr-[13px] align-middle ">
              <MagnifyingGlass style="flex  " />
            </div>
            {/* <div>m</div> */}
            <input
              className="grow focus:outline-none"
              type="text"
              value={translation}
              onChange={getTranslation}
            />
            <div className=" px-[8px] align-middle ">
              <Microphone />
            </div>
          </div>

          <div className="flex flex-row mx-auto space-x-4 pt-[22px]">
            <div
              onClick={(e) => {
                e.preventDefault();
                Search(translation);
              }}
              className="flex h-[36px] py-[7px] align-middle text-center border-transparent border-[1px] hover:border-gray-300 px-[16px] min-w-[54px] bg-[#f8f9fa] text-[#3c4043] text-[14px] mx-[11px] my-[4px] rounded-[4px] cursor-pointer "
            >
              Moogle Search
            </div>
            <div className="flex h-[36px] py-[7px] align-middle text-center border-transparent border-[1px] hover:border-gray-300 px-[16px] min-w-[54px] bg-[#f8f9fa] text-[#3c4043] text-[14px] mx-[11px] my-[4px] rounded-[4px] cursor-pointer ">
              I'm Feeling Lucky
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchInput;

// background-color: #f8f9fa;
//     border: 1px solid #f8f9fa;
//     border-radius: 4px;
//     color: #3c4043;
//     font-family: arial,sans-serif;
//     font-size: 14px;
//     margin: 11px 4px;
//     padding: 0 16px;
//     line-height: 27px;
//     height: 36px;
//     min-width: 54px;
//     text-align: center;
//     cursor: pointer;
